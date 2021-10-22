export default function NameJob(){
    return (
        <div className= 'item-container'>
        <InputName/>
        </div>
    )
}

function InputName(){
    return (     
            <p className="item-input">
                <span className = "item__name">Tên công việc</span>
                <input type = "text" className = "item-input__box"></input>
            </p>
    )
}