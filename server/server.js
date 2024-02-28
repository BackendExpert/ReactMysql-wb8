import express from "express";
import cors from 'cors';
import mysql from "mysql2";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

const app = express(); 
app.use(cors());
app.use(express.json());

//create database connection
const conn = mysql.createConnection
({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'db_usermanagement'
});

//connect to database
conn.connect((error) =>
{
  if(error) throw error
  else 
  console.log('Database Connected Successful..!');
});


//user register

app.post('/register', async (req, res) => {
  console.log(req.body)
  const passHash = await bcrypt.hash(req.body.password.toString(), 10);

  const createTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
  });
  const updateTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
  });
  
  const default_user = 'user';

  const sql = "INSERT INTO db_usermanagement_users (firstName, email, password, role, created_at, update_at) VALUES (?)";


  const vlaues = [
    req.body.fname,
    req.body.email,
    passHash,
    default_user,
    createTime,
    updateTime
  ]

  conn.query(sql, [vlaues], (err, result) => {
    if(err){
      console.log(err)
    }
    else{
      return res.json({Status: "Success"})
    }
  });
})

app.listen(8081, () => {
    console.log("Server running successfully on 8081");
});