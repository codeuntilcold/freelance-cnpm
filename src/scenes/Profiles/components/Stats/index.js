import { useState, useEffect, useContext, useCallback }from 'react'
import './index.css'
import MiniHeader from '../MiniHeader'
import EditOutlined from '@mui/icons-material/EditOutlined'
import CornerFooter from '../../../../components/CornerFooter'
import { Phone, Mail} from '@mui/icons-material';
import { ProfileContext } from '../../index'
import Popup from '../Popup/Popup';
function Stats(props) {
    const {profile, setProfile, setSaveProfile, editable} = useContext(ProfileContext);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState("");

    const LoadData = useCallback( (Name = "None")=>{
        // console.log("Load");
        switch(Name){
            case "contact":
                setData([...profile.contact]);
                setDataType(Name);
                break;
            case "address":
                setData([...profile.address]);
                setDataType(Name)
                break;
            default:
                break;
        }
    }, [profile])
    function Handle (Name = "None"){
        // console.log("handle");
        setButtonPopup(true);
        LoadData(Name);
    }
    useEffect(() => {
        // LoadData(dataType);
        // console.log(profile)
    }, [buttonPopup, LoadData])
    // useEffect(()=>{
    // }, [editable])
    return (
        <div className="Stats">
            <div className='MinorInfo'>
                    <div className="Info">
                    { buttonPopup ? (<Popup setTrigger={setButtonPopup} data={data} setData={setData} profile={profile} setProfile={setProfile} dataType={dataType} setSaveProfile={setSaveProfile}>
                    </Popup>): ""}
                        <MiniHeader Content="Liên lạc" MiniIcon={EditOutlined} Handle={()=>{Handle("contact")}} className="MinorInfoCom" Editable={editable}></MiniHeader>
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
                        <MiniHeader Content="Địa chỉ làm việc" MiniIcon={EditOutlined} Handle={()=>{Handle("address")}} className="MinorInfoCom" Editable={editable}></MiniHeader>
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
