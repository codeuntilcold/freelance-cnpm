function Detail({ text, content}) {
    return (
        <span>
            <h3 className="title-detail">{text}</h3>
            {content}<br></br>
            <br></br>
        </span>
    )
}

function JobDetail({ content }) {
    return (
        <div className='detail'>
            <Detail text="MÔ TẢ CÔNG VIỆC" content={content.description} />
            <Detail text="YÊU CẦU CÔNG VIỆC" content={content.requirement} />
            <Detail text="QUYỀN LỢI ĐƯỢC HƯỞNG" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam impedit praesentium quod voluptates cumque, odio, rerum maiores quo similique voluptatem veniam nobis aut ad ex nesciunt ullam eveniet fuga ea." />
        </div>
    )
}

export default JobDetail
