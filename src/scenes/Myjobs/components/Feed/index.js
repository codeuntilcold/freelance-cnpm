import { useState } from 'react'

import './index.css'
import FeedItem from './FeedItem'

function Feed() {

    const [ confirmedJobs, setConfirmedJobs ] = useState([
        
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

    const [ markedJobs, setMarkedJobs ] = useState([
        {
            title: "Phụ quán cho cô Hai",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Lưu",
            
        },
        {
            title: "Làm việc tại xí nghiệp may",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Lưu",
        },
        {
            title: "Phụ chuyển nhà",
            startDate: "D1/MM/YYYY",
            endDate: "D2/MM/YYYY",
            jobStatus: "Lưu",
        }
    ])



    return (
        <div className='central-collumn'>

            <div className="central-page-header">
				<h1>Việc của tôi</h1>
			</div>

            { confirmedJobs.map(job => <FeedItem content={job}/>) }
            


            <div className="central-page-header">
				<h1>Đang chờ duyệt</h1>
			</div>

            { pendingJobs.map(job => <FeedItem content={job}/>) }

            <div className="central-page-header">
				<h1>Tin đã lưu</h1>
			</div>

            { markedJobs.map(job => <FeedItem content={job}/>) }



        </div>
    )
}

export default Feed
