import { Link } from "react-router-dom"
import spliter from '../../assets/spliter.png'
import mainAction from '../../assets/mainAction.png'

const LineStillDown2 = () => {
    return (
        <div>
            <div>
                <h2 className="text-[#f26522] font-bold text-lg mb-4 decoration-[#f26522] underline underline-offset-4">
                    If the customer is calling from DSL service number:
                </h2>

                <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mt-2 mr-3 shrink-0"></span>
                        <p className="text-gray-800 text-md">
                            Ask the customer for his/her mobile number.
                        </p>
                    </li>

                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mt-2 mr-3 shrink-0"></span>
                        <p className="text-gray-800 text-md">
                            Ask the customer to end the call with you and ask him to answer the call on his/her mobile.
                        </p>
                    </li>

                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mt-2 mr-3 shrink-0"></span>
                        <p className="text-gray-800 text-md">
                            Put <span className="font-semibold text-black italic">Not Ready.</span>
                        </p>
                    </li>

                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mt-2 mr-3 shrink-0"></span>
                        <p className="text-gray-800 text-md">
                            Call the customer.
                        </p>
                    </li>

                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mt-2 mr-3 shrink-0"></span>
                        <p className="text-gray-800 text-md">
                            Connect with him/her without splitter.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="border-2 border-gray-400 rounded-sm p-1 mt-6 overflow-hidden bg-[#f9f9f9]">
                <img
                    src={spliter}
                    alt="Phone line connection diagram"
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="p-4 mt-6 border flex items-center">
                <div className="border-r w-1/2">
                    <Link to={"/solved"}>
                        <img className="mx-auto" src={mainAction} alt="yes" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Solved</p>
                    </Link>
                </div>
                <div className="mx-auto">
                    <Link to={"/not-solved"}>
                        <img src={mainAction} alt="no" className="mx-auto" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Not Solved</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LineStillDown2