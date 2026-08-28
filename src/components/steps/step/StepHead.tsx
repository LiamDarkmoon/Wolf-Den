import Under from "../../Under"

export default  function StepHead({ title, children } : { title: string, children: React.ReactNode}) {
    return (
        <div className="flex flex-col justify-center text-center mb-4">
          <h2 className="text-2xl font-semibold">
            {title}
          </h2>
          <span className="h-8 text-3xl text-primary font-bold mt-2">
            {children}
          </span>
          <Under/>
        </div>
    )
}