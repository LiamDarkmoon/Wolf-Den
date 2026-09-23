

export default  function StepBody({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex  md:flex-wrap w-full max-w-screen h-80 md:h-87.5 justify-center p-2 gap-2 overflow-scroll scrollbar-none">
            { children }
        </div>
    )
}