import mongoose from "mongoose";
import User from "./models/User.js";
import Service from "./models/Service.js";

export async function createService(req, res) {
  const { name, price, description } = req.body;

  try {
    const service = new Service({ name, price, description });

    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getService(req, res) {
  const service = req.params;
  try {
    const service = await Service.find();
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteServiceById(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Service.findByIdAndDelete(id);

    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createUser(req, res) {
  const { name, surname, email, service_id } = req.body;

  try {
    const user = new User({
      name,
      surname,
      email,
      service_id,
    });

    const service = await Service.findById(service_id);
    service.user_id.push(user._id);
    await service.save();

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUsers(req, res) {
  const user = req.params;
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUsersByOrderAsc(req, res) {
  const { surname } = req.query;

  try {
    const UsersOrderedAsc = await User.find().sort({ surname: 1 });

    res.json(UsersOrderedAsc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function getUsersByOrderDesc(req, res) {
  const { surname } = req.query;

  try {
    const UsersOrderedDesc = await User.find().sort({ surname: -1 });

    res.json(UsersOrderedDesc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
