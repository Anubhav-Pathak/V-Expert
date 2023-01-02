import RegisterForm from "./registerForm";
import "../../../../assests/css/admin.css"

export default () => {
    return (
        <section id={"register-page"} className={"h-screen w-full bg-gray flex justify-center items-center"}>
            <RegisterForm />
        </section>
    )
}