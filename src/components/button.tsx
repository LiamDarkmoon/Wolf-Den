import { navigate } from "astro:transitions/client";
import ButtonFilled from "../../public/button-filled";
import ButtonEmpty from "../../public/button";

export default function Button({
  onClick,
  children,
  to,
  type,
  secondary,
  disabled,
  size,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  to?: string;
  type?: "button" | "submit";
  secondary?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const handleNavigate = (to: string | undefined) => {
    if (to) {
      navigate(to);
    }
  };
  console.log("Button component rendered with props:", {
    secondary,
    disabled,
    size,
  });

  return (
    <button
      type={type ?? "button"}
      onClick={onClick || (() => handleNavigate(to))}
      disabled={disabled}
      className={`group relative flex items-center justify-center ${disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer "} ${secondary ? "text-main-text" : "text-primary"} `}
    >
      {secondary ? (
        <svg
          className={`bttn ${size === "sm" ? "w-37.5" : size === "md" ? "w-50" : "w-75"} ${disabled ? "" : "group-hover:scale-105 group-active:scale-95"} `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 243.91 76.65"
        >
          <path
            className={`${secondary ? "text-main-text group-hover:text-secondary-text group-active:text-main-text" : `text-primary ${disabled ? "" : "group-hover:text-primary-hover group-active:text-primary"}`}`}
            fill="currentColor"
            d="M243.91,38.32l-10.04-10.23V15.39h-8.57v-6.86h-97L119.77,0l-8.54,8.54H15.73v6.86h-5.7v12.43L0,38.06l10.04,10.23v12.11h5.7v5.14H108.66l1.72,1.72,9.38,9.39,9.38-9.39,1.72-1.72h94.43v-5.14h8.57v-11.84l10.04-10.23Zm-10.04,5.95v-11.89l5.83,5.95-5.83,5.95Zm-20.92-32.73h9.35v6.86h8.57v6.88l-3.51-3.24h-9.44l-4.97-5.07v-5.43ZM13.04,18.39h5.7v-6.86h12.39v5.35l-5.05,5.15H15.43l-2.4,2.7v-6.34Zm-3,13.71v11.89l-5.83-5.95,5.83-5.95Zm21.09,30.43h-12.39v-5.14h-5.7v-6.01l2.86,3.23h10.18l5.05,5.15v2.78Zm-3.79-10.93h-10.09l-2.39-2.69-1.82-1.86V29.05l1.87-1.91,1.87-2.1h10.55l6.79-6.92v-6.58h5.91s.96,0,.96,0h1.62l-26.44,26.21,25.62,25.06-7.67,.03v-4.31l-6.79-6.92Zm102.31,10.93l-2.6,2.6-7.26,7.26-7.26-7.26-2.6-2.6-63.85,.25-25.62-25.06L44.34,14.06l2.53-2.52H112.48l7.29-7.29,7.29,7.29h70.48l-.26,.26,26.19,25.94-25.3,25.06-68.54-.26Zm80.32,.3l-7.53-.03,25.31-25.07-26.45-26.2h8.67v6.66l6.71,6.84h9.53l4.68,4.32v17.97l-4.12,4.27h-10.09l-6.71,6.85v4.38Zm20.92-5.44h-8.57v5.14h-9.35v-2.86l4.97-5.07h10.1l2.85-2.95v5.74Z"
          />
        </svg>
      ) : (
        <svg
          className={`bttn ${size === "sm" ? "w-37.5" : size === "md" ? "w-50" : "w-75"} ${disabled ? "" : "group-hover:scale-105 group-active:scale-95"} `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 243.91 76.65"
        >
          <g>
            <g>
              <g>
                <path
                  className={`${secondary ? "text-main-text group-hover:text-secondary-text group-active:text-main-text" : `text-primary ${disabled ? "" : "group-hover:text-primary-hover group-active:text-primary"}`}`}
                  fill="currentColor"
                  d="M120.46,78.06l-11.31-11.32H15.94v-5.14h-5.7v-12.41L0,38.77l10.23-10.43V15.61h5.7v-6.86H111.72L120.47,0l8.74,8.74h97.29v6.86h8.57v13l10.23,10.42-.33,.36-9.91,10.1v12.14h-8.57v5.14h-94.72l-11.31,11.32Zm-103.52-12.32H109.57l10.89,10.9,10.89-10.9h94.14v-5.14h8.57v-11.54l9.85-10.04-9.84-10.03v-12.4h-8.57v-6.86h-96.71L120.47,1.41l-8.33,8.33H16.93v6.86h-5.7v12.13L1.4,38.77l9.84,10.03v11.81h5.7v5.14Zm103.55,8.06l-10.07-10.07-63.85,.25-26.13-25.56L47.36,11.75H112.97l7.5-7.5,7.5,7.5h71.48l-.76,.76,26.19,25.94-25.81,25.56h-.21s-68.32-.26-68.32-.26l-10.06,10.06Zm-9.65-11.07l9.65,9.65,8.65-8.65h-.83s4.69-2.46,4.69-2.46l-1.46,1.47,67.13,.25,24.79-24.56-25.95-25.7H127.55l-7.08-7.08-7.08,7.08H47.78l-2.38,2.37-23.52,23.3,25.11,24.56,63.85-.25Zm-76.52,1.31v-4.61l-6.51-6.63h-10.09l-2.54-2.86-1.95-1.99V29.55l2.01-2.06,2-2.25h10.56l6.5-6.62v-6.88h10.21l-26.94,26.71,26.13,25.56-9.39,.04Zm-5.58-11.72l6.58,6.7v4.01l5.95-.02-25.11-24.56L42.1,12.75h-6.78v6.28l-7.08,7.22h-10.54l-1.72,1.93-1.74,1.78v17.59l1.68,1.71,2.26,2.54h11.12l-.55,.52Zm181.93,11.71l-8.74-.04,25.81-25.57-26.95-26.7h10.38v6.96l6.42,6.54h9.51l4.99,4.6v18.39l-4.41,4.57h-10.09l-6.42,6.55v4.68h-.5Zm-6.32-1.02l5.82,.02v-4.09l7-7.15h10.09l3.83-3.97V30.28l-4.38-4.04h-9.54l-7-7.14v-6.36h-6.96l25.95,25.7-24.81,24.58Zm19.17,.72h-10.35v-3.56l5.26-5.37h10.1l3.56-3.69v7.48h-8.57v5.14Zm-9.35-1h8.35v-5.14h8.57v-4l-2.14,2.21h-10.1l-4.68,4.77v2.16Zm-182.34,1h-12.89v-5.14h-5.7v-7.83l3.59,4.05h10.16l5.34,5.45v2.98h-.5v.49Zm-11.89-1h11.39v-2.07l-4.76-4.85h-10.19l-2.14-2.41v4.19h5.7v5.14Zm214.13-16.53v-14.35l7.03,7.17-7.03,7.17Zm1-11.9v9.45l4.63-4.72-4.63-4.73ZM11.24,45.92l-7.03-7.17,7.03-7.17v14.35Zm-5.63-7.17l4.63,4.72v-9.45l-4.63,4.73Zm226.46-11.62l-4.21-3.88h-9.46l-5.26-5.37v-6.13h10.35v6.86h8.57v8.52Zm-13.24-4.88h9.43l2.81,2.6v-5.24h-8.57v-6.86h-8.35v4.73l4.68,4.77ZM13.23,26.75v-8.16h5.71v-6.86h13.39v6.05l-5.34,5.45h-10.64l-3.12,3.52Zm1-7.16v4.52l1.68-1.88h10.66l4.76-4.85v-4.65h-11.39v6.86h-5.71Z"
                />
              </g>
              <g
                className={`${secondary ? "text-main-text group-hover:text-secondary-text group-active:text-main-text" : `text-primary ${disabled ? "" : "group-hover:text-primary-hover group-active:text-primary"}`}`}
                fill="currentColor"
              >
                <polygon points="197.98 12.51 198.24 12.25 127.76 12.25 120.47 4.96 113.18 12.25 47.57 12.25 45.04 14.77 21.16 38.43 46.78 63.49 110.63 63.24 113.23 65.84 120.49 73.1 127.75 65.84 130.33 63.25 198.87 63.51 224.17 38.45 197.98 12.51" />
                <polygon points="43.31 12.25 41.69 12.25 40.73 12.25 34.82 12.25 34.82 18.83 28.03 25.75 17.48 25.75 15.61 27.85 13.74 29.76 13.74 47.76 15.56 49.62 17.95 52.31 28.04 52.31 28.03 52.32 34.82 59.24 34.82 63.55 42.49 63.52 16.87 38.46 43.31 12.25" />
                <polygon points="16.6 55.32 13.74 52.09 13.74 58.1 19.44 58.1 19.44 63.24 31.83 63.24 31.83 60.47 26.78 55.32 16.6 55.32" />
                <polygon points="228.06 22.75 231.57 25.99 231.57 19.11 223 19.11 223 12.25 213.65 12.25 213.65 17.68 218.62 22.75 228.06 22.75" />
                <polygon points="10.74 44.7 10.74 32.81 10.74 32.8 4.91 38.75 10.74 44.7" />
                <polygon points="26.78 22.74 31.83 17.59 31.83 12.24 19.44 12.24 19.44 19.1 13.74 19.1 13.73 19.1 13.73 25.44 16.13 22.74 26.78 22.74" />
                <polygon points="218.64 55.31 213.67 60.38 213.67 63.24 223.02 63.24 223.02 58.1 231.59 58.1 231.59 52.36 228.74 55.31 218.64 55.31" />
                <polygon points="234.57 44.98 234.57 44.99 240.4 39.04 234.57 33.09 234.57 44.98" />
                <polygon points="217.38 25.74 210.67 18.9 210.67 12.24 202 12.24 228.45 38.44 203.14 63.51 210.67 63.54 210.67 63.53 210.67 59.15 217.38 52.3 227.47 52.3 231.59 48.03 231.59 30.06 226.91 25.74 217.38 25.74" />
              </g>
            </g>
          </g>
        </svg>
      )}    
      <span
        className={`absolute ${secondary ? "text-main-text group-hover:text-secondary-text group-active:text-main-text group-hover:scale-105 group-active:scale-95" : `text-main-text ${disabled ? "" : " group-hover:scale-105 group-active:scale-95"}`} `}
      >
        {children}
      </span>
    </button>
  );
}
