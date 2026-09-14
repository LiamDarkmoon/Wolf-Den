import { useState } from "react";
import Bttn from "./Bttn";
import { actions } from "astro:actions";
import type { Notification } from "../../lib/types";

export default function NotificationButton() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const handleClick = async () => {
    console.log("click");
    setVisible((prev) => !prev);

    if (!visible) {
      const result = await actions.getNotifications();

      if (result.error) {
        console.error("Error loading notifications:", result.error);
        return;
      }

      setNotifications(result.data.notifications);
      setUnreadCount(result.data.unreadCount);
    }
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
        <div className="absolute right-0 mt-2 w-80 bg-main-bg border border-primary/20 rounded-md shadow-lg z-50">
          {notifications.length === 0 ? (
            <p className="p-4 text-sm text-gray-500">No hay notificaciones.</p>
          ) : (
            <ul>
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
        </div>
      )}
    </div>
  );
}
