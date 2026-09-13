import { actions } from "astro:actions";

export default function Delete({
  className,
  onDelete,
  id,
}: {
  className?: string;
  onDelete?: (id: string) => void;
  id: string;
}) {
  const handleDel = async () => {
    const deleted = await actions.deleteAdventure({ id });
    if (deleted.error) {
      console.error(deleted.error);
      return;
    }

    if (!onDelete){
      return
    }
    onDelete(id);
  };

  return (
    <button
      className={
        className + " size-5 text-sm grid place-items-center cursor-pointer"
      }
      onClick={() => handleDel()}
    >
      <i className="fa-solid fa-trash text-rose-600"></i>
    </button>
  );
}
