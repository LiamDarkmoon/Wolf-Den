export default function InputField({ label, value, onChange, id }: { label: string; value: string; onChange: (value: string) => void; id: string }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-1.5 mb-5">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <div className="relative grid place-items-center mt-4">
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-5 w-75 z-10 active:outline-none focus:outline-none"
        />
        <svg className="absolute text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 70" fill="currentColor">
            <path d="M124.64,70.27l-9.19-9.19H38.73l-6.39,6.39-6.39-6.39H6.25v-19.7L0,35.14l6.25-6.25V9.19H25.95l6.39-6.39,6.39,6.39H115.45L124.64,0l9.19,9.19h77.45l6.39-6.39,6.39,6.39h19V28.18l6.95,6.95-6.95,6.95v19h-19l-6.39,6.39-6.39-6.39h-77.45l-9.19,9.19Zm-86.84-11.42H116.38l8.26,8.26,8.26-8.26h79.3l5.46,5.46,5.46-5.46h17.69v-17.69l6.03-6.03-6.03-6.03V11.42h-17.69l-5.46-5.46-5.46,5.46h-79.3l-8.26-8.26-8.26,8.26H37.8l-5.46-5.46-5.46,5.46H8.49V29.81l-5.33,5.33,5.33,5.33v18.39H26.88l5.46,5.46,5.46-5.46Z"/>
        </svg>
      </div>
    </div>
  )
}