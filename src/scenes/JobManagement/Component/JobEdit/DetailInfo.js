export default function DetailInfo({job}){
    return(
        <div>
            <div className= 'item-container'>
                <p className = "item__name">Thông tin chi tiết</p>
                <div className="item-input">
                    <p className = "item__field">Mô tả công việc</p>
                    <div class="item-input__line" contentEditable>{job.description}</div>
                </div>
                <div className="item-input">
                    <p className = "item__field">Yêu cầu ừng viên</p>
                    <div class="item-input__line" contentEditable>{job.requirement}</div>
                </div>
                <div className="item-input">
                    <p className = "item__field">Quyền lợi</p>
                    <div class="item-input__line" contentEditable>{job.benefit}</div>
                </div>
            </div>           
        </div>
    )
}
