import {baseUrl} from "../../../constants";
import axios from "axios";

let config;
const setAuth = () => {
    config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("user")
        }
    }
}

const getBookings = async (status) => {
    setAuth();
    return await axios.get(`${baseUrl}/bookings?status=${status}`, config);
}

const bookingComplete = async (id) => {
    setAuth();
    return await axios.patch(`${baseUrl}/bookings/${id}`, {status: 'complete'}, config);
}

export {
    getBookings,
    bookingComplete
}