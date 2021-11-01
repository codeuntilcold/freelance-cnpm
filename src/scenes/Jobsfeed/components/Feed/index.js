import PageHeader from '../../../../components/PageHeader/PageHeader'
import SearchBox from './SearchBox'
import JobCard from './JobCard'
import { useState } from 'react' 
import './index.css'

function Feed() {

	const [ jobs, setJobs ] = useState(
		[
			{
				title: "Lau dọn phân xưởng",
				salary: "20.000đ/h",
				target: "15/20",
				prerequisite: "Không",
				sex: "Nam/Nữ",
				location: "TP.HCM",
				description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam impedit praesentium quod voluptates cumque, odio, rerum maiores quo similique voluptatem veniam nobis aut ad ex nesciunt ullam eveniet fuga ea.",
				requirement: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
				deadline: "DD/MM/YYYY"
			},
			{
				title: "Lau dọn phân xưởng",
				salary: "20.000đ/h",
				target: "15/20",
				prerequisite: "Không",
				sex: "Nam/Nữ",
				location: "TP.HCM",
				description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam impedit praesentium quod voluptates cumque, odio, rerum maiores quo similique voluptatem veniam nobis aut ad ex nesciunt ullam eveniet fuga ea.",
				requirement: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
				deadline: "DD/MM/YYYY"
			},
			{
				title: "Lau dọn phân xưởng",
				salary: "20.000đ/h",
				target: "15/20",
				prerequisite: "Không",
				sex: "Nam/Nữ",
				location: "TP.HCM",
				description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam impedit praesentium quod voluptates cumque, odio, rerum maiores quo similique voluptatem veniam nobis aut ad ex nesciunt ullam eveniet fuga ea.",
				requirement: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
				deadline: "DD/MM/YYYY"
			},
			{
				title: "Lau dọn phân xưởng",
				salary: "20.000đ/h",
				target: "15/20",
				prerequisite: "Không",
				sex: "Nam/Nữ",
				location: "TP.HCM",
				description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam impedit praesentium quod voluptates cumque, odio, rerum maiores quo similique voluptatem veniam nobis aut ad ex nesciunt ullam eveniet fuga ea.",
				requirement: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
				deadline: "DD/MM/YYYY"
			}

		]
	)

	return (
		<div className='central-collumn'>
			
			{/* Header */}
			<PageHeader title='Tìm việc'/>

			{/* Search box */}
			<SearchBox />

			{/* Job */}
			{ jobs.map(job => 
				<JobCard content={job} />)
			}
			
			
		</div>
	)
}

export default Feed



