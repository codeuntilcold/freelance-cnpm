import CancelButton from "../../../../components/button/CancelButton";
import SubmitButton from "../../../../components/button/SubmitButton";
import CornerFooter from '../../../../components/CornerFooter'
import './index.css'

import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';


function JobNew({jobList}){
    return(
    <Container maxWidth='lg'>
        <div className="job-management whole-page-container">
            <Sidebar active={1} role="employer" />
            <div className = "job-management__item central-collumn">
                <h1 className = "job-heading central-page-header">Tạo công việc mới</h1>
                <form>
                    <div className= 'item-container'>
                        <p className="item-input">
                            <span className = "item__name">Tên công việc</span>
                            <input type = "text" className = "item-input__box" required/>
                        </p>
                    </div>
                    <div className= 'item-container'>
                        <p className = "item__name">Thông tin tuyển dụng</p>
                        <p className="item-input">
                            <span className = "item__field">Mức lương</span>
                            <input type = 'number' className = "item-input__box" required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Số lượng cần tuyển</span>
                            <input type = 'number' className = "item-input__box" required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Yêu cầu kinh nghiệm</span>
                            <input type = 'text' className = "item-input__box" required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Yêu cầu giới tính</span>
                            <input type = 'text' className = "item-input__box" required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Địa điểm làm việc</span>
                            <input type = 'text' className = "item-input__box" required/>
                        </p>
                        <p className="item-input">
                            <span className = "item__field">Hạn chót hồ sơ</span>
                            <input type = 'date' className = "item-input__box" required/>
                        </p>
                    </div>
                    <div>
                        <div className= 'item-container'>
                            <p className = "item__name">Thông tin chi tiết</p>
                            <div className="item-input">
                                <p className = "item__field">Mô tả công việc</p>
                                <div class="item-input__line" contentEditable></div>
                            </div>
                            <div className="item-input">
                                <p className = "item__field">Yêu cầu ừng viên</p>
                                <div class="item-input__line" contentEditable></div>
                            </div>
                            <div className="item-input">
                                <p className = "item__field">Quyền lợi</p>
                                <div class="item-input__line" contentEditable></div>
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
                        <SubmitButton
                            key = 'a'
                            name = "Tạo mới"
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

export default JobNew;