// 1. Su npm įsidiegiame paketą pavadinimu 'casual'. Daugiau apie jį čia.
// 2. Vietoj console.log, importuojame šį modulį į index.js.
// 3. Importavę, iš karto panaudojame - console turi išmesti random miestą kiekvieną kartą paleidus šį kodą.
// 4. Pakoreguojame kodą. Tegul dabar konsolė atspausdina du dalykus: ir random miestą, ir random skaičių nuo 1 iki 10 (o random skaičių generuoti juk dar mokame su Math.random()).
// 5. Casual pluginas gali ne tik miestą sugeneruoti, bet ir įvairiausius kitus parametrus. Pridedame (prie console.log), kad "Mr Petras Slekys" (bus atsitiktiniai duomenys: suffix + first name + last name).

import express from "express";
import casual from "casual";

const PORT = 3000;

const app = express();
const city = casual.city;

const randomNumber = Math.floor(Math.random() * 10) + 1;

const suffix = casual.name_prefix;
const firstName = casual.first_name;
const lastName = casual.last_name;

console.log(
  `Random miestas: ${city}. Random skaicius nuo 1 iki 10: ${randomNumber}`
);
console.log(`${suffix} ${firstName} ${lastName}`);
