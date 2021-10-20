import './index.css'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function SearchBox() {
    return (
        <div className='job-search'>
            <form action="" className="job-search__input">
                <BusinessCenterIcon />
                <input type="text" placeholder='Tìm việc theo từ khoá,...'/>
            </form>

            <span>Sắp xếp theo: Ngày</span>
        </div>
    )
}

export default SearchBox
