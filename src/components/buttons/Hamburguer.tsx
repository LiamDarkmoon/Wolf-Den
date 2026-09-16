import Bttn from "./Bttn";

export default function Hamburger({ onClick } : {onClick: () => void }){
    return(
        <Bttn onClick={onClick}>
            <i className="fa-solid fa-burger"></i>
        </Bttn>
    )
}