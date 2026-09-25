import Bttn from "./buttons/Bttn";

export default function LogButton({ isLoged }: { isLoged: boolean }) {
  return (
    <Bttn tooltip={isLoged ? "Salir" : "Entrar"} to={isLoged ? "/auth/logout" : "/auth/login"} className="md:me-3">
      {isLoged ? (
        <i className="fa-solid fa-right-to-bracket ms-1"></i>
      ) : (
        <i className="fa-solid fa-right-to-bracket ms-1 rotate-y-180"></i>
      )}
    </Bttn>
  );
}
