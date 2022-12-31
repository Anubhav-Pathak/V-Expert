import Booking from "../models/booking.mjs";
import logger from "../utils/logger.mjs";

const findAll = async (filter) => {
    try {
        const res = await Booking.find(filter);
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

const update = async (id, body) => {
    try {
        const res = await Booking.findOneAndUpdate(id, body);
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
    deleteRecord,
    update
}