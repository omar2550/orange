import { Link } from 'react-router-dom'
import scr1 from '../../assets/scr1.png'
import sr1 from '../../assets/sr1.png'
import mainAction from '../../assets/mainAction.png'
import OrangeBox from '../../components/ui/orangeBox'

const VoiceWorking = () => {
    return (
        <div>
            <img className="mx-auto my-6" src={scr1} alt="script" />
            <OrangeBox title='Siebel SR:' />
            <p className="list-item ml-6 my-6">Create & close the below SR:</p>
            <img className="mx-auto" src={sr1} alt="SR" />
            <p className="list-item ml-6 my-6">If No, check the Line Status:</p>

            <div className="p-4 mt-6 border flex items-center">
                <div className="border-r w-1/2">
                    <Link to={"/matched"}>
                        <img className="mx-auto" src={mainAction} alt="yes" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Matched (Line Down)</p>
                    </Link>
                </div>
                <div className="mx-auto">
                    <Link to={"/wrong-port"}>
                        <img src={mainAction} alt="no" className="mx-auto" />
                        <p className='text-[12px] font-bold text-center text-orange-600'>Not Matched (Wrong Port)</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VoiceWorking