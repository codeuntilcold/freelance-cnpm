
export default function BaseInfo({job}){
    return (  
        <div className= 'item-container'>
        <p className = "item__name">Thông tin tuyển dụng</p>
        <p className="item-input">
            <span className = "item__field">Mức lương</span>
            <input type = 'number' className = "item-input__box" required defaultValue = {job.salary}/>
        </p>
        <p className="item-input">
            <span className = "item__field">Số lượng cần tuyển</span>
            <input type = 'number' className = "item-input__box" required defaultValue = {job.total}/>
        </p>
        <p className="item-input">
            <span className = "item__field">Yêu cầu kinh nghiệm</span>
            <input type = 'text' className = "item-input__box" required defaultValue = {job.experience}/>
        </p>
        <p className="item-input">
            <span className = "item__field">Yêu cầu giới tính</span>
            <input type = 'text' className = "item-input__box" required defaultValue = {job.sex}/>
        </p>
        <p className="item-input">
            <span className = "item__field">Địa điểm làm việc</span>
            <input type = 'text' className = "item-input__box" required defaultValue = {job.address}/>
        </p>
        <p className="item-input">
            <span className = "item__field">Hạn chót hồ sơ</span>
            <input type = 'date' className = "item-input__box" required defaultValue = {job.deadline}/>
        </p>
    </div>
    )
}
