import whatsapp from "../../assests/images/w2.svg"

const Whatsapp = () => {
    return (
        <div className={"whatsapp"}>
            <a href={"https://api.whatsapp.com/send/?phone=508446765&text&type=phone_number&app_absent=0"} target={"_blank"} rel="noreferrer"><img src={whatsapp} alt={"Whatsapp SVG"}/></a>
        </div>
    )
}
export default Whatsapp;