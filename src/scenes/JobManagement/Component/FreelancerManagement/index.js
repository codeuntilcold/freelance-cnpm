import CornerFooter from '../../../../components/CornerFooter'
import AccessButton from '../../../../components/button/AccessButton'
import './index.css'


import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';

export default function FreelancerList({job, freelancerList, applyForList}){
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
                        {
                            applyForList.map(function(applyFor){
                                if (applyFor["job-id"] == job._id && applyFor.status == 'Dang doi'){
                                    var freelancer = freelancerList.find(function(freelancer){
                                        return applyFor['freelancer-id'] == freelancer._id;
                                    });
                                    return(
                                        <div className = "item-container item-container">
                                            <p className = "item__name">{freelancer.name}</p>
                                            <p className = "item__field item-content">{freelancer['about-me']}</p>
                                            <p className= "item__field item__field--name">{freelancer.address}</p>
                                            <p className = "item__button">
                                                <AccessButton
                                                    key = {applyFor._id + 'x'}
                                                    name = "Xác nhận"
                                                    onClick = {()=> applyFor.status = 'Xac nhan'}
                                                    link = {'/job-management/job' + job._id} 
                                                />
                                                <AccessButton
                                                    key = {applyFor._id + 'c'}
                                                    name = "Chi tiết"
                                                    link = "/profile"
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
                        {
                            applyForList.map(function(applyFor){
                                if (applyFor["job-id"] == job._id && applyFor.status == 'Xac nhan'){
                                    var freelancer = freelancerList.find(function(freelancer){
                                        return applyFor['freelancer-id'] == freelancer._id;
                                    });
                                    return(
                                        <div className = "item-container item-container--accepted">
                                            <p className = "item__name">{freelancer.name}</p>
                                            <p className = "item__field item-content">{freelancer['about-me']}</p>
                                            <p className= "item__field item__field--name">{freelancer.address}</p>
                                            <p className = "item__button">
                                                <AccessButton
                                                    key = {applyFor._id}
                                                    name = "Chi tiết"
                                                    link = "/profile"
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