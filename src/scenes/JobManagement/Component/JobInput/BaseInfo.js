
export default function BaseInfo(){
    return (  
        <div className= 'item-container'>
        <p className = "item__name">Thông tin tuyển dụng</p>
        <InputBox
            name = "Mức lương"
            type = 'number'
        />
        <InputBox
            name = "Số lượng cần tuyển"
            type = 'number'
        />
        <InputBox
            name = "Yêu cầu kinh nghiệm"
            type = 'text'
        />
        <InputBox
            name = "Yêu cầu giới tính"
            type = 'text'
        />
        <InputBox
            name = "Địa điểm làm việc"
            type = 'text'
        />
        <InputBox
            name = "Hạn chót hồ sơ"
            type = 'date'
        />
    </div>
    )
}

function InputBox(props){
    return (     
        <p className="item-input">
            <span className = "item__field">{props.name}</span>
            <input type = {props.type} className = "item-input__box" required></input>
        </p>
    )
}