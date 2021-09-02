import React from 'react';
import Movie from '../components/Movie';


const Movies = (props) => {
    // let state = {
    //     movies: [
    //     { id:1, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    //     { id:2, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    //     { id:3, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    //     { id:4, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    //     { id:5, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    //     { id:6, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    //     { id:7, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    //     { id:8, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    //     ]
    // }

    let data = props.data;
    if(state.loading){
        return <h2 className="message">We are loading your movies...</h2>
      }
      if(state.movies.length === 0){
        return <h2 className="message">Please add movies of your choice</h2>
      }
    return (
        <div className="movies">
            {state.movies.map((movie) => {
                return <Movie
                    key={movie.id}
                    name={movie.name}
                    genre={movie.genre}
                    year={movie.year}   
                    image={movie.image}
                />
            })}
        </div>
    )
}

export default Movies;
