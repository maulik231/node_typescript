import { Request, Response } from "express"
import db from "./../models/.";

async function getUsers(req: Request, res: Response) {
  try {
    const user = await db.Users.findAll();
    res.status(200).json({ status: true, userData: user });
  } catch (error) {
      res.status(200).json({ status: true, error: error });
  }
}

async function create(req: Request, res: Response) {
  try {
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;
    const access_level = req.body.access_level;
    const new_user = await db.Users.create({
      full_name: full_name,
      email: email,
      password: password,
      access_level: access_level,
      created_at: Date.now(),
      updated_at: Date.now()
    });
    res.status(200).json({ status: true, data: new_user, message: 'new user created successfully' });
  } catch (error) {
    res.status(200).json({ status: true, error: error });
  }
}

export default { getUsers, create };