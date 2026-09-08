export default function AdminButton({ role } : { role: string | null }){
    return(
        (role === 'admin' || role === 'super_admin') && (
            <a
                href="/admin"
                className="fixed bottom-10 right-10 size-12.5 grid place-items-center rounded-full font-bold border border-main-text text-main-text bg-primary hover:bg-primary-hover transition-all duration-300"
            >
                <i className="fa-solid fa-users-gear"></i>
                
            </a>
        )
    )
}