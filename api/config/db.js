const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://kwameroland5:j3DfBtoZiavTW3oM@cluster0.wgk2o.mongodb.net/cluster0').on('open', ()=>{
    console.log("Database connected successfully");
}).on('error', ()=>{
    console.log("Error connecting to database");
});

module.exports = connection;

// mongodb://127.0.0.1:27017/Tutorium-Tutor

//mongodb+srv://eyarko:%40password123@lawsonscluster.l1vqepq.mongodb.net/Tutorium-Tutor
