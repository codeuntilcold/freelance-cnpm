import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import './index.css'
import Sidebar from '../../components/Sidebar/Sidebar';


import JobList from './Component/JobList';
import FreelancerList from './Component/FreelancerManagement';
import JobInput from './Component/JobInput'

export default function Jobmanagerment() {
    return (
        <JobList/>
    );
        
}

