 const express = require('express');
const router = express.Router();
const person =require('./../models/person');

// post route to add a person 
router.post('/',async(req,res) =>{
    try{ 
       

const data =req.body  // assuming the request body contains the person data 

const person = new person (data);// Create a new person document using the mongoose nodel

const response = await new person.save();// save the person document to the database  
console.log('data sabved ');
res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internet server error '} )
    }
})
// Get method of get the person
router.get('/', async (req, res) => {

    try{

        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }

})


router.get('/:workType', async(req, res)=>{
    try{

        const workType = req.params.workType; // Extract the work type from the URL parameter

        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})  
