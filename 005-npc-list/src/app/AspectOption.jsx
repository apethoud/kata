export default function AspectOption({ name }) {
  return (
    <button style={{ 
      all: "unset", 
      margin: 4, 
      padding: 4,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "white" 
    }}>
      { name }
    </button>
  )
}