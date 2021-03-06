import CornerFooter from '../../../../components/CornerFooter'
import AccessButton from '../../../../components/button/AccessButton'
import DeleteButton from '../../../../components/button/DeleteButton';
import { db } from "../../../../services/db";
import { //Timestamp, 
    setDoc, doc } from "@firebase/firestore";
import './index.css'


import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';

export default function FreelancerList({job, freelancerList, applyForList}){
    let notification = {
        message: `Bạn đã được nhận vào công việc ${job.name}`,
        isRead: false
    }
    let numInJob = {
        confirmed: parseInt( job.confirmed),
        total: parseInt(job.total)
    }
    console.log(applyForList);
    return (
        <Container maxWidth='lg'>
            <div className="job-management whole-page-container">
                <Sidebar active={1} role="employer" />
                <div className = "job-management__item central-collumn">
                    <h1 className = "job-heading central-page-header">Danh sách đơn</h1>
                    {/* Wating list---------------------------------- */}
                    <div>
                        <h3 className = "list__name">
                            Đơn đang chờ
                        </h3>
                        {   // eslint-disable-next-line array-callback-return
                            applyForList.map(function(applyFor){
                                if (applyFor["job-id"] === job._id && applyFor.status === 'Đang đợi'){
                                    var freelancer = freelancerList.find(function(freelancer){
                                        return applyFor['freelancer-id'] === freelancer._id;
                                    });
                                    return(
                                        <div key = {applyFor._id+'ddc'}  className = "item-container item-container">
                                            <p key = {applyFor._id+'ddc1'} className = "item__name">{freelancer.name}</p>
                                            <p key = {applyFor._id+'ddc2'} className = "item__field item-content">{freelancer['about-me']}</p>
                                            <p key = {applyFor._id+'ddc3'} className= "item__field item__field--name">{freelancer.address}</p>
                                            <p key = {applyFor._id+'ddc4'} className = "item__button">
                                                <DeleteButton
                                                    name = "Xóa bỏ"
                                                    onClick = {()=> {
                                                        let confirm = window.confirm('Từ chối người làm?');
                                                        if(confirm){
                                                            applyFor.status = 'Hủy'
                                                            notification.message = `Bạn bị từ chối khỏi công việc ${job.name}`
                                                            applyFor.notifications.push(notification);
                                                            PostDataJob(job);
                                                            PostDataApply(applyFor);
                                                        }

                                                    }}
                                                    link = {'/job-management/job' + job._id} 
                                                />
                                                <AccessButton
                                                    key = {applyFor._id + 'x'}
                                                    name = "Xác nhận"
                                                    onClick = {()=> {
                                                        let confirm = window.confirm('Nhận người làm?');
                                                        if(confirm){
                                                            if (numInJob.confirmed >= numInJob.total){
                                                                alert("Công việc này đã đủ người");
                                                            }
                                                            else {
                                                                applyFor.status = 'Đang làm'
                                                                applyFor.notifications.push(notification);
                                                                PostDataJob(job);
                                                                PostDataApply(applyFor);
                                                            }
                                                        }

                                                    }}
                                                    link = {'/job-management/job' + job._id} 
                                                />
                                                <AccessButton
                                                    key = {applyFor._id + 'c'}
                                                    name = "Chi tiết"
                                                    link = {"/profiles/freelancer/" + freelancer._id }
                                                />
                                            </p>
                                        </div>
                                    )
                                }
                            })
                        }         
                    </div>
                    {/* Accepted list ---------------------------------------------*/}
                    <div >
                        <h3 className = "list__name">
                            Đơn đã nhận
                        </h3>
                        {   // eslint-disable-next-line array-callback-return
                            applyForList.map(function(applyFor){
                                if (applyFor["job-id"] === job._id && applyFor.status === 'Đang làm'){
                                    var freelancer = freelancerList.find(function(freelancer){
                                        return applyFor['freelancer-id'] === freelancer._id;
                                    });
                                    return(
                                        <div key = {applyFor._id+'ddn'} className = "item-container item-container--accepted">
                                            <p key = {applyFor._id+'ddn1'} className = "item__name">{freelancer.name}</p>
                                            <p key = {applyFor._id+'ddn2'} className = "item__field item-content">{freelancer['about-me']}</p>
                                            <p key = {applyFor._id+'ddn3'} className= "item__field item__field--name">{freelancer.address}</p>
                                            <p key = {applyFor._id+'ddn4'} className = "item__button">
                                                <AccessButton
                                                    key = {applyFor._id}
                                                    name = "Chi tiết"
                                                    link = {"/profiles/freelancer/" + freelancer._id }
                                                />
                                            </p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className = "job-management__footer">
                    <CornerFooter/>
                </div>
            </div>
        </Container>
    );
}

function PostDataApply(apply){
    var fetchData = async()=>{
        await setDoc(doc(db, "apply_for",apply._id), apply);  
    } 
    fetchData();
}

function PostDataJob(job){
    var fetchData = async()=>{
        await setDoc(doc(db, "job",job._id), job);  
    } 
    job.confirmed = (Number(job.confirmed)+1).toString();
    fetchData();
}