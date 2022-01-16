
 //Modell för schemat i databasen

import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({

  location: {
    type: String, // Sätter typ av kolumn
    required: true, // Sätter required, alltså att den krävs
  },
  runs: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: String,
  }
});

const Posts = mongoose.model('posts', postsSchema);

export default Posts;