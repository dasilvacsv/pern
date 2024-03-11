import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";
md5

export const signin = async (req, res) => {
  // obtener los datos desde la peticion
  const { email, password } = req.body;
  // realizar la consulta a la base de datos
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  // verificar si el email existe
  if (result.rowCount === 0) {
    return res.status(400).json({ message: "El email no existe" });
  }
  // verificar si el password es correcto
  const validPassword = await bcrypt.compare(password, result.rows[0].password);
  // si el password no es correcto
  if (!validPassword) {
    return res.status(400).json({ message: "Password incorrecto" });
  }
  // si el password es correcto, creacion del JsonWebToken
  const token = await createAccessToken({ id: result.rows[0].id });

  // enviar el token en una cookie
  res.cookie("token", token, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  // enviar lta respuesta
  return res.json(result.rows[0]);
};

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`;
    const result = await pool.query(
      "INSERT INTO users (username, email, password, gravatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, email, hashedPassword, gravatar]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).send("El email ya existe");
    }
    next(error);
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(200);
};

export const profile = async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [
    req.userId,
  ]);
  return res.json(result.rows[0]);
};
