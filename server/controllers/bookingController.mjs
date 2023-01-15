import Booking from "../models/booking.mjs";
import {findAll, findById, insert, deleteRecord, update} from "../services/bookingServices.mjs";
import logger from "../utils/logger.mjs";

const getAllBookings = async (req, res) => {
    try {
        const filter = req.query;

        const bookings = await findAll(filter);

        if(bookings)
            res.status(200).json({
                bookings: bookings,
            })

        else
            res.status(404).json({
                bookings: [],
            })

    } catch (e) {
        logger.error(`Enable to call DB functions ${e}`);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const getSingleBooking = async (req, res) => {
    try {
        const booking = await findById(req.params.id);
        if(booking)
            res.status(200).json({
                booking: booking,
            });
        else
            res.status(404).json({
                message: 'No Booking with id'
            })
    } catch (e) {
        logger.error(`Enable to call DB functions ${e}`);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const createBooking = async (req, res) => {
    try {
        const booking = await insert(req.body);
        if(booking)
            res.status(201).json({
                booking: booking,
            });
        else
            res.status(424).json({
                message: 'Unable to create entry',
            })
    } catch (e) {
        logger.error(`Enable to call DB functions ${e}`);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const deleteBooking = async (req, res) => {
    try {
        const booking = await deleteRecord(req.params.id);
        if(booking)
            res.status(200).json({
                message: "Deleted Booking",
            });
        else
            res.status(424).json({
                message: 'Booking Not Found',
            })
    } catch (e) {
        logger.error(`Enable to call DB functions ${e}`);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

const updateBooking = async (req, res) => {
    try {
        const booking = await update(req.params.id, req.body);
        if(booking)
            res.status(200).json({
                message: "Updated Booking",
            });
        else
            res.status(424).json({
                message: 'Booking Not Found',
            })
    } catch (e) {
        logger.error(`Enable to call DB functions ${e}`);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export {
    getAllBookings,
    getSingleBooking,
    createBooking,
    deleteBooking,
    updateBooking
}
