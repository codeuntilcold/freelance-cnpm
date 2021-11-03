// import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from './components/Feed/index'
import CornerFooter from '../../components/CornerFooter/index'
import './index.css'

export default function Myjobs() {
    return (
        <Container maxWidth='lg'>
            <div className='whole-page-container'>

                <Sidebar active={0} role="freelancer"/>

                <Feed />

                <div className="right-collumn">
                    <CornerFooter />
                </div>

            </div>
        </Container>
    )
}