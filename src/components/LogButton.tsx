export default function LogButton({ isLoged } : { isLoged: boolean }) {
  return (
    <a
      href={ isLoged ? "/auth/logout" : "/auth/login" }
      className="flex md:flex-row gap-1 p-2 me-3 items-center md:font-black rounded-lg text-xs bg-primary hover:bg-primary-hover transition-all duration-300"
    >
      { isLoged 
          ? "LogOut"
          : "LogIn"
      }
      <i className="fa-solid fa-right-to-bracket ms-1"></i>
    </a>
  );
}
