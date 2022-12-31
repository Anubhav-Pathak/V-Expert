import logger from "../utils/logger.mjs";

import { insert, findByEmailAndName, signIn } from "../services/userServices.mjs";


const getUser = async (req, res) => {
    try {
        const user = await findByEmailAndName(req.params.string);
        if(user)
            res.status(200).json({
                user: user,
            });
        else
            res.status(404).json({
                message: 'No User Found',
            })
    } catch (e) {
        logger.error(`Enable to call DB functions ${e}`);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await insert(req.body);
        if(user)
            res.status(201).json({
                user: user,
            });
        else
            res.status(424).json({
                message: 'Unable to Create User',
            })
    } catch (e) {
        logger.error(`Enable to call DB functions ${e}`);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const signInUser = async (req, res) => {
    try {
        const user = await signIn(req.body);
        if(user)
            res.status(201).json({
                token: user,
            });
        else
            res.status(424).json({
                message: 'Wrong Credentials',
            })
    }
    catch (e) {
        logger.error(`Enable to call DB functions ${e}`);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}


export {
    getUser,
    createUser,
    signInUser,
}
