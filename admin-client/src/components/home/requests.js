import {useEffect, useState} from "react";
import RequestCard from "./requestCard";

export default () => {

    const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState("pending")
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
    //     Get DB Bookings On Base Of Status
    //     Set DB Bookings
        setLoading(false)
    }, [status])

    return (

        <>

            <div className={"flex justify-center align-center my-8"}>
                <div className={"px-4 duration-300 border-b border-transparent pb-1 cursor-pointer hover:border-blue-700 "}
                    onClick={() => setStatus('pending')}
                >Pending</div>
                <div className={"border-r-2 border-r-blue-700 w-4 h-6 mr-4 skew-x-[-15deg]"}></div>
                <div className={"px-4 duration-300 border-b border-transparent pb-1 cursor-pointer hover:border-blue-700 "}
                    onClick={() => setStatus('completed')}
                >Completed</div>
            </div>

            <div className={"container mx-auto grid gap-8 lg:grid-cols-2 md:grid-cols-1"}>

                {/*{loading ? <></> :*/}
                {/*    bookings.map(item => {*/}
                {/*        return (*/}
                {/*            <RequestCard*/}
                {/*                {...item}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}

                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />
                <RequestCard />

            </div>
        </>
    )
}