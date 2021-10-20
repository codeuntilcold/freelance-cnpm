// import { Link } from 'react-router-dom';
// import Container from '@mui/material/Container';
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from './components/Feed/index'
import Stats from './components/Stats/index'
import './index.css'
export default function Profile() {
    return (
        <div className="jobsfeed">
            <Sidebar/>
            
            <Feed />

            <Stats />

            {/* <Footer /> */}

        </div>
    )
}