# Viecmoi.net

Repo for web-app assignment of Software Engineering Project!!

---

# Packages

## ~~Material-ui~~ MUI

~~Material-ui~~ Từ giờ mình chuyển qua xài MUI, là 1 module Phước install thêm để hỗ trợ việc style, nếu mọi người thấy không cần thiết thì không cần dùng.

---

# Source Organization

## Scenes

Như hôm bữa nhóm đã thống nhất, các page sẽ được xem như là 1 scene riêng và được để trong folder scenes, hôm bữa P cấu trúc sai, nay đã sửa lại, mọi người des phần trang của mình bên trong scene nhé
Các file liên quan như css, services,... cũng sẽ được để trong folder của scene mình đang làm

## Components

Folder này sẽ bao gồm các components chung mà các scene có thể sử dụng

---

## Updates
23-10: Dũng hot-fix code của Hạ để chạy được

30/11: Thêm một style chung trong file `src/index.css`. Mọi người chỉ cần thêm các class này vào các `<div>` chứ không cần import (xem ví dụ tại scene Jobsfeed)

- `whole-page-container`: là class dùng trong các file `scenes/<...>/index.js`, dùng để bao bọc 3 collumn lại, giấu đi những phần thừa khi cuộn.
- `central-collumn`: là class cho các component ở giữa trang, có `flex = 0.7`, dùng để cuộn khi nội dung dài.
- `central-page-header`: là class cho phần header ở giữa trang (chỉ áp dụng cho `<div>` chứa thẻ `<h1>`). Có thể dùng component `PageHeader` thay cho class này.

