import { navigate } from "astro:transitions/client";

export default function Button(
    { 
    children,
    to,
    type,
    secondary,
    size
}: { children: React.ReactNode; to?: string; type?: "button" | "submit"; secondary?: boolean; size?: "sm" | "md" | "lg" }) {
    const handleNavigate = (to: string | undefined) => {
        if (to) {
            console.log("Navigating to:", to);
            navigate(to);
        } else {
            console.log("ups, no se ha proporcionado un destino para la navegación.");
        }
    };

    return (
        
        <button type={type ?? "button"} onClick={() => handleNavigate(to)}  className={`group relative flex items-center justify-center cursor-pointer ${secondary ? "text-main-text" : "text-primary"} transition-transform duration-200 ease-in-out`}>
            <svg  className={`bttn ${size === "sm" ? "w-37.5" : size === "md" ? "w-50" : "w-75"} group-hover:scale-105 group-active:scale-95`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.91 76.65">
                <path  className={`${secondary ? "text-main-text group-hover:text-secondary-text group-active:text-main-text" : "text-primary group-hover:text-primary-hover group-active:text-primary"}`} fill="currentColor" d="M243.91,38.32l-10.04-10.23V15.39h-8.57v-6.86h-97L119.77,0l-8.54,8.54H15.73v6.86h-5.7v12.43L0,38.06l10.04,10.23v12.11h5.7v5.14H108.66l1.72,1.72,9.38,9.39,9.38-9.39,1.72-1.72h94.43v-5.14h8.57v-11.84l10.04-10.23Zm-10.04,5.95v-11.89l5.83,5.95-5.83,5.95Zm-20.92-32.73h9.35v6.86h8.57v6.88l-3.51-3.24h-9.44l-4.97-5.07v-5.43ZM13.04,18.39h5.7v-6.86h12.39v5.35l-5.05,5.15H15.43l-2.4,2.7v-6.34Zm-3,13.71v11.89l-5.83-5.95,5.83-5.95Zm21.09,30.43h-12.39v-5.14h-5.7v-6.01l2.86,3.23h10.18l5.05,5.15v2.78Zm-3.79-10.93h-10.09l-2.39-2.69-1.82-1.86V29.05l1.87-1.91,1.87-2.1h10.55l6.79-6.92v-6.58h5.91s.96,0,.96,0h1.62l-26.44,26.21,25.62,25.06-7.67,.03v-4.31l-6.79-6.92Zm102.31,10.93l-2.6,2.6-7.26,7.26-7.26-7.26-2.6-2.6-63.85,.25-25.62-25.06L44.34,14.06l2.53-2.52H112.48l7.29-7.29,7.29,7.29h70.48l-.26,.26,26.19,25.94-25.3,25.06-68.54-.26Zm80.32,.3l-7.53-.03,25.31-25.07-26.45-26.2h8.67v6.66l6.71,6.84h9.53l4.68,4.32v17.97l-4.12,4.27h-10.09l-6.71,6.85v4.38Zm20.92-5.44h-8.57v5.14h-9.35v-2.86l4.97-5.07h10.1l2.85-2.95v5.74Z"/>
            </svg>
            <span className={`absolute ${secondary ? "text-main-text group-hover:text-secondary-text group-active:text-main-text" : "text-primary group-hover:text-primary-hover group-active:text-primary"} group-hover:scale-105 group-active:scale-95`}>{children}</span>
        </button>
    );
}