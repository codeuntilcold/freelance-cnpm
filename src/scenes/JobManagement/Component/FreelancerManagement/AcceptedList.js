
import AcceptedItem from './AcceptedItem';
import './index.css'
import freelancerList from '../data/freelancer';

function AcceptedList(props){
    return (
        <div >
            <h3 className = "list__name">
                Đã nhận
            </h3>
            {
                freelancerList.map(function(freelancer){
                    if (freelancer.jodId == props.jobId && freelancer.accepted == true)
                        return (
                            <AcceptedItem
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

export default AcceptedList;