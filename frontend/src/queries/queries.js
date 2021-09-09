import { gql } from "apollo-boost";

const allMovies = gql`
  {
    movies {
      name
      genre
      year
      image
    }
  }
` 

const movieByName = gql`
    query movieByName($name: String!){
      movieByName(name: $name){
        name
        genre
        year
        image
      }
    }
`

const addMovie = gql`
  mutation AddMovie($name: String!, $genre: String!, $year: String!, $image: String!){
    addMovie(name: $name, genre: $genre, year: $year, image: $image){
      name
      genre
      year
      image
    }
  }
`

export {allMovies, addMovie, movieByName}