import Bttn from "./Bttn";

export default function ProfileButton({ role, id } : { role: string | null, id?: string }) {
  return (
    <Bttn tooltip="Perfil" to={`/profile/${id}`} className="md:me-3">
      {role === "admin" ? (
        <i className="fa-solid fa-user-gear" />
      ) : role === "super_admin" ? (
        <i className="fa-solid fa-user-shield" />
      ) : (
        <i className="fa-solid fa-user" />
      )}
    </Bttn>
  );
}
