import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <main className="container mx-auto p-4">
            <Header/>
            <Outlet/>
        </main>
    );
}

export default Layout;
