import Avatar from "../Avatar";
import { useCharacter } from "../../lib/hooks/useCharacter";
import Under from "../Under";

export default function CharacterInfo() {
    const { character } = useCharacter();

    return (
        <article className='hidden md:flex flex-col items-center w-2/5 p-5 rounded-md scroll text-secondary-bg'>
            <div className="w-1/2 text-center">
                <Avatar avatar={ character?.class ? character?.class : 'druid'} />
                <h2 className="h-8 text-2xl">{character.name}</h2>
                <span> {character.background} - {character.species} - {character.class} </span>
                <Under/>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 p-4">
                {
                
                    Object.entries(character.abilities).map(([ability, score]) => (
                    <div key={ability} className={`flex items-center justify-between w-1/4 h-12.5 p-2 border-y-4 border-secondary-bg`}>
                        <span className="w-10 text-2xl font-semibold">{ability}:</span>
                        <span className="text-2xl font-semibold"> {score}</span>
                    </div>
                ))}
            </div>
        </article>
    )
}