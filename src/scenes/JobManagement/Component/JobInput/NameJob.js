export default function NameJob(props){
    return (
        <div className= 'item-container'>
        <InputName value = {props.name}/>
        </div>
    )
}

function InputName(props){
    return (     
        <p className="item-input">
            <span className = "item__name">Tên công việc</span>
            <input type = "text" className = "item-input__box" required value = {props.value}/>
        </p>
    )
}