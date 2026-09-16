import type { steps, Step } from "./CharacterCreator/CharacterProvider";

export default function WizardProgress({
  stepList,
  stepIndex,
}: {
  stepList: typeof steps;
  stepIndex: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {stepList.map((item: Step, i) => (
        <div
          key={item.id}
          className="items-center justify-center gap-2 hidden md:flex"
        >
          <span
            className={
              stepIndex === i
                ? "text-primary"
                : stepIndex > i
                  ? "text-primary/70"
                  : ""
            }
          >
            {stepIndex > i ? (
              <i className="fa-solid fa-square-check"></i>
            ) : (
              item.id
            )}
          </span>
          {i !== stepList.length - 1 && (
            <i className="fa-solid fa-angles-right ms-1 hidden md:block"></i>
          )}
        </div>
      ))}
      <div className="flex flex-col gap-1 justify-center items-center">
        <span className="md:hidden">
          {stepIndex + 1} / {stepList.length}
        </span>
        <span className="md:hidden">
          {stepList.map((item, i) => (
            <i
              className={
                "fa-solid fa-circle-dot text-sm mx-1 " +
                (stepIndex === i
                  ? "text-primary"
                  : stepIndex > i
                    ? "text-primary/70"
                    : "")
              }
            ></i>
          ))}
        </span>
      </div>
    </div>
  );
}
