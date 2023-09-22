import Asmuo from "./models/Asmuo.js";

export async function addNewAsmuo(req, res) {
  const { firstName, lastName, age } = req.body;
  try {
    const newAsmuo = new Asmuo({
      firstName,
      lastName,
      age,
    });
    await newAsmuo.save();

    res.json(newAsmuo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAsmuo(req, res) {
  try {
    const asmenys = await Asmuo.find();
    res.json(asmenys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
