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

app.listen(8081, () => {
    console.log("Server running successfully on 8081");
});