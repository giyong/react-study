import { useState, useEffect } from "react";
import Movie from "./../components/Movie"

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.bz/api/v2/list_movies.json?minimum_rating=8.5'
      )
    ).json();

    console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false);
  }

  // const onClick = () => setCounter((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);

  // console.log("App render");

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading 
        ? (<h1>Loading...</h1>) 
        : (<div>{movies.map((movie) => (
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres} />
          ))}</div>)
        }
    </div>
  );    
}

export default Home;