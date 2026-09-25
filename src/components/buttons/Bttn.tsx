import { useState, useRef } from "react";
import Tooltip from "../Tooltip";

export default function Bttn({
  tooltip,
  active,
  children,
  to,
  className,
  onClick,
}: {
  tooltip?: string;
  active?: boolean;
  children?: React.ReactNode;
  to?: string;
  className?: string;
  onClick?: () => void | Promise<void>;
}) {
  const [tt, setTt] = useState(false);

  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressed = useRef(false);

  const startLongPress = (e: React.PointerEvent<HTMLAnchorElement>) => {
    // Mouse y stylus con hover no necesitan long press
    if (e.pointerType !== "touch") return;

    longPressed.current = false;

    longPressTimer.current = setTimeout(() => {
      longPressed.current = true;
      setTt(true);
    }, 500);
  };

  const cancelLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si el usuario hizo long press, evitamos que el toque
    // termine ejecutando accidentalmente la navegación.
    if (longPressed.current) {
      e.preventDefault();
      longPressed.current = false;
      return;
    }

    onClick?.();
  };

  return (
    <a
      href={to}
      className={`${active ? "bg-primary-hover shadow-md shadow-primary-hover" : "bg-primary"} ${className} relative size-8 grid place-items-center p-2 rounded-lg text-main-text text-sm bg-primary hover:bg-primary-hover transition-all duration-300 cursor-pointer`}
      onClick={onClick}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") {
          setTt(true);
        }
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") {
          setTt(false);
        }

        cancelLongPress();
      }}
      onPointerDown={startLongPress}
      onPointerUp={cancelLongPress}
      onPointerCancel={() => {
        cancelLongPress();
        setTt(false);
      }}
      aria-label={tooltip}
    >
      {tt && tooltip && <Tooltip>{tooltip}</Tooltip>}
      {children}
    </a>
  );
}
