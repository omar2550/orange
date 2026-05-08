import { Link } from 'react-router-dom'
import mainAction from '../../assets/mainAction.png'

const Matched = () => {
    return (
        <div>
            <p className="list-item ml-6 mt-6">If Copper: Reset the port.</p>
            <p className="list-item ml-6">If MSAN: Lock & Unlock.</p>

            <div className="p-4 mt-6 border flex items-center">
                <div className="border-r w-1/2">
                    <Link to={"/lineup"}>
                        <img className="mx-auto" src={mainAction} alt="yes" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Line is Up</p>
                    </Link>
                </div>
                <div className="mx-auto">
                    <Link to={"/linedown"}>
                        <img src={mainAction} alt="no" className="mx-auto" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Line is still down</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Matched