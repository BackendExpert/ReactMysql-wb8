import express from "express";
import cors from 'cors';
import mysql from "mysql2";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";
import { resourceLimits } from "worker_threads";


const app = express(); 
app.use(cors());
app.use(express.json());

const conn = mysql.createConnection
({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

//connect to database
conn.connect((error) =>
{
  if(error) throw error
  else 
  console.log('Mysql Connected...');
});

app.listen(8081, () => {
    console.log("Server running successfully on 8081");
});