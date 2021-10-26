import React from 'react';
import './index.css';

function Sidebar() {
    return (
        <div className="stats">
            <div className="company">
                <div className="section">
                    <p>Tên doanh nghiệp</p>
                </div>
                <div><button>About us</button></div>
            </div>

            <div className="job">
                <div className="section">
                    <p>Tên công việc</p>
                </div>
                <div><button>Ứng tuyển</button></div>
                <div><button>Lưu tin</button></div>
            </div>

            {/* Footer */}
        </div>
    );
}

export default Sidebar;