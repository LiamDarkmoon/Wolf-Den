import Corner from "./corner";
import Under from "./Under";

export default function Frame(){
    return(
        <>
            <Corner className="absolute size-20 -top-3 -left-3 rotate-90"/>
            <Corner className="absolute size-20 -top-3 -right-3 rotate-180"/>
            <Corner className="absolute size-20 -bottom-3 -right-3 -rotate-90"/>
            <Corner className="absolute size-20 -bottom-3 -left-3"/>
        </>
    )
}