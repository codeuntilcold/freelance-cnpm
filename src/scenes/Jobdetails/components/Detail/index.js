import './index.css'
import PageHeader from '../../../../components/PageHeader/PageHeader'
import JobDetail from './JobDetail'
import Summary from './Summary'
import Job from './Job';

function Feed({ content }) {

	return (
		<div className='central-collumn'>

			<PageHeader title='Chi tiết công việc' />

            <Job content={content} />

			<Summary content={content} />

			<JobDetail content={content} />
	
		</div>
	)
}

export default Feed