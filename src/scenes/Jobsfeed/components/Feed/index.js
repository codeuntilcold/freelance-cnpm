import SearchBox from './SearchBox'
import JobCard from './JobCard'
import { useState } from 'react' 
import './index.css'

function Feed() {

	const [ job, setJob ] = useState({
		title: "Tên công việc",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam impedit praesentium quod voluptates cumque, odio, rerum maiores quo similique voluptatem veniam nobis aut ad ex nesciunt ullam eveniet fuga ea."
	})

	return (
		<div className='feed'>
			{/* Header */}
			<div className="feed-header">
				<h1>Tìm việc</h1>
			</div>

			{/* Search box */}
			<SearchBox />

			{/* Job */}
			<JobCard content={job}/>
			<JobCard content={job}/>
			<JobCard content={job}/>
			<JobCard content={job}/>
			<JobCard content={job}/>
			
		</div>
	)
}

export default Feed



