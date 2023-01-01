import Requests from "./requests";
import "../../../../assests/css/admin.css"
import AdminHeader from "../admin-header";

export default () => {
    return (
        <section id={"admin"} className={"min-h-[100vh] py-8 bg-slate-200"}>
            <AdminHeader />
            <Requests />
        </section>
    )
}