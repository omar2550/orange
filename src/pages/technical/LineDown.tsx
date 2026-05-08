import { Link } from "react-router-dom"
import OrangeBox from "../../components/ui/orangeBox"
import ledok from '../../assets/ledok.png'
import ledred from '../../assets/ledred.png'
import stolenCables from '../../assets/stolenCables.png'
import fiberProblem from '../../assets/fiberProblem.png'

const LineDown = () => {
    return (
        <div>
            <OrangeBox title="Line Down Troubleshooting steps:" />
            <br />
            <p className="list-item ml-6">Check the routes's Power Led status.</p>

            <div className="p-4 mt-6 border flex items-center">
                <div className="border-r w-1/2">
                    <Link to={"/led-ok"}>
                        <img className="mx-auto" src={ledok} alt="ledok" />
                    </Link>
                </div>
                <div className="mx-auto">
                    <Link to={"/led-red"}>
                        <img src={ledred} alt="ledred" />
                    </Link>
                </div>
            </div>

            <div className="p-4 mt-6 border flex items-center">
                <div className="border-r w-1/2">
                    <Link to={"/led-ok"}>
                        <img className="mx-auto" src={fiberProblem} alt="fiberProblem" />
                    </Link>
                </div>
                <div className="mx-auto">
                    <Link to={"/led-red"}>
                        <img src={stolenCables} alt="stolenCables" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LineDown