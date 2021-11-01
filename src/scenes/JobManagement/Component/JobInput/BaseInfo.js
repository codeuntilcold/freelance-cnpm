
export default function BaseInfo(props){
    return (  
        <div className= 'item-container'>
        <p className = "item__name">Thông tin tuyển dụng</p>
        <InputBox
            name = "Mức lương"
            type = 'number'
            value = {props.salary}
        />
        <InputBox
            name = "Số lượng cần tuyển"
            type = 'number'
            value = {props.need}
        />
        <InputBox
            name = "Yêu cầu kinh nghiệm"
            type = 'text'
            value = {props.experience}
        />
        <InputBox
            name = "Yêu cầu giới tính"
            type = 'text'
            value = {props.sex} 
        />
        <InputBox
            name = "Địa điểm làm việc"
            type = 'text'
            value = {props.address}
        />
        <InputBox
            name = "Hạn chót hồ sơ"
            type = 'date'
            // value = "2021-06-01"
            value = {props.deadline}
        />
    </div>
    )
}

function InputBox(props){
    return (     
        <p className="item-input">
            <span className = "item__field">{props.name}</span>
            <input type = {props.type} className = "item-input__box" required value = {props.value}/>
        </p>
    )
}