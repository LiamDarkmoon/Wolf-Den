import type { User } from "@supabase/supabase-js";
import AdminButton from "./AdminButton";
import LogButton from "./LogButton";
import FeedbackButton from "./FeedbackButton";
import NotificationButton from "./buttons/NotificationButton";
import Hamburger from "./buttons/Hamburguer";
import { useState, useEffect } from "react";
import { actions } from "astro:actions";
import ProfileButton from "./buttons/ProfileButton";

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
  const [visible, setVisible] = useState(false);
  const [popup, setPopup] = useState<"feedback" | "notifications" | null>(null);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const loadUnread = async () => {
      const result = await actions.getNotifications();

      if (result.error) {
        console.error("Error loading notifications:", result.error);
        return;
      }

      setUnread(result.data.unreadCount);
    };

    loadUnread();
  }, []);

  return (
    <nav className="p-3 flex items-center z-100 cursor-pointer w-full">
      <a
        href="/"
        className="font-black me-auto tittle text-primary hover:text-primary-hover hover:scale-110 transition-all duration-500 group"
      >
        <i className="fa-solid fa-paw -me-1 rotate-45 group-hover:translate-x-28 transition-all duration-500" />
        Wolf's Den
      </a>

      {user ? (
        <>
          {visible && (
            <div className="fixed bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:bottom-auto md:translate-0 md:relative rounded-xl bg-border/80 md:bg-transparent flex justify-end items-center gap-3 p-3 md:p-0 ms-auto">
              <FeedbackButton popup={popup} setPopup={setPopup} />

              <AdminButton inAdmin={isInAdmin} role={role} />

              <NotificationButton
                setUnread={setUnread}
                popup={popup}
                setPopup={setPopup}
              />

              {isInProfile ? (
                <LogButton isLoged={true} />
              ) : (
                <ProfileButton role={role ?? 'user'} id={user.id} />
              )}
            </div>
          )}

          <Hamburger
            className="relative"
            onClick={() => {
              setVisible((prev) => !prev);
              setPopup(null);
            }}
            unreadCount={unread}
          />
        </>
      ) : (
        <LogButton isLoged={false} />
      )}
    </nav>
  );
}
