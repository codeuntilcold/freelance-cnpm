import PageHeader from "../../../../components/PageHeader/PageHeader";
import SearchBox from "./SearchBox";
import JobCard from "./JobCard";
import "./index.css";

function Feed() {
  const jobs = [
    {
      title: "Lau dọn phân xưởng",
      salary: "20.000đ/h",
      target: "15/20",
      prerequisite: "Không",
      sex: "Nam/Nữ",
      location: "TP.HCM",
      description:
        "Xưởng đóng cửa lâu ngày, cần người lên phụ dọn dẹp để mở cửa trở lại.",
      requirement:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
      deadline: "DD/MM/YYYY",
    },
    {
      title: "Tuyển nhân viên phục vụ Joyleebia",
      salary: "20.000đ/h",
      target: "15/20",
      prerequisite: "Không",
      sex: "Nam/Nữ",
      location: "TP.HCM",
      description:
        "Joyleebia là công ty đã tạo nên cuộc cách mạng thức ăn nhanh tại Philippines.",
      requirement:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
      deadline: "DD/MM/YYYY",
    },
    {
      title: "Bán hàng ca đêm tại Femily Mart",
      salary: "20.000đ/h",
      target: "15/20",
      prerequisite: "Không",
      sex: "Nam/Nữ",
      location: "TP.HCM",
      description:
        "Ứng viên nộp hồ sơ online trước qua mail recruitment@famima.vn hoặc qua Viecmoi.net",
      requirement:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
      deadline: "DD/MM/YYYY",
    },
    {
      title: "Cần bán ve chai",
      salary: "20.000đ",
      target: "15/20",
      prerequisite: "Không",
      sex: "Nam/Nữ",
      location: "TP.HCM",
      description:
        "Nhà đang dư 20 ký ve chai cần bán gấp. Ai có thể mua thì liên hệ.",
      requirement:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, dolor?",
      deadline: "DD/MM/YYYY",
    },
  ];

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
