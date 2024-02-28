import express from "express";
import cors from 'cors';
import mysql from "mysql2";

const app = express(); 
app.use(cors());
app.use(express.json());

app.listen(8081, () => {
    console.log("Server running successfully on 8081");
});