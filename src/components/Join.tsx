import { useEffect, useState } from "react";
import Button  from "../components/button";
import { supabase } from '../db/supabase-browser';
import { navigate } from "astro:transitions/client";
import { getGoogleCalendarUrl } from "../lib/utils/getCalendarUrl";

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
    const [adventureUrl, setAdventureUrl] = useState<string | null>(null);
    const [role, setRole] = useState(initialRole);
    const [registered, setRegistered] = useState(isRegistered);
    const [playerCount, setPlayerCount] = useState(currentPlayers);
    const [substituteCount, setSubstituteCount] = useState(currentSubstitutes);

    const isFull = playerCount >= maxPlayers;

    useEffect(() => {
        const loadAdventure = async () => {
            const { data: adventure, error } = await supabase
                .from("adventures")
                .select("*")
                .eq("id", adventureId)
                .single();

            if (error || !adventure) {
                console.error("Error loading adventure:", error);
                return;
            }

            const calendarUrl = getGoogleCalendarUrl({
                adventure_date: adventure.adventure_date,
                title: adventure.title,
                description: adventure.description,
                url: `https://wolf-den.vercel.app/adventures/${adventure.id}`,
            });

            setAdventureUrl(calendarUrl);
        };

        loadAdventure();
    }, [adventureId]);

    useEffect(() => {
        if (!misionState) return;

        const timer = setTimeout(() => {
            setMisionState("");
        }, 4000);

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
            const { data, error } = await supabase.functions.invoke(
            "register-for-adventure",
            {
                body: {
                adventureId,
                },
            }
            );
            
            if (error) {
                console.error("EDGE FUNCTION ERROR:", error);
                setMisionState("No se pudo realizar la inscripción.");
                return;
            }

            if (data.success) {

                if (data.role === "titular") {
                    setMisionState("Te has registrado como titular.");
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
        <div className="flex flex-col items-center gap-2">
            
            <p className="font-semibold underline">
                <i className="fa-solid fa-users me-1 text-primary"></i>
                Titulares: 
                <span className={isFull ? "text-primary" : ""}>
                    {" "}{playerCount}
                </span>
                {" "}de{" "}
                <span className="text-primary">
                    {maxPlayers}
                </span>
            </p>

            <p className="font-semibold underline">
                <i className="fa-solid fa-hourglass-half me-1 text-primary"></i>
                Suplentes: 
                <span className="mb-2"> 
                    {" "}{substituteCount}
                </span>
            </p>

            {
                role === "titular" ? (
                    <a href={adventureUrl ? adventureUrl : "#"} target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">
                        Agregar a Google Calendar
                        <i className="fa-solid fa-calendar ms-2"></i>
                    </a>)
                :
                <a target="_blank" rel="noopener noreferrer" className="h-6"></a>
            }

            <div className="h-4">
                {misionState && (
                    <p className="mb-4 text-center text-primary-hover">{misionState}</p>
                )}
            </div>
            <Button
                onClick={handleRegistration}
                disabled={registered}
                size="md"
            >
                {role === "titular"
                    ? "✓ Titular"
                    : role === "suplente"
                        ? "✓ Suplente"
                        : isFull
                            ? "Anotarse como suplente"
                            : "Unirse a la misión"
                }
            </Button>
            <div className="h-10">
                {
                    registered &&
                    <Button 
                        onClick={handleCancellation}
                        size="md"
                        secondary
                    >
                        Cancelar inscripción
                    </Button>
                }
            </div>
        </div>
    )
}