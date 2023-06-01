export default function ColorTile({ color }) {
  return (
    <div style={{ background: color, padding: 12, margin: 4 }}>
      <div>{color}</div>
    </div>
  )
}