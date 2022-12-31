import {bookingComplete} from "../api";

export default ({id, address, date, serviceDate, serviceList, packageList, email, phoneNumber, requirements, setReload}) => {

    const handleBooking = () => {

        bookingComplete(id)
            .then(res => {
                console.log("Booking Complete");
                setReload(prevState => prevState*-1);
            })
            .catch(e => {console.log(e)});

    }

    return (
        <div className={"bg-white rounded-xl py-12 px-12 w-full"}>
            <div className={"flex flex-wrap justify-between"}>
                <p className={"text-2xl"}>Contact No: <span className={"text-blue-700"}>{phoneNumber}</span></p>
                <p className={"text-2xl"}>Email: <span className={"text-blue-700"}>{email}</span></p>
            </div>

            <div className={"text-2xl mt-2"}>Selected Packages : <span className={"text-blue-700"}>{packageList.join(", ")}</span></div>

            <div className={"text-2xl mt-2"}>Selected Services : <span className={"text-blue-700"}>{serviceList.join(", ")}</span> </div>

            <div className={"text-2xl mt-2"}>Address : <span className={"text-blue-700"}>{address}</span> </div>
            <div className={"text-2xl mt-2"}>Requirements : <span className={"text-blue-700"}>{requirements}</span></div>


            <div className={"mt-4 flex justify-between items-center"}>
                <div>
                    <div className={"text-2xl mt-2"}>Booked : <span className={"text-blue-700"}>{date}</span> </div>
                    <div className={"text-2xl mt-2"}>Requested Service Date : <span className={"text-blue-700"}>{serviceDate}</span> </div>
                </div>

                <div
                    className={"mt-4 rounded-xl cursor-pointer duration-300 inline-block px-12 py-2 text-xl border border-blue-700 text-black hover:bg-blue-700 hover:text-white"}
                    onClick={handleBooking}
                >
                    Completed
                </div>

            </div>


        </div>
    )
}