'use client';

import Image from 'next/image'

export default function MovieCard({ movie }) {
  return (
    <div style={{ marginRight: 24 }}>
      <Image
        src={movie.Poster}
        width={200}
        height={200}
        alt="Picture of the movie poster"
        priority={true}
      />
      <div>{movie.Title}</div>
      <div>{movie.Year}</div>
    </div>
  )
}