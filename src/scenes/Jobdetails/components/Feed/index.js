import './index.css'
import PageHeader from '../../../../components/PageHeader/PageHeader'
import JobDetail from './JobDetail'
import Summary from './Summary'
import Job from './Job';

function Feed({ job }) {

	return (
		<div className='central-collumn'>

			<PageHeader title='Chi tiết công việc' />

            <Job job={job} />

			<Summary job={job} />

			<JobDetail job={job} />
	
		</div>
	)
}

export default Feed