import WaitingItem from './WaitingItem';
import './index.css'

import freelancerList from '../data/freelancer';
import applyForList from '../data/applyFor';
import FreelancerList from '.';

function WaitingList(props){
    return (
        <div>
            <h3 className = "list__name">
                Đơn đang chờ
            </h3>
            {
                applyForList.map(function(applyFor){
                    if (applyFor['job-id'] == props.jobId && applyFor.status == 'Dang doi'){
                        var freelancer = freelancerList.find(function(freelancer){
                            return applyFor['freelancer-id'] == freelancer._id;
                        });
                        return(
                            <WaitingItem
                                key = {applyFor._id}
                                name = {freelancer.name}
                                address = {freelancer.address}
                                aboutMe = {freelancer['about-me']}
                            />
                        )
                    }
                })
            }         
        </div>
    )
}

export default WaitingList;