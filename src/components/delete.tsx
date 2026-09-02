import { actions } from "astro:actions";

export default function Delete({className, id}:{className?:string, id:string}) {
    return(
        <button className={className + ' size-5 text-sm grid place-items-center cursor-pointer'} onClick={()=>actions.deleteAdventure({id: id})}>
            <i className="fa-solid fa-trash text-rose-600"></i>
        </button>
    )
}