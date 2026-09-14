import type { User } from "@supabase/supabase-js";
import AdminButton from "./AdminButton";
import LogtButton from "./LogButton";
import FeedbackButton from "./FeedbackButton";
import NotificationButton from "./buttons/NotificationButton";

export default function Navigation({
  isInAdmin,
  isInProfile,
  role,
  user,
}: {
  isInAdmin: boolean;
  isInProfile: boolean;
  role: string | null;
  user: User | null;
}) {
  return (
    <nav className="py-3 px-6 flex justify-between items-center z-100  cursor-pointer w-full">
      <a
        href="/"
        className="font-black tittle text-primary hover:text-primary-hover hover:scale-110 transition-all duration-500 group"
      >
        <i className="fa-solid fa-paw -me-1 rotate-45 group-hover:translate-x-28 transition-all duration-500"></i>
        Wolf's Den
      </a>
      {user ? (
        <div className="flex justify-end items-center gap-5">
          <FeedbackButton />
          <AdminButton inAdmin={isInAdmin} role={role} />
          <NotificationButton />

          {isInProfile ? (
            <LogtButton isLoged={true} />
          ) : (
            <a
              className="flex gap-2 p-2 items-center font-black rounded-lg text-xs bg-primary hover:bg-primary-hover transition-all duration-300"
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
        <LogtButton isLoged={false} />
      )}
    </nav>
  );
}
