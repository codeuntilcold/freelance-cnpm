export default function DetailInfo(){
    return(
        <div>
            <div className= 'item-container'>
                <p className = "item__name">Thông tin chi tiết</p>
                <InputLine
                    name = "Mô tả công việc"
                />
                <InputLine
                    name = "Yêu cầu ừng viên"
                />
                <InputLine
                    name = "Quyền lợi"
                />
            </div>
            
        </div>
    )
}

function InputLine(props){
    return (
        <div className="item-input">
            <p className = "item__field">{props.name}</p>
            <div class="item-input__line" contentEditable></div>
        </div>
    )
}