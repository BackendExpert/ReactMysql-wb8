import express, { response } from "express";
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

  const createTime = new Date();
  const updateTime = new Date();
  
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


// User Login
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM db_usermanagement_users WHERE email=?";

  conn.query(sql, [req.body.email], (err, data) => {

    if(err) console.log('Error executing the query');
    
    if(data.length > 0){
      bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
        if(err) return res.json({Error:'ERROR in Passwrod'});
        if(response){
          return res.json({Status: "Success", Result: data});
        }
        else{
          return res.json({Error: 'Password dose not Match'});
        }
      })
    }else{
        return res.json({Error: "Email does Not Exist"})
    }    
  })
})

app.listen(8081, () => {
    console.log("Server running successfully on 8081");
});