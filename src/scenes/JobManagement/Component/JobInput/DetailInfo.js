export default function DetailInfo(props){
    return(
        <div>
            <div className= 'item-container'>
                <p className = "item__name">Thông tin chi tiết</p>
                <InputLine
                    name = "Mô tả công việc"
                    value = {props.description}
                />
                <InputLine
                    name = "Yêu cầu ừng viên"
                    value = {props.requirement}
                />
                <InputLine
                    name = "Quyền lợi"
                    value = {props.benefit}
                />
            </div>
            
        </div>
    )
}

function InputLine(props){
    return (
        <div className="item-input">
            <p className = "item__field">{props.name}</p>
            <div class="item-input__line" contentEditable>{props.value}</div>
        </div>
    )
}