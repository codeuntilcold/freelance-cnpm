import CancelButton from "../../../../components/button/CancelButton";
import CornerFooter from '../../../../components/CornerFooter';
import { db } from "../../../../services/db";
import { Timestamp, setDoc, doc } from "@firebase/firestore";

import './index.css'
import { useHistory } from "react-router-dom";
import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';

function JobNew({ employerID, jobList, setRender}){
    let newJob = {
        "_id": `j${GetId(jobList)}`,
        "createdAt": '',
        "confirmed": "0",
        "employer-id": `${employerID}`
    };
    let history = useHistory();

    return(
    <Container maxWidth='lg'>
        <div className="job-management whole-page-container">
            <Sidebar active={1} role="employer" />
            <div className = "job-management__item central-collumn">
                <h1 className = "job-heading central-page-header">Tạo công việc mới</h1>
                <form onSubmit = {(e)=>{
                    e.preventDefault();               
                    newJob.createdAt = ToTimestamp(FormatDate(new Date()));
                    newJob.deadline = ToTimestamp(newJob.deadline);
                    newJob['start-date'] = ToTimestamp(newJob['start-date']);
                    newJob.description = document.getElementById('description').textContent;
                    newJob.requirement = document.getElementById('requirement').textContent;
                    newJob.benefit = document.getElementById('benefit').textContent;
                    setRender(prev=>!prev)
                    PostData(newJob, jobList);
                    history.push("/job-management");
                }}>
                    <div className= 'item-container'>
                        <p className="item-input">
                            <span className = "item__name">Tên công việc</span>
                            <input type = "text" className = "item-input__box" onChange = {(e)=>newJob.name = e.target.value} required/>
                        </p>
                    </div>
                    <div className= 'item-container'>
                        <p className = "item__name">Thông tin tuyển dụng</p>
                        <p className="item-input">
                            <span className = "item__field">Mức lương</span>
                            <input type = 'number' className = "item-input__box" onChange = {(e)=>newJob.salary = e.target.value} required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Số lượng cần tuyển</span>
                            <input type = 'number' className = "item-input__box" onChange = {(e)=>newJob.total = e.target.value} required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Yêu cầu kinh nghiệm</span>
                            <input type = 'text' className = "item-input__box" onChange = {(e)=>newJob.experience = e.target.value} required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Yêu cầu giới tính</span>
                            <input type = 'text' className = "item-input__box" onChange = {(e)=>newJob.sex = e.target.value} required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Địa điểm làm việc</span>
                            <input type = 'text' className = "item-input__box" onChange = {(e)=>newJob.address = e.target.value} required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Hạn chót hồ sơ</span>
                            <input type = 'date' className = "item-input__box" onChange = {(e)=>newJob.deadline = e.target.value} required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Ngày bắt đầu</span>
                            <input type = 'date' className = "item-input__box" onChange = {(e)=>newJob['start-date'] = e.target.value} required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Thời gian làm</span>
                            <select className = "item-input__box" onChange = {(e)=> newJob.duration = e.target.value}>
                                <option>Thời vụ</option>
                                <option>Ổn định</option>
                            </select>
                        </p>
                    </div>
                    <div>
                        <div className= 'item-container'>
                            <p className = "item__name">Thông tin chi tiết</p>
                            <div className="item-input">
                                <p className = "item__field">Mô tả công việc</p>
                                <div id = "description" class="item-input__line" contentEditable></div>
                            </div>
                            <div className="item-input">
                                <p className = "item__field">Yêu cầu ừng viên</p>
                                <div id = "requirement" class="item-input__line" contentEditable></div>
                            </div>
                            <div className="item-input">
                                <p className = "item__field">Quyền lợi</p>
                                <div id = "benefit" class="item-input__line" contentEditable></div>
                            </div>
                        </div>           
                    </div>
                    <div className ="item__button item__button--foot">
                        <CancelButton
                            key = 'c'
                            className = "button-large"
                            name = "Hủy"
                            link = '/job-management'
                        />
                        <button type='submit' className = "button button--access">
                            Tạo mới
                        </button>
                    </div>
                </form>
            </div>
            <div className = "job-management__footer">
                <CornerFooter/>
            </div>
        </div>
    </Container>

    )
}

export default JobNew;

function FormatDate(date){
    let year = date.getYear() + 1900;
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day < 10)
        return year + '-' + month + '-0' + day;
    return year + '-' + month + '-' + day;
}

function ToTimestamp(date){
    return Timestamp.fromDate(new Date(date));
}

function PostData(job, jobList){
    
    var fetchData = async()=>{
        await setDoc(doc(db, "job",job._id), job);  
        
        // window.location.href = '/job-management';
    } 
    fetchData();
}

function GetId(jobList){
    let cur = 0;
    for(let i = 0; i<jobList.length;i++){
        // eslint-disable-next-line eqeqeq
        if ('j' + cur == jobList[i]._id){  
            cur++;
            i = 0;
        }
    }
    return cur;

}