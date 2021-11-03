
import './index.css'
import MiniHeader from '../MiniHeader'
import EditOutlined from '@mui/icons-material/EditOutlined'
import CornerFooter from '../../../../components/CornerFooter'
import { Phone, Mail} from '@mui/icons-material';
function Stats() {
    const Infos = [
        {
            Type: "Phone",
            Value: "0123456789"
        },
        {
            Type: "Mail",
            Value: "example@example.com"
        }
    ]
    const Handle = () =>{
        alert("call edit on stats");
    }
    return (
        <div className="Stats">
            <div className='MinorInfo'>
                    <div className="Info">
                        <MiniHeader Content="Liên lạc" MiniIcon={EditOutlined} Handle={Handle} className="MinorInfoCom"></MiniHeader>
                        {
                            Infos.map(Info=>{
                                console.log(Info);
                                return <span className="Line">
                                    {Info.Type === "Phone" ? <Phone/> : <Mail/>}
                                    <span>{Info.Value}</span>
                                </span>
                            })
                        }
                    </div>
                    <div className="Info">
                        <MiniHeader Content="Địa chỉ làm việc" MiniIcon={EditOutlined} Handle={Handle} className="MinorInfoCom"></MiniHeader>
                    </div>
            </div>
            <CornerFooter></CornerFooter>
    
        </div>
    )
}

export default Stats
