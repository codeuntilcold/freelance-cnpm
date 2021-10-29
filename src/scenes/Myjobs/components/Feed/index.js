import { useState } from 'react'

import './index.css'
import FeedItem from '../FeedItem/index'

function Feed() {

    const [ securedJobs, setSecuredJobs ] = useState([
        
        {
            title: "Phụ quán cho cô Hai",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Đang làm",
            
        },
        {
            title: "Làm việc tại xí nghiệp may",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Đã xong",
        },
        {
            title: "Phụ chuyển nhà - cần người giúp đỡ",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Đã xong",
        }
    ])

    const [ pendingJobs, setPendingJobs ] = useState([
        {
            title: "Phụ quán cho cô Hai",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Huỷ",
            
        },
        {
            title: "Làm việc tại xí nghiệp may",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Huỷ",
        },
        {
            title: "Phụ chuyển nhà",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Huỷ",
        }
    ])



    return (
        <div className='myjobs__feed'>

            <div className="myjobs__feed-header">
				<h1>Việc của tôi</h1>
			</div>

            { securedJobs.map(job => <FeedItem content={job}/>) }
            


            <div className="myjobs__feed-header">
				<h1>Đang chờ duyệt</h1>
			</div>

            { pendingJobs.map(job => <FeedItem content={job}/>) }



        </div>
    )
}

export default Feed
