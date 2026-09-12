export default function LogtButton({ isLoged } : { isLoged: boolean }) {
  return (
    <a
      href={ isLoged ? "/auth/logout" : "/auth/login" }
      className="flex gap-2 p-2 items-center font-black rounded-xl text-sm bg-primary hover:bg-primary-hover transition-all duration-300"
    >
      { isLoged 
          ? "LogOut"
          : "LogIn"
      }
      <i className="fa-solid fa-right-to-bracket ms-1"></i>
    </a>
  );
}
