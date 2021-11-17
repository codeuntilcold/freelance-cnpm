import AccessButton from '../../../../components/button/AccessButton';
import DeleteButton from '../../../../components/button/DeleteButton';
import { db } from '../../../../services/db';
import { doc, deleteDoc } from "firebase/firestore";
import './index.css';

function JobItem({job, applyForList, setRender}){
    return (
        <div className = "item-container">
            <h2 className = "item__name">{job.name}</h2>
            <p className = "item__field">
                <span className = "item__field--name">Trạng thái</span> 
                <span className = "item__field--content">Đang tuyển</span>
            </p>
            <p className = "item__field">
                <span className = "item__field--name">Đơn mới</span>
                <span className = "item__field--content">
                {
                    applyForList.reduce(function(sum, cur){
                        if (cur['job-id'] === job._id && cur.status === 'Đang đợi')
                            return sum+1;
                        else return sum;
                    }, 0)
                }</span> 
            </p>
            <p className = "item__field">
                <span className = "item__field--name">Số lượng</span>
                <span className = "item__field--content">
                    {
                        applyForList.reduce(function(sum, cur){
                            if (cur['job-id'] === job._id && cur.status === 'Đang làm')
                                return sum+1;
                            else return sum;
                        }, 0)
                    }/{job.total}
                </span>
            </p>
            
            <p className = "item__button">
                <DeleteButton
                    key = {job._id + 'x'}
                    name = "Xóa"
                    link = "/job-management"
                    onClick = {()=>{
                        let confirm = window.confirm('Bạn chắc chắn muốn xóa?');
                        if(confirm){
                            DeleteData(job);
                            setRender(prev=>!prev);
                        }
                    }}
                />
                <AccessButton
                    key = {job._id + 'd'}
                    name = "Danh sách"
                    link = {`/job-management/job${job._id}`}
                />
                <AccessButton
                    key = {job._id + 'c'}
                    name = "Chỉnh sửa"
                    link = {`/job-management/edit-job${job._id}`}
                />       
            </p>
        </div>
    )
}

export default JobItem;

function DeleteData(job){
    var fetchData = async()=>{
        await deleteDoc(doc(db, "job", job._id)); 
    } 
    fetchData();
}