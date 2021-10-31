import AccessButton from '../../../../components/button/AccessButton';
import DeleteButton from '../../../../components/button/DeleteButton';
import './index.css';

function JobItem(props){
    return (
        <div className = "item-container">
            <p className = "item__name">{props.name}</p>
            <p className = "item__field">
                <span className = "item__field--name">Trạng thái</span> 
                <Status/>
            </p>
            <p className = "item__field">
                <span className = "item__field--name">Đơn mới</span>
                <span className = "item__field--content">{props.waiting}</span> 
            </p>
            <p className = "item__field">
                <span className = "item__field--name">Số lượng</span>
                <span className = "item__field--content">{props.accepted}/{props.need}</span>
            </p>
            <p className = "item__button">
                <DeleteButton
                    name = "Xóa"
                    link = "/"
                />
                <AccessButton
                    name = "Danh sách"
                    link = {`/job-management/job${props.id}`}
                />
                <AccessButton
                    name = "Chỉnh sửa"
                    link = "/new"
                />
            </p>
        </div>
    )
}

export default JobItem;

function Status(){
    return (
        <span className = "item__field--content job-status">
            <div className = 'job-status__box' onClick = {StatusClick} >
                Đang tuyển
            </div>
            <div className = 'job-status__list'>
                <div className = 'job-status__item'>Đang tuyển</div>
                <div className = 'job-status__item'>Dừng tuyển</div>
            </div>


        </span>
    )
}

var on = false;
function StatusClick(){
    const statusList = document.getElementsByClassName('job-status__list')[0];
    const body = document.getElementsByClassName('job-management');
    body.click = function(){
        statusList.style.display = "none";
        on = false;
    }
    if (!on){
        statusList.style.display = "block";
        on = true;
    }
    else {
        statusList.style.display = "none";
        on = false;
    }

}