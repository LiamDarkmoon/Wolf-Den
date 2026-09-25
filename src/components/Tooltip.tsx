import type React from "react";

export default function Tooltip({ children } : { children: React.ReactNode }) {
    return (
        <span className="absolute p-2 rounded-lg -top-12 md:top-auto md:-bottom-10 bg-border pointer-events-none whitespace-nowrap z-50">
            {children}
        </span>
    )
}