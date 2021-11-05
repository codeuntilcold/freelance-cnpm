import CancelButton from "../../../../components/button/CancelButton";
import SubmitButton from "../../../../components/button/SubmitButton";
import CornerFooter from '../../../../components/CornerFooter'

import './index.css'

import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';


function JobEdit({job}){
    let temp = job;
    return(
        <Container maxWidth='lg'>
            <div className="job-management whole-page-container">
                <Sidebar active={1} role="employer" />
                <div className = "job-management__item central-collumn">
                    <h1 className = "job-heading central-page-header">Chỉnh sửa công việc</h1>
                    <form>
                        {/* Name input--------------------- */}
                        <div className= 'item-container'>
                            <p className="item-input">
                                <span className = "item__name">Tên công việc</span>
                                <input type = "text" className = "item-input__box" required defaultValue = {job.name} 
                                    onChange = {(e)=> {
                                        temp.name = e.target.value;
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
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Số lượng cần tuyển</span>
                                <input type = 'number' className = "item-input__box" required defaultValue = {job.total}
                                    onChange = {(e)=> {
                                        temp.total = e.target.value;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Yêu cầu kinh nghiệm</span>
                                <input type = 'text' className = "item-input__box" required defaultValue = {job.experience}
                                    onChange = {(e)=> {
                                        temp.experience = e.target.value;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Yêu cầu giới tính</span>
                                <input type = 'text' className = "item-input__box" required defaultValue = {job.sex}
                                    onChange = {(e)=> {
                                        temp.sex = e.target.value;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Địa điểm làm việc</span>
                                <input type = 'text' className = "item-input__box" required defaultValue = {job.address}
                                    onChange = {(e)=> {
                                        temp.address = e.target.value;
                                    }}
                                />
                            </p>
                            <p className="item-input">
                                <span className = "item__field">Hạn chót hồ sơ</span>
                                <input type = 'date' className = "item-input__box" required defaultValue = {job.deadline}
                                    onChange = {(e)=> {
                                        temp.deadline = e.target.value;
                                    }}
                                />
                            </p>
                        </div>
                        {/* Detail info----------------------------------------------------- */}
                        <div>
                            <div className= 'item-container'>
                                <p className = "item__name">Thông tin chi tiết</p>
                                <div className="item-input">
                                    <p className = "item__field">Mô tả công việc</p>
                                    <div id = "description" class="item-input__line" contentEditable >{job.description}</div>
                                </div>
                                <div className="item-input">
                                    <p className = "item__field">Yêu cầu ừng viên</p>
                                    <div id = "requirement" class="item-input__line" contentEditable>{job.requirement}</div>
                                </div>
                                <div className="item-input">
                                    <p className = "item__field">Quyền lợi</p>
                                    <div id = "benefit" class="item-input__line" contentEditable>{job.benefit}</div>
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
                            <SubmitButton
                                key = {job._id + 'a'}
                                name = "Lưu"
                                link = '/job-management'
                                onClick = {()=>{
                                    temp.description = document.getElementById('description').textContent;
                                    temp.requirement = document.getElementById('requirement').textContent;
                                    temp.benefit = document.getElementById('benefit').textContent;
                                    job = temp
                                }}
                            />
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