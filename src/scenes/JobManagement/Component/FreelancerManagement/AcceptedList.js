
import AcceptedItem from './AcceptedItem';
import './index.css'
import freelancerList from '../data/freelancer';
import applyForList from '../data/applyFor';

function AcceptedList(props){
    return (
        <div >
            <h3 className = "list__name">
                Đơn đã nhận
            </h3>
            {
                applyForList.map(function(applyFor){
                    if (applyFor['job-id'] == props.jobId && applyFor.status == 'Xac nhan'){
                        var freelancer = freelancerList.find(function(freelancer){
                            return applyFor['freelancer-id'] == freelancer._id;
                        });
                        return(
                            <AcceptedItem
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

export default AcceptedList;