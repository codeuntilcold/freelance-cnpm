import {Route, Switch } from 'react-router-dom';
import {useState} from 'react';
import './index.css'
import JobList from './Component/JobList';
import FreelancerList from './Component/FreelancerManagement';
import JobEdit from './Component/JobEdit';
import JobNew from './Component/JobNew';

export default function Jobmanagement() {
    const [jobList, setJobList] = useState([
        { 
            "_id": "j1",
            "createdAt": "04/11/2021",
    
            "name": "Phục vụ bàn",
            "address": "35 CMT8, quận 3, TP.HCM",
            "employer-id": "em1",
    
            "description": "Tư vấn và ghi món ăn khi có khách đến, báo cho thu ngân.",
            "deadline": "15/11/2021",
            "start-date": "20/11/2021",
            "end-date": "20/1/2022",
            "salary": "23000",
    
            "total": "5",
            "confirmed": "0",
    
            "experience": "đã từng làm công việc này trước đó",
            "sex": "cả hai",
            "requirement": "bề ngoài ưa nhìn, ăn nói tốt, hiểu rõ các món ăn của nhà hàng.",
            "benefit": "nghỉ 3 ngày trong tháng"
        },
        { 
            "_id": "j2",
            "createdAt": "05/11/2021",
    
            "name": "Rửa chén",
            "address": "35 CMT8, quận 3, TP.HCM",
            "employer-id": "em1",
    
            "description": "Rửa bát đũa ở phía sau bếp",
            "deadline": "16/11/2021",
            "start-date": "22/11/2021",
            "end-date": "22/3/2022",
            "salary": "20000",
    
            "total": "3",
            "confirmed": "1",
    
            "experience": "none",
            "sex": "cả hai",
            "requirement": "cẩn thận và kĩ càng",
            "benefit": "mỗi tháng được thêm 2 ngày lương"
        },
        { 
            "_id": "j3",
            "createdAt": "03/11/2021",
    
            "name": "Bảo vệ",
            "address": "35 CMT8, quận 3, TP.HCM",
            "employer-id": "em1",
    
            "description": "Trông giữ xe và bảo vệ nhà hàng.",
            "deadline": "17/11/2021",
            "start-date": "22/11/2021",
            "end-date": "22/1/2022",
            "salary": "29000",
    
            "total": "2",
            "confirmed": "0",
    
            "experience": "đã từng làm công việc này trước đó",
            "sex": "nam",
            "requirement": "có sức khỏe tốt, ngoại hình lực lưỡng",
            "benefit": "suất ăn trưa miễn phí tại nhà hàng"
        },
        { 
            "_id": "j4",
            "createdAt": "05/11/2021",
    
            "name": "Phụ bếp",
            "address": "35 CMT8, quận 3, TP.HCM",
            "employer-id": "em1",
    
            "description": "Chuẩn bị nguyên liệu cho đầu bếp, nấu các món đơn giản.",
            "deadline": "15/11/2021",
            "start-date": "20/11/2021",
            "end-date": "20/1/2022",
            "salary": "25000",
    
            "total": "4",
            "confirmed": "0",
    
            "experience": "đã từng nấu ăn",
            "sex": "cả hai",
            "requirement": "nhanh nhẹn nhưng cẩn thận, biết nấu các món cơ bản",
            "benefit": "nghỉ 2 ngày trong tháng"
        },
        { 
            "_id": "j5",
            "createdAt": "07/11/2021",
    
            "name": "Quét dọn",
            "address": "35 CMT8, quận 3, TP.HCM",
            "employer-id": "em1",
    
            "description": "Lau dọn bàn và quét dọn sàn nhà, lau cửa kính.",
            "deadline": "15/11/2021",
            "start-date": "25/11/2021",
            "end-date": "25/2/2022",
            "salary": "23000",
    
            "total": "4",
            "confirmed": "0",
    
            "experience": "none",
            "sex": "cả hai",
            "requirement": "sức khỏe ổn định, cẩn thận và tỉ mỉ",
            "benefit": "có thưởng cuối tháng"
        }
    ])
    const [freelancerList, setFreelancerList] = useState([
        {
            "name": "Nguyễn Văn Minh",
            "address": [ "33/3 Ung Văn Khiêm, quận Bình Thạnh, TP.HCM" ],
            "phone": "0945123456",
            "email": "minhnguyen12@gmail.com",
            "about-me": "Lao động tự do, cần tìm một công việc sau dịch bệnh.",
            "desired-hourly-salary": "25000 VND",
            "skills": ["bưng bê", "rửa chén", "phụ bếp", "thu ngân", "quét dọn"],
            "education": ["cấp 3"],
            "_id": "fr1",
            "createdAt": "05/11/2021"
        },
        {
            "name": "Nguyễn Văn Toàn",
            "address": [ "34/3 Ung Văn Khiêm, quận Bình Thạnh, TP.HCM" ],
            "phone": "0945123456",
            "email": "toannguyen12@gmail.com",
            "about-me": "Cần tìm một công việc sau dịch bệnh.",
            "desired-hourly-salary": "25000 VND",
            "skills": ["bưng bê", "rửa chén", "phụ bếp", "thu ngân", "quét dọn"],
            "education": ["cấp 3"],
            "_id": "fr2",
            "createdAt": "05/11/2021"
        },
        {
            "name": "Trần Văn Tân",
            "address": [ "35/3 Ung Văn Khiêm, quận Bình Thạnh, TP.HCM" ],
            "phone": "0945123456",
            "email": "toannguyen12@gmail.com",
            "about-me": "Lao động tự do, cần tìm một công việc sau dịch bệnh.",
            "desired-hourly-salary": "25000 VND",
            "skills": ["bưng bê", "rửa chén", "phụ bếp", "thu ngân", "quét dọn"],
            "education": ["cấp 3"],
            "_id": "fr3",
            "createdAt": "05/11/2021"
        },
        {
            "name": "Nguyễn Văn Tường",
            "address": [ "36/3 Ung Văn Khiêm, quận Bình Thạnh, TP.HCM" ],
            "phone": "0945123456",
            "email": "toannguyen12@gmail.com",
            "about-me": "Cần tìm một công việc sau dịch bệnh.",
            "desired-hourly-salary": "25000 VND",
            "skills": ["bưng bê", "rửa chén", "phụ bếp", "thu ngân", "quét dọn"],
            "education": ["cấp 3"],
            "_id": "fr4",
            "createdAt": "05/11/2021"
        },
        {
            "name": "Bùi Đức Anh",
            "address": [ "37/3 Ung Văn Khiêm, quận Bình Thạnh, TP.HCM" ],
            "phone": "0945123456",
            "email": "toannguyen12@gmail.com",
            "about-me": "Cần tìm một công việc sau dịch bệnh.",
            "desired-hourly-salary": "25000 VND",
            "skills": ["bưng bê", "rửa chén", "phụ bếp", "thu ngân", "quét dọn"],
            "education": ["cấp 3"],
            "_id": "fr5",
            "createdAt": "05/11/2021"
        }
    ])
    const [applyForList, setapplyForList] = useState([{
        "_id": "a1",
	    "createdAt": "03/11/2021",
	    "job-id": "j1",
	    "freelancer-id": "fr1",
	    "status": "Xac nhan",
    },
    {
        "_id": "a2",
	    "createdAt": "03/11/2021",
	    "job-id": "j1",
	    "freelancer-id": "fr2",
	    "status": "Xac nhan",
    },
    {
        "_id": "a3",
	    "createdAt": "03/11/2021",
	    "job-id": "j1",
	    "freelancer-id": "fr3",
	    "status": "Dang doi",
    }, 
    {
        "_id": "a4",
	    "createdAt": "03/11/2021",
	    "job-id": "j2",
	    "freelancer-id": "fr4",
	    "status": "Xac nhan",
    },
    {
        "_id": "a5",
	    "createdAt": "03/11/2021",
	    "job-id": "j2",
	    "freelancer-id": "fr2",
	    "status": "Dang doi",
    },
    {
        "_id": "a6",
	    "createdAt": "03/11/2021",
	    "job-id": "j3",
	    "freelancer-id": "fr5",
	    "status": "Dang doi",
    },
    {
        "_id": "a7",
	    "createdAt": "03/11/2021",
	    "job-id": "j3",
	    "freelancer-id": "fr3",
	    "status": "Dang doi",
    },
    {
        "_id": "a8",
	    "createdAt": "03/11/2021",
	    "job-id": "j3",
	    "freelancer-id": "fr2",
	    "status": "Dang doi",
    },
    {
        "_id": "a9",
	    "createdAt": "03/11/2021",
	    "job-id": "j4",
	    "freelancer-id": "fr5",
	    "status": "Xac nhan",
    },
    {
        "_id": "a10",
	    "createdAt": "03/11/2021",
	    "job-id": "j4",
	    "freelancer-id": "fr1",
	    "status": "Xac nhan",
    },
])

    return (
        <Switch>
            <Route path = "/job-management"  exact>
                <JobList key = "1" jobList = {jobList} applyForList = {applyForList}/>
            </Route>
            <Route path = "/job-management/new" exact>
                <JobNew key = '1' jobList={jobList} setJobList = {setJobList} />
            </Route>
            { 
                jobList.map(function(job){
                    return (
                        <Route key = {job._id} path = {`/job-management/job${job._id}`} exact>
                            <FreelancerList 
                                key = {job._id} 
                                job = {job} 
                                freelancerList = {freelancerList} 
                                applyForList={applyForList}/>
                        </Route>
                    );
                })
            }
            {
                jobList.map(function(job){
                    return (
                        <Route key = {job._id} path = {`/job-management/edit-job${job._id}`} exact>
                            <JobEdit 
                                key = {job._id}
                                job = {job}
                            />
                        </Route>
                    );
                })
            }          
        </Switch>
    );
        
}

