import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
const app=express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json({limit: "16kb"}))//json limit =16kb
app.use(express.urlencoded({extended : true,limit : "16kb"}))//url encoder-decoder
app.use(express.static("public"))//files storage
app.use(cookieParser())//use to access cookies of the browser of the user
export default app;