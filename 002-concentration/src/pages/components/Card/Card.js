import { StyledCardBack, StyledCardFront } from "./styles";

export default function Card({ card, isFlipped, flipCardById }) {
  return (
    <>
      {isFlipped ? (
        <StyledCardFront>
          <div>{card.symbol}</div>
        </StyledCardFront>
      ) : (
        <StyledCardBack onClick={() => flipCardById(card.id)} />
      )}
    </>
  )
}