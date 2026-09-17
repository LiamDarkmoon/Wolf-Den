import type { User } from "@supabase/supabase-js";
import AdminButton from "./AdminButton";
import LogButton from "./LogButton";
import FeedbackButton from "./FeedbackButton";
import NotificationButton from "./buttons/NotificationButton";
import Hamburger from "./buttons/Hamburguer";
import { useState } from "react";

export default function Navigation({
  isInAdmin,
  isInProfile,
  isInHome,
  role,
  user,
}: {
  isInAdmin: boolean;
  isInProfile: boolean;
  isInHome: boolean;
  role: string | null;
  user: User | null;
}) {

  const [visible, setVisible] = useState(false)
  const [unread, setUnread] = useState(0)

  return (
    <nav className="p-3 flex items-center z-100  cursor-pointer w-full">
      <a
        href="/"
        className="font-black me-auto tittle text-primary hover:text-primary-hover hover:scale-110 transition-all duration-500 group"
      >
        <i className={isInHome ? "fa-solid fa-paw -me-1 rotate-45 group-hover:translate-x-28 transition-all duration-500" : "fa-solid fa-paw -me-1 rotate-45" }></i>
        {
          isInHome && "Wolf's Den"
        }
      </a>
      {visible ?
        user ? (
        <div className="flex justify-end items-center gap-3 ms-auto">

            <FeedbackButton />
            <AdminButton inAdmin={isInAdmin} role={role} />
            <NotificationButton setUnread={setUnread}/>

          {isInProfile ? (
            <LogButton isLoged={true} />
          ) : (
            <a
              className="flex gap-2 p-2 me-3 items-center font-black rounded-lg text-xs bg-primary hover:bg-primary-hover transition-all duration-300"
              href={`/profile/${user.id}`}
            >
              <span className="hidden md:block">
                {user.user_metadata?.full_name?.trim().split(/\s+/)[0]}
              </span>

              {role === "admin" ? (
                <i className="fa-solid fa-user-gear" />
              ) : role === "super_admin" ? (
                <i className="fa-solid fa-user-shield" />
              ) : (
                <i className="fa-solid fa-user" />
              )}
            </a>
          )}
        </div>
      ) : (
        <LogButton isLoged={false} />
      ) : null}
      <Hamburger onClick={()=>setVisible(!visible)} unreadCount={unread}/>
    </nav>
  );
}
