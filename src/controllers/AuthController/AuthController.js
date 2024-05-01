import { db } from "../../db.js";
import bcrypt from 'bcryptjs';
import { generateKey } from "crypto";
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken';
import jsonwbtknConfig from "./config.js";

const generateAccessToken = (id, role) => {
    const payload = {
        id, role
    }
    return jwt.sign(payload, jsonwbtknConfig.secret, { expiresIn: '24h' })
}
class AuthController {

    async registration(req, res) {
        try {
            const { data } = req.body;
            console.log(data);
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Ошибка при регистрации,', errors })
            }
            // await db.Role.bulkCreate([
            //     { id: 1, roleName: "ADMIN" },
            //     { id: 2, roleName: "USER" }
            // ]);


            const candidate = await db.User.findOne({ where: { username: data.username } })
            if (candidate) return res.status(400).json({ message: 'Пользователь с такой почтой уже существует' })

            const hashPassword = bcrypt.hashSync(data.password, 2);
            console.log(hashPassword);
            const user = await db.User.create({
                ...data,
                password: hashPassword,

            })



            res.json({ message: 'Пользователь успешно зарегистрирован!' })
        } catch (error) {
            res.status(400).json({ message: 'Registration error' })
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body.data;
            console.log(req.body);
            const user = await db.User.findOne({ where: { username } })

            if (!user) {
                return res.status(400).json({ message: 'Пользователь с таким никнеймом не найден!' })
            }

            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Введён неверный пароль' })
            }


            // const token = generateAccessToken(user.id, user.roleId); 🔮🔮🔮🔮🔮🔮🔮🔮🔮
            console.log(user);
            res.json(user)


        } catch (error) {
            res.status(400).json({ message: 'Login error' })

        }
    }
    async getUsers(req, res) {
        try {
            const users = await db.User.findAll();
            res.json(users)
        } catch (error) {
            res.json(error)

        }
    }
    async updateProfile(req, res) {
        try {
            // console.log(1111111111111111111111);
            // console.log(req.file);
            // console.log(req.body);
            console.log(1111111111111111111111);
            const { id } = req.params;
            console.log(id);
            const textData = await JSON.parse(req.body.textData);
            const hashPassword = bcrypt.hashSync(textData.password, 2);
            const answer = await db.User.update({
                name: textData.firstName,
                surname: textData.surname,
                patronymic: textData.patronymic,
                username: textData.username,
                password: textData.hashPassword,
                email: textData.email,
                picture: req.file.filename
            },
                { where: { id: +id } }
            )



            console.log(1111);
            res.json(1)
        } catch (error) {
            res.json(error)

        }
    }

}
export default new AuthController()