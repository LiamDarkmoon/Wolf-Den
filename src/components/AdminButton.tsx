export default function AdminButton({ role } : { role: string | null }){
    return(
        (role === 'admin' || role === 'super_admin') && (
            <a
                href="/admin"
                className="grid place-items-center p-2 rounded-lg text-main-text bg-primary hover:bg-primary-hover transition-all duration-300"
            >
                <i className="fa-solid fa-layer-group"></i>
                
            </a>
        )
    )
}