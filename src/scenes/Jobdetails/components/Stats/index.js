import React from 'react';
import './index.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="company">
                <div><p>Tên doanh nghiệp</p></div>
                <div><button>About us</button></div>
            </div>

            <div className="job">
                <div><p>Tên công việc</p></div>
                <div><button>Ứng tuyển</button></div>
                <div><button>Lưu tin</button></div>
            </div>

            {/* Footer */}
        </div>
    );
}

export default Sidebar;