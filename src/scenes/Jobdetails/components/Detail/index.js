import './index.css'
import JobDetail from './JobDetail'
import Summary from './Summary'

function Feed() {
	return (
		<div className='feed'>
			
			{/* Header */}
			<div className="feed-header">
				<h1>Chi tiết công việc</h1>
			</div>

			{/* Summary */}
			<Summary />

			{/* Job */}
			<JobDetail />
	
		</div>
	)
}

export default Feed



