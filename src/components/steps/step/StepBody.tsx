

export default  function StepBody({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex w-full max-w-screen min-h-87.5 max-h-112.5 py-2 h-full gap-2 overflow-y-hidden overflow-x-scroll scrollbar-none">
            { children }
        </div>
    )
}