import './index.css'
import PageHeader from '../../../../components/PageHeader/PageHeader'
import JobDetail from './JobDetail'
import Summary from './Summary'
import Job from './Job';

function Feed({ content, employer, applyList, setRender }) {

	return (
		<div className='central-collumn'>

			<PageHeader title='Chi tiết công việc' />

            <Job job={content} employer={employer} applyList={applyList} setRender={setRender} />

			<Summary job={content} />

			<JobDetail job={content} />
	
		</div>
	)
}

export default Feed