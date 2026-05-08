import { Link } from 'react-router-dom'
import mainAction from '../../assets/mainAction.png'

const LedOk = () => {
    return (
        <div>
            <p className="list-item ml-6">Ask the customer the voice is working ot not.</p>

            <div className="p-4 mt-6 border flex items-center">
                <div className="border-r w-1/2">
                    <Link to={"/voice-working"}>
                        <img className="mx-auto" src={mainAction} alt="yes" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Voice is working</p>
                    </Link>
                </div>
                <div className="mx-auto">
                    <Link to={"/voice-not-working"}>
                        <img src={mainAction} alt="no" className="mx-auto" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Voice is not working</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LedOk