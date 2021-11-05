import './index.css'
import AccessButton from '../../../../components/button/AccessButton'

function AcceptedList({job, freelancerList, applyForList}){ 
    return (
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
    )
}

export default AcceptedList;