import { useState } from "react";
import Bttn from "../components/buttons/Bttn";
import { actions } from "astro:actions";
import type { Popup } from "../lib/types";

export default function FeedbackButton({
  popup,
  setPopup,
}: {
  popup: Popup;
  setPopup: React.Dispatch<React.SetStateAction<"feedback" | "notifications" | null>>;
}) {
  const visible = popup === "feedback"
  const [report, setReport] = useState({
    title: "",
    message: "",
  });

  const handleClick = async () => {
    setPopup((current) => (current === "feedback" ? null : "feedback"));
  };

  const handleReport = async () => {
    try {
      await actions.sendReport(report);

      setReport({
        title: "",
        message: "",
      });

    } catch (error) {
      console.error("Error al enviar el reporte:", error);
    }
  };

  return (
    <div className="relative">
      <Bttn tooltip="Feedback" onClick={handleClick} active={visible}>
        <i className="fa-solid fa-bug"></i>
      </Bttn>

      {visible && (
        <div className="fixed bottom-16 md:bottom-auto md:absolute flex flex-col items-center gap-2 p-2 left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-80 bg-main-bg border border-primary/20 rounded-md shadow-lg z-2 max-h-100 overflow-y-scroll scrollbar-none">
          <div className="flex flex-col gap-1 p-1">
            <label htmlFor="title">Titulo</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="¿Encontraste un problema?"
              onChange={(e) =>
                setReport((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              className="ring ring-primary rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-1 p-1">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="!Dejanos tu comentario¡"
              onChange={(e) =>
                setReport((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              className="ring ring-primary rounded-md p-2 w-full"
            />
          </div>
          <button
            type="button"
            className="w-fit grid place-items-center p-2 rounded-lg text-main-text text-sm bg-primary hover:bg-primary-hover transition-all duration-300 cursor-pointer"
            onClick={handleReport}
          >
            Enviar Reporte
          </button>
        </div>
      )}
    </div>
  );
}
