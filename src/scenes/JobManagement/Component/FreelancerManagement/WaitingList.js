import WaitingItem from './WaitingItem';
import './index.css'

import freelancerList from '../data/freelancer';

function WaitingList(props){
    return (
        <div>
            <h3 className = "list__name">
                Đơn đang chờ
            </h3>
            {
                freelancerList.map(function(freelancer){
                    if (freelancer.jodId == props.jobId && freelancer.accepted == false)
                        return (
                            <WaitingItem
                                name = {freelancer.name}
                                job = {freelancer.job}
                                info = {freelancer.detail}
                            />
                        );
                })
            }         
        </div>
    )
}

export default WaitingList;