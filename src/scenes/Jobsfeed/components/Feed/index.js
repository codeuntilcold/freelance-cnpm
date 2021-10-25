import SearchBox from './SearchBox'
import JobCard from './JobCard'
import { useState } from 'react' 
import './index.css'

function Feed() {

	const [ jobs, setJobs ] = useState({
		title: "Lau dọn phân xưởng",
		salary: "20.000đ/h",
		target: "15/20",
		prerequisite: "Không",
		sex: "Nam/Nữ",
		location: "TP.HCM",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam impedit praesentium quod voluptates cumque, odio, rerum maiores quo similique voluptatem veniam nobis aut ad ex nesciunt ullam eveniet fuga ea.",
		requirement: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
		deadline: "DD/MM/YYYY"
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
			<JobCard content={jobs} />
			
			
		</div>
	)
}

export default Feed



