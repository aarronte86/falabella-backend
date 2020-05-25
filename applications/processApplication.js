import { check, validationResult } from "express-validator";
import * as fs from "fs";

export const processApplicationValidators = [
  check("rut").not().isEmpty(),
  check("phone").not().isEmpty(),
  check("email").not().isEmpty(),
  check("rent").not().isEmpty(),
];

export const processApplication = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { rut, phone, email, rent } = req.body;
  const fileName = `${rut}.txt`;
  const fileContent = `Rut: ${rut}, Phone: ${phone}, Email: ${email}, Rent: $ ${rent}`;

  fs.writeFile(`data/${fileName}`, fileContent, (error) => {
    res.status(200).json({ status: "ok" });
  });
};
