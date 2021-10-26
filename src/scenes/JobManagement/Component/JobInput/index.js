import Button from '../Button'
import NameJob from './NameJob';
import BaseInfo from './BaseInfo';
import DetailInfo from './DetailInfo';
import './index.css'


function JobInput(){
    return(
        <div>
            <h1 className = "job-heading">Thông tin công việc</h1>
            <NameJob/>
            <BaseInfo/>
            <DetailInfo/>
            <div className ="item__button item__button--foot">
                <Button
                    className = "button-large"
                    type = "exit"
                    name = "Hủy"
                />
                <Button
                    type = "large"
                    name = "Xác nhận"
                />
            </div>
        </div>
    )
}

export default JobInput;