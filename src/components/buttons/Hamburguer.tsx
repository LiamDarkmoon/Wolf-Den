import { useState } from "react";
import Bttn from "./Bttn";

export default function Hamburger({
  onClick,
  unreadCount,
}: {
  onClick: () => void;
  unreadCount: number;
}) {
    const [closed, setClosed] = useState(true)

    const handleOpen = () => {
        onClick()
        setClosed(!closed)
    }

  return (
    <div className="relative">
      <Bttn onClick={handleOpen}>
        <i className="fa-solid fa-burger"></i>
      </Bttn>
      {unreadCount > 0 && closed && (
        <span
          className="
  absolute
  -top-1
  -right-1
  min-w-4
  h-4
  px-1
  flex
  items-center
  justify-center
  rounded-full
  bg-red-500
  text-white
  text-[9px]
  font-bold
  leading-none
"
        >
          !
        </span>
      )}
    </div>
  );
}
