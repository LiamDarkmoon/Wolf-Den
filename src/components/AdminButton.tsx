import Bttn from "./buttons/Bttn";

export default function AdminButton({
  role,
  inAdmin,
}: {
  role: string | null;
  inAdmin: boolean;
}) {
  return (
    (role === "admin" || role === "super_admin") && (
      <Bttn
      tooltip="Administracion"
        to={inAdmin ? "/" : "/admin"}
      >
        {inAdmin ? (
          <i className="fa-solid fa-house"></i>
        ) : (
          <i className="fa-solid fa-layer-group"></i>
        )}
      </Bttn>
    )
  );
}
