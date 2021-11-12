import PageHeader from "../../../../components/PageHeader/PageHeader";
import SearchBox from "./SearchBox";
import JobCard from "./JobCard";
import "./index.css";

function Feed({ jobs }) {
//   const jobs = [
//     { 
//         "_id": "j1",
//         "createdAt": "04/11/2021",

//         "name": "Phục vụ bàn",
//         "address": "35 CMT8, quận 3, TP.HCM",
//         "employer-id": "em1",

//         "description": "Tư vấn và ghi món ăn khi có khách đến, báo cho thu ngân.",
//         "deadline": "15/11/2021",
//         "start-date": "20/11/2021",
//         "end-date": "20/1/2022",
//         "salary": "23000",

//         "total": "5",
//         "confirmed": "0",

//         "experience": "đã từng làm công việc này trước đó",
//         "sex": "cả hai",
//         "requirement": "bề ngoài ưa nhìn, ăn nói tốt, hiểu rõ các món ăn của nhà hàng.",
//         "benefit": "nghỉ 3 ngày trong tháng"
//     },
//     { 
//         "_id": "j2",
//         "createdAt": "05/11/2021",

//         "name": "Rửa chén",
//         "address": "35 CMT8, quận 3, TP.HCM",
//         "employer-id": "em1",

//         "description": "Rửa bát đũa ở phía sau bếp",
//         "deadline": "16/11/2021",
//         "start-date": "22/11/2021",
//         "end-date": "22/3/2022",
//         "salary": "20000",

//         "total": "3",
//         "confirmed": "1",

//         "experience": "none",
//         "sex": "cả hai",
//         "requirement": "cẩn thận và kĩ càng",
//         "benefit": "mỗi tháng được thêm 2 ngày lương"
//     },
//     { 
//         "_id": "j3",
//         "createdAt": "03/11/2021",

//         "name": "Bảo vệ",
//         "address": "35 CMT8, quận 3, TP.HCM",
//         "employer-id": "em1",

//         "description": "Trông giữ xe và bảo vệ nhà hàng.",
//         "deadline": "17/11/2021",
//         "start-date": "22/11/2021",
//         "end-date": "22/1/2022",
//         "salary": "29000",

//         "total": "2",
//         "confirmed": "0",

//         "experience": "đã từng làm công việc này trước đó",
//         "sex": "nam",
//         "requirement": "có sức khỏe tốt, ngoại hình lực lưỡng",
//         "benefit": "suất ăn trưa miễn phí tại nhà hàng"
//     },
//     { 
//         "_id": "j4",
//         "createdAt": "05/11/2021",

//         "name": "Phụ bếp",
//         "address": "35 CMT8, quận 3, TP.HCM",
//         "employer-id": "em1",

//         "description": "Chuẩn bị nguyên liệu cho đầu bếp, nấu các món đơn giản.",
//         "deadline": "15/11/2021",
//         "start-date": "20/11/2021",
//         "end-date": "20/1/2022",
//         "salary": "25000",

//         "total": "4",
//         "confirmed": "0",

//         "experience": "đã từng nấu ăn",
//         "sex": "cả hai",
//         "requirement": "nhanh nhẹn nhưng cẩn thận, biết nấu các món cơ bản",
//         "benefit": "nghỉ 2 ngày trong tháng"
//     },
//     { 
//         "_id": "j5",
//         "createdAt": "07/11/2021",

//         "name": "Quét dọn",
//         "address": "35 CMT8, quận 3, TP.HCM",
//         "employer-id": "em1",

//         "description": "Lau dọn bàn và quét dọn sàn nhà, lau cửa kính.",
//         "deadline": "15/11/2021",
//         "start-date": "25/11/2021",
//         "end-date": "25/2/2022",
//         "salary": "23000",

//         "total": "4",
//         "confirmed": "0",

//         "experience": "none",
//         "sex": "cả hai",
//         "requirement": "sức khỏe ổn định, cẩn thận và tỉ mỉ",
//         "benefit": "có thưởng cuối tháng"
//     }
// ]
  // [
  //   {
  //     title: "Lau dọn phân xưởng",
  //     salary: "20.000đ/h",
  //     target: "15/20",
  //     prerequisite: "Không",
  //     sex: "Nam/Nữ",
  //     location: "TP.HCM",
  //     description:
  //       "Xưởng đóng cửa lâu ngày, cần người lên phụ dọn dẹp để mở cửa trở lại.",
  //     requirement:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
  //     deadline: "DD/MM/YYYY",
  //   },
  //   {
  //     title: "Tuyển nhân viên phục vụ Joyleebia",
  //     salary: "20.000đ/h",
  //     target: "15/20",
  //     prerequisite: "Không",
  //     sex: "Nam/Nữ",
  //     location: "TP.HCM",
  //     description:
  //       "Joyleebia là công ty đã tạo nên cuộc cách mạng thức ăn nhanh tại Philippines.",
  //     requirement:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
  //     deadline: "DD/MM/YYYY",
  //   },
  //   {
  //     title: "Bán hàng ca đêm tại Femily Mart",
  //     salary: "20.000đ/h",
  //     target: "15/20",
  //     prerequisite: "Không",
  //     sex: "Nam/Nữ",
  //     location: "TP.HCM",
  //     description:
  //       "Ứng viên nộp hồ sơ online trước qua mail recruitment@famima.vn hoặc qua Viecmoi.net",
  //     requirement:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
  //     deadline: "DD/MM/YYYY",
  //   },
  //   {
  //     title: "Cần bán ve chai",
  //     salary: "20.000đ",
  //     target: "15/20",
  //     prerequisite: "Không",
  //     sex: "Nam/Nữ",
  //     location: "TP.HCM",
  //     description:
  //       "Nhà đang dư 20 ký ve chai cần bán gấp. Ai có thể mua thì liên hệ.",
  //     requirement:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
  //     deadline: "DD/MM/YYYY",
  //   },
  // ];

  return (
    <div className="central-collumn">
      {/* Header */}
      <PageHeader title="Tìm việc" />

      {/* Search box */}
      <SearchBox />

      {/* Job */}
      {jobs.map((job) => (
        <JobCard content={job} />
      ))}
    </div>
  );
}

export default Feed;
