

function JobCard({ content }) {
    return (
        <div className='job-card'>
            <h1>{content.title}</h1>
            <p>
                {content.description}
            </p>
        </div>
    )
}

export default JobCard
