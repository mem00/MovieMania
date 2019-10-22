# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.create!(
    title: "It",
    poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    backdrop_path: "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
    overview: "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
    release_date: "2017-09-05",
    rating: 0
)


puts "#{Movie.count} movies created!"