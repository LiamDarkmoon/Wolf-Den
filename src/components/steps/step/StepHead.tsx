import Under from "../../Under"

export default  function StepHead() {
    return (
        <div className="flex flex-col justify-center text-center mb-4">
          <h2 className="text-xl font-semibold">Elije una classe: </h2>
          <span className="h-8 text-2xl text-primary font-bold mt-2">{character.class}</span>
          <Under/>
        </div>
    )
}