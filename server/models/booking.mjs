import mongoose from "mongoose";
const { Schema } = mongoose;

const packageSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
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
        required: [true, 'Requirements is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
    },
    time: {
        type: String,
        required: [true, 'Time is required'],
    },
    status: {
        type: String,
        default: "pending",
    }
});

const Booking = mongoose.model("Booking", packageSchema);
export default Booking;