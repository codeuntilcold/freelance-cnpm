import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

export default function Home() {
    return (
        <div className="home">
            <Header/>
            <Content/>
            <Footer/>
            {/* <Container maxWidth="xs" >
                <h1>This is the home page</h1>
                <h2>It is in the scenes/Home folder</h2>
                <Link to='/'>Back to index</Link>
            </Container> */}
        </div>
    )
}