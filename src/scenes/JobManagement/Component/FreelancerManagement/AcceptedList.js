
import AcceptedItem from './AcceptedItem';
import './index.css'

function AcceptedList(){
    return (
        <div >
            <h3 className = "list__name">
                Đã nhận
            </h3>
            <AcceptedItem
                name= "Nguyễn Văn A"
                description = "Lập trình viên"
            />
            <AcceptedItem
                name= "Lê Văn C"
                description = "Lập trình viên"
            />
        </div>
    )
}

export default AcceptedList;