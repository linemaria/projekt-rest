//Router för webbtjänsten. Använder Express Router function

import express from 'express';
import {
  findAll,
  // findSingle,
  findOne,
  remove,
  create
} from './posts.service.js';

export const postsRouter = express.Router();

// Hämta alla kurser
postsRouter.get('/', async (_req, res) => {
  try {
    const posts = await findAll();
    res.send(posts);
  } catch (error) {
    res.status(500).send({
      message: 'Sever error'
    });
  }
});

// Hämta enskild kurs
postsRouter.get('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;

    const posts = await findOne(id);

  // Kollar om det finns en kurs med angivet ID.
    if (!posts) {

  // Om det inte finns något för detta id, skicka 404.
      res.status(404).send({
        message: 'Hittar ej kurs.'
      });
    }

    res.send(posts);
  } catch (error) {
    res.status(500).send({
      message: 'Sever error'
    });
  }
});

// Radera enskild kurs.
postsRouter.delete('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;

    await remove(id);

    res.status(200).send({
      message: 'Deleted!'
    });
  } catch (error) {
    res.status(500).send({
      message: 'Sever error'
    });
  }
});


// Skapa ny kurs
postsRouter.post('/', async (req, res) => {
  try {
    const {
      location,
      runs,
      date,
      rating
    } = req.body;

    await create({
        location,
        runs,
        date,
        rating
    });

    res.status(200).send({
      message: 'Skapad!'
    });
  } catch (error) {
    res.status(500).send({
      message: `Sever error ${error}`
    });
  }

});

  //PUT
  postsRouter.put('/:id', async (req, res) =>  {
    try {
      const id = req.params;
       const body = req.body;
        await update(id, body);
      res.json({message: "Post updated"}); }

    catch {
        res.json({message: "Couldn't find post"});
    }
  });


  //make res.status
  
