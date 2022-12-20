export default ( {img, name, disc} ) => {
    return (
        <div className={"service-about"}>
            <div className={"service-image mb-4"}><img src={img} alt={"service-image"}/></div>
            <div>
                <div className={"text-5xl mb-4"}>{name}</div>
                <p>{disc}</p>
            </div>
        </div>
    )
}