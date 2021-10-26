import './index.css'
import JobDetail from './JobDetail'

function Feed() {
	return (
		<div className='feed'>
			
			{/* Header */}
			<div className="feed-header">
				<h1>Chi tiết công việc</h1>
			</div>

			{/* Job */}
			<JobDetail />
	
		</div>
	)
}

export default Feed



