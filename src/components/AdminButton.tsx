export default function AdminButton({ role } : { role: string | null }){
    return(
        (role === 'admin' || role === 'super_admin') && (
            <a
                href="/admin"
                className="grid place-items-center text-primary hover:text-primary-hover transition-all duration-300"
            >
                <i className="fa-solid fa-users-gear"></i>
                
            </a>
        )
    )
}