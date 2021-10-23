import { useState } from 'react';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CancelIcon from '@mui/icons-material/Cancel';


function JobCard({ content }) {

    const [ save, setSave ] = useState(true)

    return (
        <div className='job-card'>
            
            <div className="job-title">
                <h1>
                    {content.title}
                </h1>
                <span className='job-bookmark'>
                    { save 
                        ? <BookmarkIcon style={{ color:'var(--primary-color)', fontSize:'35px' }} /> 
                        : <BookmarkBorderRoundedIcon /> }
                </span>
            </div>
            
            <p>Mô tả: {content.description}</p>
            
            <div className="job-mini-detail">
                <span> <MonetizationOnIcon style={{fontSize:'16px'}}/> Mức lương: {content.salary}</span>
                <span> <LocationOnIcon style={{fontSize:'16px'}}/> Địa điểm: {content.location}</span>
                <span> <PeopleAltIcon style={{fontSize:'16px'}}/> Số lượng: {content.number}</span>
                <span> <CancelIcon style={{fontSize:'16px'}}/> Hạn chót: {content.deadline}</span>
            </div>


        </div>
    )
}

export default JobCard
