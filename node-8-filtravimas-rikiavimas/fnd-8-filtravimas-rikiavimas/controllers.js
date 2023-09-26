import Pet from "./models/Pet.js";
import mongoose from "mongoose";

export async function addNewPet(req, res) {
  const { name, type, age } = req.body;

  try {
    const newPet = new Pet({
      name,
      type,
      age,
    });
    await newPet.save();

    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: MessageChannel.error });
  }
}

export async function getPets(req, res) {
  try {
    const pets = await Pet.find();

    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: message.error });
  }
}

export async function getPetByType(req, res) {
  const { type } = req.query;
  try {
    const petByType = await Pet.find({ type });
    res.json(petByType);
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function getPetByOldest(req, res) {
  const { age } = req.query;
  try {
    const PetByOldest = await Pet.find({ age }).sort({ age: -1 });

    res.json(PetByOldest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
