import ColorTile from "./ColorTile";

const colors = [
  "BlueViolet",
  "Crimson",
  "DarkSlateBlue",
  "DarkTurquoise",
  "Gold",
  "Indigo",
  "Maroon",
  "MediumTurquoise",
  "Moccasin",
  "RebeccaPurple"
]

export default function ColorChart() {
  return (
    <div style={{ display: "flex" }}>
      {colors.map((color, index) => (
        <ColorTile key={index} color={color} />
      ))}
    </div>
  )
}