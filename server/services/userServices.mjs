import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.mjs";
import logger from "../utils/logger.mjs";

const findByEmailAndName = async (string) => {
    try {
        const res = await User.find({
            name: string
        }) || await User.find({
            email: string
        });
        if(res)
            return res;
        else {
            logger.error('No record with this id');
            return null;
        }
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const insert = async (body) => {
    try {
        console.log("body", body);
        let password = body.password;
        let hashedPassword = await bcrypt.hash(password, 8)
        console.log("hashed password", hashedPassword);
        const res = await User.create({
            email: body.email,
            password: hashedPassword,
            name: body.name,
        });
        console.log("res", res);
        if(res)
            return res;
        else {
            logger.error('Booking With Same ID already exist');
            return null;
        }
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const generateAccessToken = async (email) => {
    return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '86400s' });
  }


const signIn = async (body) => {
    console.log("body", body);
    try {
        const user = await User.findOne({
            email: body.email
        })
        console.log("user", user);
        if(user) {
            const validPassword = await bcrypt.compare(body.password, user.password);
            if(validPassword) {
                const token = await generateAccessToken({ email: user.email });
                return token;
            }
            else {
                logger.error('Invalid Password');
                return null;
            }
        }
        else {
            logger.error('No User Found');
            return null;
        }
    }
    catch (e) {
        logger.error(e);
        return null;
    }
}


export {
    signIn,
    findByEmailAndName,
    insert,
}