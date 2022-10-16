import { resolve } from "node:dns";
import { Userseeder } from './users.seeder';
const seeders = () => new Promise(async (resolve, reject) => {

    try {
        await Userseeder();
        resolve("data Seedinng Completed...!");
    } catch (err) {
        reject(err);
        console.log(err);
    }
})


export default seeders;