
export default function BaseInfo(){
    return (  
        <div className= 'item-container'>
        <p className = "item__name">Thông tin tuyển dụng</p>
        <InputBox
            name = "Mức lương"
        />
        <InputBox
            name = "Số lượng cần tuyển"
        />
        <InputBox
            name = "Yêu cầu kinh nghiệm"
        />
        <InputBox
            name = "Yêu cầu giới tính"
        />
        <InputBox
            name = "Địa điểm làm việc"
        />
        <InputBox
            name = "Hạn chót hồ sơ"
        />
    </div>
    )
}

function InputBox(props){
    return (     
        <p className="item-input">
            <span className = "item__field">{props.name}</span>
            <input type = "text" className = "item-input__box"></input>
        </p>
    )
}