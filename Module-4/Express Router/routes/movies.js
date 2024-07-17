import express from "express"
import { getAllMovie, addMovie, getMovieById, updateMovieById, deleteMovieById } from "../helper.js";

const router=express.Router();

// get all movie
router.get('/',async (req,res)=>{
    const result=await getAllMovie();
    res.send(result);
})


//add new movies
router.post('/',async (req,res)=>{
    const newMovies=req.body;
    console.log(newMovies);
    const result=await addMovie(newMovies)
    res.send(result);
})

//get particular movie
router.get('/:movieid',async (req,res)=>{
    const { movieid }=req.params;
    console.log(req.params,movieid);
    const result=await getMovieById(movieid);
    res.send(result);
})

//update movie

router.put('/:movieid',async (req,res)=>{
    const { movieid }=req.params;
    console.log(req.params,movieid);
    const updatedMovies=req.body;
    const result=await updateMovieById(movieid, updatedMovies)
    res.send(result);
})

//delete movie

router.delete('/:movieid',async (req,res)=>{
    const { movieid }=req.params;
    console.log(req.params,movieid);
    const result=await deleteMovieById(movieid);
    // res.send(result);

    if(result.deletedCount===0)
    {
        res.status(400).send({message:"No movies found"});
    }
    else
    {
        res.send({message:"Movie deleted"})
    }
    // result?res.send(result):res.status(400).send({message: "No movies found"});
})


export const moviesRouter=router;