import {bookingComplete} from "../api";

export default ({_id, name, address, date, time, serviceList, packageList, email, phoneNumber, requirements, setReload}) => {

    const handleBooking = () => {

        bookingComplete(_id)
            .then(res => {
                console.log("Booking Complete");
                setReload(prevState => prevState*-1);
            })
            .catch(e => {console.log(e)});

    }

    return (
        <div className={"bg-white rounded-xl py-12 px-12 w-full"}>
            <div className={"flex flex-wrap justify-between"}>
                <p className={"text-2xl"}>Contact No: <span className={"text-blue"}>{phoneNumber}</span></p>
                <p className={"text-2xl"}>Email: <span className={"text-blue"}>{email}</span></p>
            </div>

            <div className={"text-2xl mt-2"}> Customer Name : <span className={"text-blue"}>{name}</span></div>

            <div className={"text-2xl mt-2"}>Selected Packages : <span className={"text-blue"}>{packageList.join(", ")}</span></div>

            <div className={"text-2xl mt-2"}>Selected Services : <span className={"text-blue"}>{serviceList.join(", ")}</span> </div>

            <div className={"text-2xl mt-2"}>Address : <span className={"text-blue"}>{address}</span> </div>
            <div className={"text-2xl mt-2"}>Requirements : <span className={"text-blue"}>{requirements}</span></div>


                <div>
                    <div className={"text-2xl mt-2"}>Requested Date : <span className={"text-blue"}>{date}</span> </div>
                    <div className={"text-2xl mt-2"}>Requested Time : <span className={"text-blue"}>{time}</span> </div>
                </div>

                <div
                    className={"mt-4 rounded-xl cursor-pointer duration-300 inline-block px-12 py-2 text-xl border border-blue text-black hover:bg-blue hover:text-white"}
                    onClick={handleBooking}
                >
                    Completed
                </div>



        </div>
    )
}