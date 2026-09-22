export default function LogButton({ isLoged }: { isLoged: boolean }) {
  return (
    <a
      href={isLoged ? "/auth/logout" : "/auth/login"}
      className="grid gap-1 p-2 md:me-3 place-items-center md:font-black rounded-lg text-sm bg-primary hover:bg-primary-hover transition-all duration-300"
    >
      {isLoged ? (
        <i className="fa-solid fa-right-to-bracket ms-1"></i>
      ) : (
        <i className="fa-solid fa-right-to-bracket ms-1 rotate-y-180"></i>
      )}
    </a>
  );
}
