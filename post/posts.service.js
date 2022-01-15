import Posts from "./posts.model.js";

// Hämta alla kurser
export const findAll = async () => {
  return await Posts.find();
};

// Hämta enskild kurs
export const findOne = async (id) => {
  return await Posts.findById(id);
};

// Radera enskild kurs
export const remove = async (id) => {
  return await Posts.findByIdAndDelete(id);
};

//Ny kurs
export const create = async (partialPosts) => {
  return await Posts.create(partialPosts);
}
//Updatera
export const update = async (id) => {
  return await Posts.findOneAndUpdate(id);
}

//Tidigare:
//findSingle
//findSingleAndUpdate