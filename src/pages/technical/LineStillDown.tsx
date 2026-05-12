import { Link } from "react-router-dom"
import mainAction from '../../assets/mainAction.png'
import phone from '../../assets/phone.png'
import spliter from '../../assets/spliter.png'

function LineStillDown() {
    return (
        <div>
            <p className="list-item ml-6 mt-6">Make sure that customer is connecting Phone line (RJ-11) from Splitter to the Router as below):</p>
            <div className="border-2 border-gray-400 rounded-sm p-1 overflow-hidden bg-[#f9f9f9]">
                <img
                    src={phone}
                    alt="Phone line connection diagram"
                    className="w-full h-auto object-contain"
                />
            </div>

            <p className="list-item ml-6 mt-6">Check customer splitter wiring:</p>
            <div className="border-2 border-gray-400 rounded-sm p-1 overflow-hidden bg-[#f9f9f9]">
                <img
                    src={spliter}
                    alt="Phone line connection diagram"
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="p-4 mt-6 border flex items-center">
                <div className="border-r w-1/2">
                    <Link to={"/lineup2"}>
                        <img className="mx-auto" src={mainAction} alt="yes" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Line is Up</p>
                    </Link>
                </div>
                <div className="mx-auto">
                    <Link to={"/linedown2"}>
                        <img src={mainAction} alt="no" className="mx-auto" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Line is still down</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LineStillDown