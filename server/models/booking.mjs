import mongoose from "mongoose";
const { Schema } = mongoose;

const packageSchema = new Schema({
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Customer Number is required'],
    },
    serviceList: [String],
    packageList: [String],
    requirements: {
        type: String,
    },
    email: {
        type: String,
    },
    date: {
        type: Date,
        required: [true, 'Date Of work is required'],
    },
    startHr: {
        type: Number,
        required: [true, 'Start time is required'],
    },
    endHr: {
        type: Number,
        required: [true, 'End time is required'],
    }
});

const Booking = mongoose.model("Booking", packageSchema);
export default Booking;