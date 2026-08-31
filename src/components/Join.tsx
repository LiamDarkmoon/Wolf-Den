import { useEffect, useState } from "react";
import Button  from "../components/button";
import { supabase } from '../db/supabase-browser';
import { navigate } from "astro:transitions/client";

export default function Join({
    isRegistered,
    role: initialRole,
    currentPlayers,
    currentSubstitutes,
    maxPlayers,
    adventureId
}: {
    isRegistered: boolean;
    role: "titular" | "suplente" | null;
    currentPlayers: number;
    currentSubstitutes: number;
    maxPlayers: number;
    adventureId: string;
}){
    const [misionState, setMisionState] = useState("");
    const [role, setRole] = useState(initialRole);
    const [registered, setRegistered] = useState(isRegistered);
    const [playerCount, setPlayerCount] = useState(currentPlayers);
    const [substituteCount, setSubstituteCount] = useState(currentSubstitutes);

    const isFull = playerCount >= maxPlayers;

    useEffect(() => {
        if (!misionState) return;

        const timer = setTimeout(() => {
            setMisionState("");
        }, 10000);

        return () => clearTimeout(timer);
    }, [misionState]);

    useEffect(() => {

        const channel = supabase
            .channel(`adventure-${adventureId}`)
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "adventure_registrations",
                    filter: `adventure_id=eq.${adventureId}`,
                },
                async () => {

                    try {

                        const { data, error } =
                            await supabase.rpc(
                                "get_adventure_status",
                                {
                                    p_adventure_id: adventureId,
                                }
                            );

                        if (error) {
                            console.error(
                                "Status error:",
                                error
                            );
                            return;
                        }
                        console.log(data)

                        // Acá actualizamos React
                        setPlayerCount(
                            data.current_players
                        );

                        setSubstituteCount(
                            data.current_substitutes
                        );

                        setRegistered(
                            data.is_registered
                        );

                        setRole(
                            data.role ?? null
                        );

                    } catch (error) {

                        console.error(
                            "Realtime refresh error:",
                            error
                        );

                    }

                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };

    }, [adventureId]);

    const handleRegistration = async () => {
        
        if (registered) {
            return;
        }

        try {
            const { data, error } = await supabase.rpc(
                "register_for_adventure",
                {
                    p_adventure_id: adventureId,
                }
            );

            if (error) {
                console.error("RPC error:", error);
                setMisionState("No se pudo realizar la inscripción.");
                return;
            }

            if (data.success) {

                if (data.role === "titular") {
                    setMisionState("Te has registrado como titular.");
                    console.log('done... navigating')
                    navigate(`/adventures/league/${adventureId}`)
                } else {
                    setMisionState("Te has registrado como suplente.");
                }
                return;
            }

            switch (data.error) {
                case "already_registered":
                    setMisionState("Ya estás registrado.");
                    break;

                case "adventure_full":
                    setMisionState("Misión llena.");
                    break;

                case "registration_closed":
                    setMisionState("Inscripciones cerradas.");
                    break;

                case "not_authenticated":
                    setMisionState("Necesitas iniciar sesión.");
                    break;

                default:
                    setMisionState("No se pudo realizar la inscripción.");
                    console.error("Unexpected RPC response:", data);
            }

        } catch (error) {
            console.error(
                "Error registering for adventure:",
                error
            );

            setMisionState(
                "Ocurrió un error inesperado."
            );
        }
        console.log('done... navigating')
        navigate(`/adventures/league/${adventureId}`)
    };

    const handleCancellation = async () => {
        try {
            const { data, error } = await supabase.rpc(
                "cancel_adventure_registration",
                {
                    p_adventure_id: adventureId,
                }
            );

            if (!data.success) {

                if (data.error === "not_registered") {
                    setRegistered(false);
                    setRole(null);
                }

                return;
            }

        } catch (error) {
            console.error("Error cancelling registration:", error);
        }
    };
    
    return(
        <>
            <p className="font-semibold underline">
                Titulares: 
                <span className={isFull ? "text-primary" : ""}>
                    {playerCount}
                </span>
                {" "}de{" "}
                <span className="text-primary">
                    {maxPlayers}
                </span>
            </p>

            <p className="font-semibold underline">
                Suplentes: 
                <span className="mb-2"> 
                    {substituteCount}
                </span>
            </p>

            {misionState && (
                <p className="mb-4 text-center text-primary-hover">{misionState}</p>
            )}
            <Button
                onClick={handleRegistration}
                disabled={registered}
            >
                {role === "titular"
                    ? "✓ Registrado titular"
                    : role === "suplente"
                        ? "✓ Registrado suplente"
                        : isFull
                            ? "Anotarse como suplente"
                            : "Unirse a la misión"
                }
            </Button>
            <div className="h-10">
                {
                    registered &&
                    <button 
                        onClick={handleCancellation}
                        className="underline cursor-pointer"
                    >
                        cancelar participacion
                    </button>
                }
            </div>
        </>
    )
}