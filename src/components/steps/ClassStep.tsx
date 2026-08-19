import { useCharacter } from "../../lib/hooks/useCharacter";
import { Classes , type Class } from "../../lib/types"


export default function ClassStep() {
  const { character, updateCharacter } = useCharacter();

  const handleClassSelect = (className: Class) => {
    updateCharacter({ ...character, class: className });
  }

  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center text-center mb-4">
          <h2 className="text-xl font-semibold">Elije una classe: </h2>
          <span className="h-8 text-2xl text-primary font-bold mt-2">{character.class}</span>
          <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.81 37.11" fill="currentColor">
            <g >
              <g>
                <path d="M245.84,4.33c-2.46,.01-5.44,1.4-7.29,3.12-7.08,6.56-14,13.32-20.56,20.4-3.12,3.37-3.9,3.41-7.5-.29-6.15-6.33-12.6-12.39-18.53-18.91-3.24-3.56-6.82-4.57-11.41-4.56-47.33,.1-94.66,.06-141.99,.06l-5.05,1.68,4.97,2.24c46,0,96.62-.07,142.61,.12,2.61,.01,5.85,1.36,7.71,3.19,8.41,8.26,17.01,16.91,25.47,25.73q3.07-3.23,4.32-4.49c7.08-7.05,13.97-14.31,21.31-21.08,2.06-1.9,5.42-3.35,8.2-3.36,47.33-.19,94.66-.12,141.99-.11l5.5-1.83-5.25-2.07c-48.16,.01-96.33-.02-144.49,.18Z"/>
                <path d="M224,13.92c-3.28-3.36-6.5-6.67-9.59-9.83-3.33,3.31-6.62,6.56-9.87,9.79,3.2,3.22,6.42,6.46,9.58,9.64,3.43-3.33,6.74-6.55,9.88-9.6Z"/>
                <path d="M398.77,6.16c2.66,2.03,5.34,4.07,7.96,6.06,2.85-2.1,5.6-4.12,8.21-6.04-2.72-2.11-5.4-4.2-7.96-6.19-2.77,2.08-5.5,4.13-8.2,6.16Z"/>
                <path d="M422.79,2.26c-1.74,1.31-3.46,2.6-5.16,3.88,1.68,1.28,3.36,2.56,5.01,3.82,1.79-1.32,3.53-2.59,5.17-3.8-1.71-1.33-3.4-2.64-5.01-3.89Z"/>
                <path d="M12.87,6.19c2.61,1.92,5.36,3.94,8.21,6.04,2.62-2,5.29-4.03,7.96-6.06-2.71-2.03-5.43-4.08-8.2-6.16-2.56,1.99-5.24,4.07-7.96,6.19Z"/>
                <path d="M0,6.16c1.64,1.21,3.38,2.48,5.17,3.8,1.65-1.26,3.33-2.54,5.01-3.82-1.7-1.28-3.42-2.57-5.16-3.88C3.4,3.52,1.71,4.83,0,6.16Z"/>
                <path d="M118.7,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z"/>
                <path d="M311.25,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z"/>
              </g>
            </g>
          </svg>
        </div>
        <div className="flex flex-wrap max-w-100 max-h-75 justify-center items-center gap-2 overflow-y-scroll">
            {
                Object.entries(Classes).map(([className, classImage]) => (
                <div key={className} className={`border-4 rounded-full cursor-pointer ${character.class === className ? 'border-primary' : 'border-gray-300'}`} onClick={() => handleClassSelect(className as Class)}>
                    <img src={classImage.src} alt={className} className="w-37.5" />
                </div>
            ))}
        </div>
    </div>
  );
}