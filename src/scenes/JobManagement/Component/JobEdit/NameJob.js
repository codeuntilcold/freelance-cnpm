export default function NameJob({job}){
    return (
        <div className= 'item-container'>
            <p className="item-input">
                <span className = "item__name">Tên công việc</span>
                <input type = "text" className = "item-input__box" required defaultValue = {job.name}/>
            </p>
        </div>
    )
}