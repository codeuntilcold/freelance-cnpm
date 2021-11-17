import { useState, useEffect }from 'react'
import './index.css'
import MiniHeader from '../MiniHeader'
import EditOutlined from '@mui/icons-material/EditOutlined'
import CornerFooter from '../../../../components/CornerFooter'
import { Phone, Mail} from '@mui/icons-material';
import Popup from '../Popup/Popup';
function Stats(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [profile, setProfile] = useState(
        {
            "address": [ "33/3 Ung Văn Khiêm, quận Bình Thạnh, TP.HCM", "12 Lê Lợi", "193 Hùng Vương"],
            "contact": [{"Type": "Phone", "Value": "0123456789"}, {"Type": "Email", "Value": "example@example"}]
        })
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState("");

    function LoadData (Name = "None"){
        console.log("Load");
        switch(Name){
            case "contact":
                setData([...profile.contact]);
                setDataType(Name);
                break;
            case "address":
                setData([...profile.address]);
                setDataType(Name)
                break;
        }
    }
    function Handle (Name = "None"){
        console.log("handle");
        setButtonPopup(true);
        LoadData(Name);
    }
    useEffect(() => {
        LoadData(dataType);
        console.log(profile)
    }, [buttonPopup])

    return (
        <div className="Stats">
            <div className='MinorInfo'>
                    <div className="Info">
                    { buttonPopup ? (<Popup setTrigger={setButtonPopup} data={data} setData={setData} profile={profile} setProfile={setProfile} dataType={dataType} setSaveProfile={props.setSaveProfile}>
                    </Popup>): ""}
                        <MiniHeader Content="Liên lạc" MiniIcon={EditOutlined} Handle={()=>{Handle("contact")}} className="MinorInfoCom"></MiniHeader>
                        {
                            profile.contact.map(Info=>{
                                return <span className="Line">
                                    {Info.Type === "Phone" ? <Phone/> : <Mail/>}
                                    <span>{Info.Value}</span>
                                </span>
                            })
                        }
                    </div>
                    <div className="Info">
                        <MiniHeader Content="Địa chỉ làm việc" MiniIcon={EditOutlined} Handle={()=>{Handle("address")}} className="MinorInfoCom"></MiniHeader>
                        {
                            profile.address.map(addr=>{
                                return <span className="Line">
                                    {addr}
                                </span>
                            })
                        }
                    </div>
            </div>
            <CornerFooter></CornerFooter>
    
        </div>
    )
}

export default Stats
