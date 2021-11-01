import { useState } from "react"

function NotiItem({ content }) {

    const [ read, setRead ] = useState(false)

    const toggleRead = () => {
        setRead(true)
    }

    return (
        <div className={`noti-item ${read && 'noti-item-read'} `} onClick={toggleRead}>
            {/* {content} */}
            <p>
                {content}
            </p>
        </div>
    )
}

export default NotiItem
