import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {

    const { pathname } = useLocation()

    return (
        <div className="p-2 border border-l flex flex-col gap-4 text-[13px] w-full h-screen pt-16 font-medium">
            {pathname === "/" ?
                <>
                    <Link to="/" className="text-gray-500 uppercase -mt-4">on this page</Link>
                    <Link to="/">Basic information</Link>
                    <Link to="/">Common Asked Questions</Link>
                    <Link to="/">Plans</Link>
                    <Link to="/">How to pat</Link>
                    <Link to="/">How to Manage my account</Link>
                    <Link to="/">Siebel</Link>
                    <Link to="/">Related VASs</Link>
                    <Link to="/">Work Instructions</Link>
                    <Link to="/">Related Links</Link>
                </>
                : <>
                    <Link to="/" className="text-gray-500 uppercase -mt-4">on this page</Link>
                    <Link to="/">Basic information</Link>
                    <Link to="/">Common Asked Questions</Link>
                    <Link to="/">Plans</Link>
                    <Link to="/">How to pat</Link>
                    <Link to="/">How to Manage my account</Link>
                    <Link to="/how-to-complain" className={pathname === "/how-to-complain" ? "font-bold" : ""}>How to complain</Link>
                    <Link to="/">Siebel</Link>
                    <Link to="/">Related Offers</Link>
                    <Link to="/">Related VASs</Link>
                    <Link to="/">Work Instructions</Link>
                    <Link to="/">Related Links</Link>
                </>}
        </div>
    )
}

export default Sidebar