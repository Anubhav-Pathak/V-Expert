export default ({review, name}) => {

    const quote = String.fromCodePoint(0x201F);

    return (
        <>
            <div className={"px-8 py-6 testimonial-card"}>
                <div className={"text-6xl text-yellow-400"}>{quote}</div>
                <div className={"text-gray-600"}>{review}</div>
                <div className={"text-center mt-3 text-lg"}>{name}</div>
            </div>
        </>
    )
}