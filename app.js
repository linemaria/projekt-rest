//Moment 5 - Line Asp
//Webbtjänst/Rest
//Huvudfil för webbtjänsten och import

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//.env config
dotenv.config();

import {
  postsRouter
} from './post/posts.router.js';

// Deklarerar uri från information i .env
const uri = `${process.env.MONGO_URI}`;

(async () => {
  try {
    // Skapar uppkoppling
    await mongoose.connect(uri);

    console.log(`! Uppkopplad till databasen !`);

   // Sätter imported express till variabeln app
    const app = express();

 // Port för localhost sätt till 3000
    const port = 3000;

// Anänder cors för att tillåta alla requests från en client
    app.use(cors());

    // json body parsing för att "parsea" inkommande requests med JSON payloads
    app.use(express.json());

    // Sätter upp routes
    app.use('/posts', postsRouter);


   // När servern är startad kommer den skriva ut följande
    app.listen(port, () => {
      console.log(`! Server körs på ${port} !`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);

  } finally {
  
  }
})();