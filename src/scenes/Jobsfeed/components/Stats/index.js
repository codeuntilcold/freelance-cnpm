import { Link } from 'react-router-dom'
// import JCard from '../../../../components/JCard'
import CornerFooter from '../../../../components/CornerFooter'
import './index.css'

function NextJob() {
    return (
        <div className='next-job'>
            <p>Công việc tiếp theo</p>
            <h2>Phụ quán cho cô Hai</h2>
            <h3>7:00 - 11:00</h3>
        </div>
    )
}

function Stats() {
    return (
        <div className='stats'>

            {0 ? 
            <Link to='/profile'>
                <NextJob />
            </Link>
            : 
            <div></div>
            }            


            <CornerFooter />


        </div>
    )
}

export default Stats
