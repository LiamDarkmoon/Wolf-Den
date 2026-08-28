

export default  function StepBody({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex flex-wrap max-w-full h-100 md:h-87.5 justify-center p-2 gap-2 overflow-y-scroll scrollbar-none">
            { children }
        </div>
    )
}