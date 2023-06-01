import ColorTile from "./ColorTile";

export default function ColorChart() {
  return (
    <div style={{ display: "flex" }}>
      <ColorTile color="BlueViolet" />
      <ColorTile color="Crimson" />
      <ColorTile color="DarkSlateBlue" />
      <ColorTile color="DarkTurquoise" />
    </div>
  )
}