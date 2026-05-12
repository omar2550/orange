import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/orange_public_logo.png";

const Header = () => {

    const [hover, setHover] = useState<boolean>(false)

    return (
        <div className="flex items-center p-4 bg-black text-white text-[12px] flex-wrap gap-4 font-medium">
            {hover && <div className="absolute inset-0 opacity-50 bg-black" />}
            <Link to={"/"}>
                <img src={logo} alt="orange" />
            </Link>
            <div className="relative shadow-lg" onMouseEnter={() => setHover(true)}>
                <Link to={"/Products"}>Products <span>▼</span>
                </Link>
                {hover && (
                    <div className="absolute top-5 left-0 w-36 bg-white text-black flex flex-col gap-2 z-10 p-4"
                        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <Link to="/" >Alo profiles</Link>
                        <Link to="/" >Freemax new</Link>
                        <Link to="/" >Freemax (old) portfolio</Link>
                        <Link to="/" >Premier tariffs</Link>
                        <Link to="/" >Business</Link>
                        <Link to="home-dsl-packages">Home dsl packages</Link>
                        <Link to="/" >Hi user</Link>
                        <Link to="/" >Hi loser</Link>
                    </div>
                )}
            </div>
            <Link to={"/"}>Services <span>▼</span></Link>
            <Link to={"/"}>About <span>▼</span></Link>
            <Link to={"/"}>Promotions <span>▼</span></Link>
            <Link to={"/"}>Devices-test <span>▼</span></Link>
            <Link to={"/"}>Global Script Channels <span>▼</span></Link>
            <Link to={"/"}>Internal Guideline <span>▼</span></Link>
            <Link to={"/"}>Customer Support Tools <span>▼</span></Link>
            <Link to={"/"}>Application Guides <span>▼</span></Link>
        </div>
    )
}

export default Header
