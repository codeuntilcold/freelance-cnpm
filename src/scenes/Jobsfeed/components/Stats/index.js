import { Link } from 'react-router-dom'
import './index.css'

function NextJob() {
    return (
        <div className='next-job'>
            <p>Công việc tiếp theo</p>
            <h2>Phụ quán cho cô Hai</h2>
            <h2>7:00 - 11:00</h2>
        </div>
    )
}

function Stats() {
    return (
        <div className='stats'>

            <Link to='/profile'>
                <NextJob />
            </Link>

        </div>
    )
}

export default Stats
