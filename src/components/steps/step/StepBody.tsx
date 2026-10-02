

export default  function StepBody({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex w-full max-w-screen max-h-100 h-full gap-2 overflow-y-hidden overflow-x-scroll scrollbar-none">
            { children }
        </div>
    )
}