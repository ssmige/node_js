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

  res.json(service);
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

    // const service = Service.findById(service_id);
    // service.users.push(user._id);

    // await service.save();

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// export async function createUser(req, res) {
//   const { name, surname, email, service_id } = req.body;

//   try {
//     const user = new User({
//       name,
//       surname,
//       email,
//       service_id: [new mongoose.Types.ObjectId(service_id)],
//     });

//     const service = await Service.findById(service_id);

//     if (!service) {
//       return res.status(404).json({ error: "Service not found" });
//     }

//     service.users.push(user.user_id);

//     await service.save();
//     await user.save();
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
