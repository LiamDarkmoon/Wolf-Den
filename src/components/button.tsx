export default function Button({ children, onClick, className }: { children: string; onClick?: () => void; className?: string }) {
    return (
        <button onClick={onClick} className={`bttn ${className || ''}`}>
            {children}
        </button>
    );
}