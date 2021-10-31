import NotiItem from "./NotiItem"
import Card from '@mui/material/Card'
import JCard from "../../components/JCard";
import Chip from '@mui/material/Chip';

function Item({content}) {
    return (
        
        <Card
            elevation={4}
            sx={{ 
                minHeight:'70px', 
                fontSize:'var(--text-h2)', 
                borderRadius:'20px',
                padding:'10px 20px',
                mb:'35px'
            }}
        >
            {content}
        </Card>
    )
}

function NotiList() {

    const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quis?'

    const markAll = () => {
        alert('Mark all')
    }

    return (
        <div className="central-collumn">

            <div className="central-page-header noti-header">
                <h1>Thông báo</h1>
                <Chip 
                    label='Đánh dấu tất cả là đã đọc'
                    onClick={markAll}
                />
            </div>

            

            <Card
                elevation={4}
                sx={{ 
                    minHeight:'70px', 
                    fontSize:'var(--text-h2)', 
                    borderRadius:'20px',
                    padding:'10px 20px',
                    mb:'35px',
                    cursor:'pointer'
                }}
            >
                {content}
            </Card>

            <JCard>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A animi voluptas quod blanditiis excepturi tempora officiis hic. Voluptatibus, vitae, perspiciatis necessitatibus quam quia numquam perferendis, non ab ipsa quos modi.
            </JCard>

            <NotiItem content={content}/>
            <NotiItem content={content}/>
            <NotiItem content={content}/>
            <NotiItem content={content}/>
            <NotiItem content={content}/>
            <NotiItem content={content}/>
            
        </div>
    )
}

export default NotiList
