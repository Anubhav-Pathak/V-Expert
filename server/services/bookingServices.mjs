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

// Add service and package to booking
// serviceList: [String],
// packageList: [String],

const insert = async (body) => {
    try {
        const res = await Booking.create({
            address: body.address,
            phoneNumber: body.phoneNumber,
            email: body.email,
            date: body.pdate,
            time: body.ptime,
            requirements: body.requirements,
            name: body.name,
            serviceList: body.serviceList,
            packageList: body.packageList,
        });
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
        const res = await Booking.findOneAndUpdate({_id: id}, body);
        if(res) {
            logger.info('Record updated');
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