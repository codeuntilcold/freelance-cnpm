import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

function SearchBox() {
  const [filter, setFilter] = useState("");

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div className="job-search">
      <form action="" className="job-search__input">
        <BusinessCenterIcon />
        <input
          type="text"
          placeholder="Tìm kiếm công việc theo tên, kỹ năng, danh mục,..."
        />
      </form>

      <span>
        Sắp xếp theo:
        <Select label='Bộ lọc' value={filter} onChange={handleFilterChange} sx={{ 'ml': '5px' }}>
          <MenuItem value="date">Mới được đăng</MenuItem>
          <MenuItem value="location">Gần tôi nhất</MenuItem>
          <MenuItem value="best">Phù hợp nhất</MenuItem>
        </Select>
      </span>
    </div>
  );
}

export default SearchBox;
