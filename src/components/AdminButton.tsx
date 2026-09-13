export default function AdminButton({
  role,
  inAdmin,
}: {
  role: string | null;
  inAdmin: boolean;
}) {
  return (
    (role === "admin" || role === "super_admin") && (
      <a
        href={inAdmin ? "/" : "/admin"}
        className="grid place-items-center p-2 rounded-lg text-main-text bg-primary hover:bg-primary-hover transition-all duration-300"
      >
        {inAdmin ? (
          <i className="fa-solid fa-house"></i>
        ) : (
          <i className="fa-solid fa-layer-group"></i>
        )}
      </a>
    )
  );
}
