const Movie = require('../model/model');
    // const movies= [
    // { id:1, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    // { id:2, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    // { id:3, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    // { id:4, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    // { id:5, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    // { id:6, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    // { id:7, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    // { id:8, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: 'https://rb.gy/mmwyus' },
    // ]

const resolvers = {
    movies: () => {
      return Movie.find({})
    },
    movieByName: (args) => {
      return Movie.findOne({name: args.name})
    }
    ,
    addMovie: (args) => {
      let movie = new Movie({
        name: args.name,
        genre: args.genre,
        year: args.year,
        image: args.image
      })
      movie.save()
      return movie
    } 
  }

module.exports = resolvers