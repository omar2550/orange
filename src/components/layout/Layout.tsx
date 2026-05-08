import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
const Layout = () => {
    return (
        <main>
            <Header />
            <div className="flex">
                <div className="w-72">
                    <Sidebar />
                </div>
                <div className="p-6 w-full">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default Layout