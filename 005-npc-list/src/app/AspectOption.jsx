export default function AspectOption({ 
  option,
  selectedAspect,
  setSelectedAspect
}) {
  return (
    <button style={{ 
      all: "unset", 
      margin: 4, 
      padding: 4,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: option.id === selectedAspect?.id ? "turquoise" : "white",
      color: option.id === selectedAspect?.id ? "turquoise" : "white"
    }} onClick={() => setSelectedAspect(option)}>
      { option.name }
    </button>
  )
}