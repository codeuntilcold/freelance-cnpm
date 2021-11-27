function Detail({ text, content}) {
    return (
        <span>
            <h3 className="title-detail">{text}</h3>
            {content}<br></br>
            <br></br>
        </span>
    )
}

function JobDetail({ job }) {
    return (
        <div className='detail'>
            <Detail text="MÔ TẢ CÔNG VIỆC" content={job.description} />
            <Detail text="YÊU CẦU CÔNG VIỆC" content={job.requirement} />
            <Detail text="QUYỀN LỢI ĐƯỢC HƯỞNG" content={job.benefit} />
        </div>
    )
}

export default JobDetail
