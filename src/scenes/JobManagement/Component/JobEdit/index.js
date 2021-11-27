import CancelButton from "../../../../components/button/CancelButton";
import CornerFooter from '../../../../components/CornerFooter'
import { db } from "../../../../services/db";
import { Timestamp, setDoc, doc } from "@firebase/firestore";
import './index.css'
import { useHistory } from "react-router-dom";


import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';


function JobEdit({job, setRender}){

    let history = useHistory();
    let temp = job;
    let changed = false;
    return(
        <Container maxWidth='lg'>
            <div className="job-management whole-page-container">
                <Sidebar active={1} role="employer" />
                <div className = "job-management__item central-collumn">
                    <h1 className = "job-heading central-page-header">Chỉnh sửa công việc</h1>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        if (job.description !== document.getElementById('description').textContent){
                            temp.description = document.getElementById('description').textContent;
                            changed = true
                        }
                        if (job.requirement !== document.getElementById('requirement').textContent){
                            temp.requirement = document.getElementById('requirement').textContent;
                            changed = true
                        }
                        if (job.benefit !== document.getElementById('benefit').textContent){
                            temp.benefit = document.getElementById('benefit').textContent;
                            changed = true;
                        }
                        if (changed){
                            var answer = window.confirm("Lưu thay đổi?")
                            if (answer === true) {
                                job = temp;
                                setRender(prev=>!prev);
                                PostData(job);
                                history.push("/job-management"); 
                            }
                        }
                        else {
                            history.push("/job-management"); 
                        }
                    }}>
                        {/* Name input--------------------- */}
                        <div className= 'item-container'>
                            <p className="item-input">
                                <span className = "item__name">Tên công việc</span>
                                <input type = "text" className = "item-input__box" required defaultValue = {job.name} 
                                    onChange = {(e)=> {
                                        temp.name = e.target.value;
                                        changed = true;
                                    }
                                }/>
                            </p>
                        </div>
                        {/* Base info ---------------------------------------- */}
                        <div className= 'item-container'>
                            <p className = "item__name">Thông tin tuyển dụng</p>
                            <p className="item-input">
                                <span className = "item__field">Mức lương</span>
                                <input type = 'number' className = "item-input__box" required defaultValue = {job.salary}
                                    onChange = {(e)=> {
                                        temp.salary = e.target.value;
                                        changed = true;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Số lượng cần tuyển</span>
                                <input type = 'number' className = "item-input__box" required defaultValue = {job.total}
                                    onChange = {(e)=> {
                                        temp.total = e.target.value;
                                        changed = true;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Yêu cầu kinh nghiệm</span>
                                <input type = 'text' className = "item-input__box" required defaultValue = {job.experience}
                                    onChange = {(e)=> {
                                        temp.experience = e.target.value;
                                        changed = true;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Yêu cầu giới tính</span>
                                <input type = 'text' className = "item-input__box" required defaultValue = {job.sex}
                                    onChange = {(e)=> {
                                        temp.sex = e.target.value;
                                        changed = true;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Địa điểm làm việc</span>
                                <input type = 'text' className = "item-input__box" required defaultValue = {job.address}
                                    onChange = {(e)=> {
                                        temp.address = e.target.value;
                                        changed = true;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Hạn chót hồ sơ</span>
                                <input type = 'date' className = "item-input__box" required defaultValue = {FormatDate(job.deadline)}
                                    onChange = {(e)=> {
                                        temp.deadline = e.target.value;
                                        temp.deadline = ToTimestamp(temp.deadline);
                                        changed = true;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Ngày bắt đầu</span>
                                <input type = 'date' className = "item-input__box" required defaultValue = {FormatDate(job['start-date'])}
                                    onChange = {(e)=> {
                                        temp['start-date'] = e.target.value;
                                        temp['start-date'] = ToTimestamp(temp['start-date']);
                                        changed = true;
                                    }}  
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Thời gian làm</span>
                                <select className = "item-input__box" defaultValue = {job.duration} onChange = {(e)=>{temp.duration = e.target.value;changed = true;}}>
                                    <option value = "Thời vụ">Thời vụ</option>
                                    <option value = "Ổn định">Ổn định</option>
                                </select>
                            </p>
                        </div>
                        {/* Detail info----------------------------------------------------- */}
                        <div>
                            <div className= 'item-container'>
                                <p className = "item__name">Thông tin chi tiết</p>
                                <div className="item-input">
                                    <p className = "item__field">Mô tả công việc</p>
                                    <div id = "description" class="item-input__line" contentEditable >{temp.description}</div>
                                </div>
                                <div className="item-input">
                                    <p className = "item__field">Yêu cầu ừng viên</p>
                                    <div id = "requirement" class="item-input__line" contentEditable>{temp.requirement}</div>
                                </div>
                                <div className="item-input">
                                    <p className = "item__field">Quyền lợi</p>
                                    <div id = "benefit" class="item-input__line" contentEditable>{temp.benefit}</div>
                                </div>
                            </div>           
                        </div>
                        <div className ="item__button item__button--foot">
                            <CancelButton
                                key = {job._id + 'c'}
                                className = "button-large"
                                name = "Hủy"
                                link = '/job-management'
                            />
                            <button type='submit' className = "button button--access">Lưu</button>
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

export default JobEdit;

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

function PostData(job){
    
    var fetchData = async()=>{
        await setDoc(doc(db, "job",job._id), job); 
        
    } 
    fetchData();
}