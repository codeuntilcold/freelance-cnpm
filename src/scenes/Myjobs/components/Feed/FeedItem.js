import './index.css'
import CheckIcon from '@mui/icons-material/Check'
import RemoveIcon from '@mui/icons-material/Remove'
import ClearIcon from '@mui/icons-material/Clear'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

function Status({ jobStatus }) {

    return (

        <div className="feed-item-status">
            
            { jobStatus === 'Đã xong' && 
                <div className="feed-item-status" 
                    style={{ backgroundColor: 'var(--green-500)'}}> 
                    <span>{jobStatus}</span> 
                    <CheckIcon style={{ fontSize: '25', paddingLeft: '5px' }}/> 
                </div>
            }
            { jobStatus === 'Đang làm' && 
                <div className="feed-item-status"  
                    style={{ backgroundColor: 'var(--yellow-button)'}}> 
                    <span>{jobStatus}</span> 
                    <RemoveIcon style={{ fontSize: '25', paddingLeft: '5px' }}/> 
                </div>}
            { jobStatus === 'Huỷ' && 
                <div className="feed-item-status" 
                    style={{ backgroundColor: 'var(--red-button)'}}> 
                    <span>{jobStatus}</span> 
                    <ClearIcon style={{ fontSize: '25', paddingLeft: '5px' }}/> 
                </div> 
            }
            { jobStatus === 'Lưu' && 
                <div className="feed-item-status" 
                    style={{ backgroundColor: 'var(--green-500)'}}> 
                    <span>{jobStatus}</span>
                    <MenuIcon style={{ fontSize: '25', paddingLeft: '5px' }}/> 
                </div> 
            }

        </div>


    )
}


function FeedItem({ content }) {
    return (
        <div className='feed-item'>

            <Link to='/jobdetails' style={{ color: '#000' }}>
                <div className='feed-item-title'>
                    <h2>{content.title}</h2>

                    <Status jobStatus={content.jobStatus} />
                </div>
            </Link>

            <div className="feed-item-date">
                <p>{content.startDate} - {content.endDate}</p>
            </div>
            
        </div>
    )
}

export default FeedItem