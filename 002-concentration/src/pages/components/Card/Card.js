import { StyledCardBack, StyledCardFront } from "./styles";

export default function Card({ id, symbol, isFlipped, flipCardById }) {
  return (
    <>
      {isFlipped ? (
        <StyledCardFront />
      ) : (
        <StyledCardBack />
      )}
    </>
  )
}