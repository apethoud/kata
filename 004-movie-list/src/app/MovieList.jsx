'use client';

import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <div style={{ display: "flex", marginTop: 12 }}>
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie} 
        />
      ))}
    </div>
  )
}