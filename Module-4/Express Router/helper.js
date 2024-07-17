import { client } from "./app.js";

export function getAllMovie() {
    return client.db("Node_July").collection("movies").find().toArray();
}
export function addMovie(newMovies) {
    return client.db("Node_July").collection("movies").insertOne(newMovies);
}
export function getMovieById(movieid) {
    return client.db("Node_July").collection("movies").findOne({ id: movieid });
}
export function updateMovieById(movieid, updatedMovies) {
    return client.db("Node_July").collection("movies").updateOne({ id: movieid }, { $set: updatedMovies });
}
export function deleteMovieById(movieid) {
    return client.db("Node_July").collection("movies").deleteOne({ id: movieid });
}
