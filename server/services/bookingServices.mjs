import Booking from "../models/booking.mjs";
import logger from "../utils/logger.mjs";
import booking from "../models/booking.mjs";

const findAll = async () => {
    try {
        const res = await Booking.find();
        if(res)
            return res;
        else {
            logger.error('No records found');
            return null;
        }
    } catch (e) {
        logger.error(e);
        return null;
    }
}

const findById = async (id) => {
    try {
        const res = await Booking.findById(id);
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
        const res = await Booking.create(body);
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

const deleteRecord = async (id) => {
    try {
        const res = await Booking.findOneAndDelete(id);
        if(res) {
            logger.info('Record deleted');
            return true;
        }
        else {
            logger.error('Booking With Same ID already exist');
            return false;
        }
    } catch (e) {
        logger.error(e);
        return null;
    }
}

export {
    findAll,
    findById,
    insert,
    deleteRecord
}