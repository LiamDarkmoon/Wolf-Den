import { useEffect, useState } from "react";
import { supabase } from "../../db/supabase-browser";
import Bttn from "./Bttn";
import { actions } from "astro:actions";
import type { Notification } from "../../lib/types";

export default function NotificationButton({setUnread} : {setUnread: React.Dispatch<React.SetStateAction<number>>}) {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | null = null;

    const setupRealtime = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      channel = supabase
        .channel(`notifications-${user.id}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "notifications",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            const notification = payload.new as Notification;

            setNotifications((prev) => {
              // Evita duplicados
              if (prev.some((item) => item.id === notification.id)) {
                return prev;
              }

              return [notification, ...prev];
            });

            setUnreadCount((prev) => prev + 1);
            setUnread((prev) => prev + 1);
          },
        )
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "notifications",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            const notification = payload.new as Notification;

            setNotifications((prev) => {
              const previous = prev.find((item) => item.id === notification.id);

              if (!previous) return prev;

              return prev.map((item) =>
                item.id === notification.id ? notification : item,
              );
            });

            setUnreadCount((count) => {
              const previous = notifications.find(
                (item) => item.id === notification.id,
              );

              if (!previous) return count;

              if (!previous.read_at && notification.read_at) {
                return Math.max(0, count - 1);
              }

              if (previous.read_at && !notification.read_at) {
                return count + 1;
              }

              return count;
            });
            setUnread((count) => {
              const previous = notifications.find(
                (item) => item.id === notification.id,
              );

              if (!previous) return count;

              if (!previous.read_at && notification.read_at) {
                return Math.max(0, count - 1);
              }

              if (previous.read_at && !notification.read_at) {
                return count + 1;
              }

              return count;
            });
          },
        )
        .subscribe((status) => {
          console.log("Notifications realtime:", status);
        });
    };

    setupRealtime();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  useEffect(() => {
    const loadNotifications = async () => {
      const result = await actions.getNotifications();

      if (result.error) {
        console.error("Error loading notifications:", result.error);
        return;
      }

      setNotifications(result.data.notifications);
      setUnreadCount(result.data.unreadCount);
      setUnread(result.data.unreadCount);
    };

    loadNotifications();
  }, []);

  const handleClick = async () => {
    setVisible((prev) => !prev);
  };

  const handleMarkAllAsRead = async () => {
    if (unreadCount === 0) return;

    const result = await actions.markAllNotificationsAsRead();

    if (result.error) {
      console.error("Error marking notifications:", result.error);
      return;
    }

    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read_at: notification.read_at ?? new Date().toISOString(),
      })),
    );

    setUnreadCount(0);
    setUnread(0);
  };

  const handleMarkReaded = async (notification: Notification) => {
    if (notification.read_at) return;

    const result = await actions.markNotificationAsRead({
      id: notification.id,
    });

    if (result.error) {
      console.error("Error marking notification:", result.error);
      return;
    }

    setNotifications((prev) =>
      prev.map((item) =>
        item.id === notification.id
          ? {
              ...item,
              read_at: new Date().toISOString(),
            }
          : item,
      ),
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
    setUnread((prev) => Math.max(0, prev - 1));
  };

  const handleArchive = async () => {
    const hasReadNotifications = notifications.some(
      (notification) => notification.read_at,
    );

    if (!hasReadNotifications) return;

    const result = await actions.archiveReadNotifications();

    if (result.error) {
      console.error("Error archiving notifications:", result.error);
      return;
    }

    setNotifications((prev) =>
      prev.filter((notification) => !notification.read_at),
    );
  };

  return (
    <div className="relative">
      <Bttn onClick={handleClick}>
        <i className="fa-solid fa-bell"></i>

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-red-600 text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Bttn>

      {visible && (
        <div className="fixed md:absolute left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-80 bg-main-bg border border-primary/20 rounded-md shadow-lg z-2 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-none">
          {notifications.length > 0 && unreadCount > 0 && (
            <button
              type="button"
              onClick={handleMarkAllAsRead}
              className="w-full p-2 text-sm text-primary hover:bg-primary/10 transition cursor-pointer"
            >
              Marcar todas como leídas
              <i className="fa-solid fa-eye ms-2"></i>
            </button>
          )}
          {notifications.length === 0 ? (
            <p className="p-4 text-sm text-gray-500">No hay notificaciones.</p>
          ) : (
            <ul className="">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-3 border-b border-primary/10 ${
                    !notification.read_at ? "bg-primary/10" : ""
                  }`}
                  onClick={() => handleMarkReaded(notification)}
                >
                  <p className="font-semibold">{notification.title}</p>

                  <p className="text-sm text-gray-400">
                    {notification.message}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {notifications.length > 0 && (
            <button
              type="button"
              onClick={handleArchive}
              className="w-full p-2 text-sm text-primary hover:bg-primary/10 transition cursor-pointer"
            >
              Archivar leidas
              <i className="fa-solid fa-box-archive ms-2"></i>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
