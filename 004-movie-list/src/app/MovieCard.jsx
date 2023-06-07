'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <div style={{ marginRight: 24 }}>
      <Link href={`/movie/${movie.imdbID}`}>
        <Image
          src={movie.Poster}
          width={200}
          height={200}
          alt="Picture of the movie poster"
          priority={true}
        />
        <div>{movie.Title}</div>
        <div>{movie.Year}</div>
      </Link>
    </div>
  )
}