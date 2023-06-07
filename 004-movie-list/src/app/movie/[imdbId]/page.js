'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

async function getMovieById(id) {
  const res = await fetch(`http://omdbapi.com/?apikey=62c9fe58&i=${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Movie() {
  const params = useParams();
  const movie = await getMovieById(params.imdbId);
  return (
    <div>
      <Image 
        src={movie.Poster}
        width={400}
        height={400}
        alt="Picture of the movie poster"
      />
      <div>{movie.Title}</div>
      <div>{movie.Year}</div>
      <div>{movie.Runtime}</div>
      <div>{movie.Plot}</div>
    </div>
  )
}