import { Link } from 'react-router-dom'
import './index.css'
import MiniHeader from '../MiniHeader'
import EditOutlined from '@mui/icons-material/EditOutlined'

function Stats() {
    const Handle = () =>{
        console.log("call edit on stats");
    }
    return (
        <div className='MinorInfo'>
            <MiniHeader Content="Liên lạc" MiniIcon={EditOutlined} Handle={Handle} className="MinorInfoCom"></MiniHeader>
            <MiniHeader Content="Địa chỉ làm việc" MiniIcon={EditOutlined} Handle={Handle} className="MinorInfoCom"></MiniHeader>
        </div>
    )
}

export default Stats
