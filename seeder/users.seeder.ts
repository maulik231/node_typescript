import db from "../models";

export const Userseeder = () =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await db.Users.bulkCreate([
        {
          full_name: "maulik",
          email: "maulik@yopmail.com",
          password: "password123#",
          access_level: 'admin',
          created_at: '2022-10-14',
          updated_at: '2022-10-14'
        },
      ]);

      resolve("record created");
    } catch (err) {
      reject(err);
    }
  });
