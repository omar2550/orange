import { Link } from "react-router-dom"

const HowToComplain = () => {

    const file = (
        <span className="inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
        </span>
    )

    return (
        <div>

            <div className="py-6 border-b">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold">Network</h1>
                    <button className="border-2 border-black p-1 text-sm font-bold hover:bg-black transition-all duration-300 hover:text-white">View All</button>
                </div>
                <div className="mt-2 flex items-center justify-between w-[80%]">
                    <div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div className="my-4">
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div className="my-4">
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6 border-b">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold">Billing</h1>
                    <button className="border-2 border-black p-1 text-sm font-bold hover:bg-black transition-all duration-300 hover:text-white">View All</button>
                </div>
                <div className="mt-2 flex items-center justify-between w-[80%]">
                    <div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div className="my-4">
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div className="my-4">
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6 border-b">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold">Technical</h1>
                    <button className="border-2 border-black p-1 text-sm font-bold hover:bg-black transition-all duration-300 hover:text-white">View All</button>
                </div>
                <div className="mt-2 flex items-center justify-between w-[80%]">
                    <div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div className="my-4">
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div className="my-4">
                            {file}
                            <Link to="" className="text-blue-500 font-bold text-sm inline-block ml-2">Bill Amount</Link>
                        </div>
                        <div>
                            {file}
                            <Link to="/line-down" className="text-blue-500 font-bold text-sm inline-block ml-2">Line Down</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HowToComplain