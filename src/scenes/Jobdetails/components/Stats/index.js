import React from 'react';
import './index.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Sidebar() {
    return (
        <div className="stats">
            <div className="company">
                <div className="section">
                    <p>Tên doanh nghiệp</p>
                </div>
                <div><button>Về chúng tôi</button></div>
            </div>

            <div className="job">
                <div className="section">
                    <p>Tên công việc</p>
                </div>
                <div><p>Hạn chót nộp hồ sơ: DD/MM/YYYY</p></div>
                <div><button className="apply">Ứng tuyển ngay</button></div>
                <div className="divider"></div>
                <div><button>Lưu tin</button></div>
            </div>

            {/* Footer */}
        </div>
    );
}

export default Sidebar;