import styles from './page.module.css'
import MovieList from './MovieList';

async function getMovies() {
  const res = await fetch(`http://omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&s="Star Trek"`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getMovies();
  const movies = data.Search;

  return (
    <div style={{ margin: 12, borderWidth: 1, borderStyle: "solid", borderColor: "#333", padding: 12 }}>
      <div>Star Trek Movies</div>
      <div style={{ display: "flex" }}>
        <MovieList movies={movies} />
      </div>
    </div>
  )
}
