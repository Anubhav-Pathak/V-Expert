export default () => {

    const handleBooking = () => {
    //     Send Patch Request For Updating service

        console.log("Booking Handeled");

    }

    return (
        <div className={"bg-white rounded-xl py-12 px-12 w-full"}>
            <div className={"flex flex-wrap justify-between"}>
                <p className={"text-2xl"}>Contact No: <span className={"text-blue-700"}>94354831</span></p>
                <p className={"text-2xl"}>Email: <span className={"text-blue-700"}>example@gamil.com</span></p>
            </div>

            <div className={"text-2xl mt-2"}>Selected Packages : <span className={"text-blue-700"}>Premium</span></div>

            <div className={"text-2xl mt-2"}>Selected Services : <span className={"text-blue-700"}>Tiling, Ac repair</span> </div>

            <div className={"text-2xl mt-2"}>Address : <span className={"text-blue-700"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sem eros</span> </div>
            <div className={"text-2xl mt-2"}>Requirements : <span className={"text-blue-700"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sem eros</span></div>

            <div
                className={"text-2xl mt-4 rounded-3xl cursor-pointer duration-300 inline-block px-12 py-4 text-xl border border-blue-700 text-black hover:bg-blue-700 hover:text-white"}
                onClick={handleBooking}
            >
                Completed
            </div>

        </div>
    )
}