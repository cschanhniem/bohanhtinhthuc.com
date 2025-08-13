### ** XÂY DỰNG WEBSITE "BỘ HÀNH TỈNH THỨC"**

**[Bối cảnh & Triết lý dự án]**

"Bộ Hành Tỉnh Thức" không chỉ là một website, mà là một không gian số ghi lại một hành trình sống chậm và chiêm nghiệm. Triết lý cốt lõi của dự án là:

1.  **Hành trình thực tế:** Ghi lại cuộc bộ hành xuyên Việt với tốc độ chậm (khoảng 20km/ngày).
2.  **Sống tối giản & Biết ơn:** Thực hành ăn một bữa mỗi ngày như một phương pháp để trân quý thực tại và đồng cảm.
3.  **Kết nối chân thực:** Mục tiêu là dừng lại, lắng nghe và kể những câu chuyện chân thực về con người, văn hóa và đời sống dọc đường đi.
4.  **Chánh niệm & Tỉnh thức:** Toàn bộ hành trình là một bài thực hành thiền đi, quan sát và tìm về sự bình an, tỉnh thức trong từng khoảnh khắc.

Phong cách visual của website là **Glassmorphism (hiệu ứng kính mờ) trên nền thiên nhiên Việt Nam**, tạo cảm giác thanh khiết, hiện đại, có chiều sâu và tĩnh lặng.

**[Vai trò của bạn]**

Bạn là một Lập trình viên Full-stack chuyên nghiệp, một chuyên gia về Astro, Tailwind CSS và thiết kế web hiện đại. Bạn có gu thẩm mỹ tinh tế, hiểu sâu sắc về UI/UX và có khả năng chuyển hóa ý tưởng triết học thành một sản phẩm số hoàn chỉnh, mượt mà và tối ưu.

**[Yêu cầu tổng quan]**

Hãy xây dựng một website hoàn chỉnh cho dự án "Bộ Hành Tỉnh Thức" bằng framework Astro. Website phải đáp ứng các tiêu chí sau:

  * **Production-ready:** Mã nguồn sạch, có cấu trúc, dễ bảo trì và mở rộng.
  * **Tối ưu hiệu năng:** Tốc độ tải trang nhanh nhất có thể (đạt điểm cao trên PageSpeed Insights).
  * **Responsive hoàn hảo:** Hiển thị đẹp và hoạt động tốt trên mọi thiết bị (mobile, tablet, desktop).
  * **SEO-friendly:** Cấu trúc HTML ngữ nghĩa, tự động tạo sitemap, meta tags cho từng trang và bài viết.
  * **Chuẩn mực về Tiếp cận (Accessibility - A11y):** Đảm bảo người dùng khuyết tật có thể sử dụng được.

**[Công nghệ & Quy chuẩn]**

  * **Framework:** **Astro** (phiên bản mới nhất).
  * **Styling:** **Tailwind CSS**. Tích hợp trực tiếp vào Astro.
  * **Nội dung:** Quản lý qua các file **Markdown** (`.md`) trong thư mục `src/content/`.
  * **Code Formatting:** Sử dụng **Prettier** với plugin cho Astro và Tailwind CSS để định dạng code thống nhất.
  * **Icons:** Sử dụng thư viện **Iconify** tích hợp với Astro.
  * **Image Optimization:** Sử dụng component `<Image>` sẵn có của Astro để tối ưu hóa hình ảnh.

**[Cấu trúc thư mục & file]**

Hãy tạo ra cấu trúc thư mục rõ ràng như sau:

```
/
├── public/
│   └── assets/
│       └── logo.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   ├── GlassCard.astro
│   │   └── Button.astro
│   ├── content/
│   │   ├── hanhtrinh/
│   │   │   └── 01-ngay-dau-tien-o-dat-mui.md
│   │   └── thuchanh/
│   │       └── thien-di-la-gi.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro         (Trang chủ)
│   │   ├── gioithieu.astro     (Giới thiệu)
│   │   ├── hanhtrinh/
│   │   │   ├── index.astro     (Danh sách bài viết)
│   │   │   └── [slug].astro    (Chi tiết bài viết)
│   │   ├── thuvien.astro       (Thư viện ảnh)
│   │   ├── thuchanh.astro      (Thực hành)
│   │   └── lienhe.astro        (Liên hệ)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

**[Thiết kế chi tiết từng trang & Component]**

**1. Layout Chung (`BaseLayout.astro`)**

  * Bao gồm `Header` và `Footer`.
  * Tích hợp font chữ `Be Vietnam Pro` từ Google Fonts.
  * Nền (background) của trang là một ảnh thiên nhiên Việt Nam chất lượng cao, hơi mờ và phủ một lớp màu tối nhẹ để làm nổi bật nội dung.
  * Thiết lập các thẻ meta SEO cơ bản (title, description, charset, viewport).

**2. Header (`Header.astro`)**

  * Thiết kế theo phong cách Glassmorphism: một dải kính mờ, bán trong suốt nằm ở đầu trang và `sticky` (dính lại khi cuộn).
  * Bên trái là Logo.
  * Bên phải là menu điều hướng: **Trang chủ, Giới thiệu, Hành trình, Thư viện, Thực hành, Liên hệ**.
  * Có menu hamburger cho thiết bị di động.

**3. Footer (`Footer.astro`)**

  * Thiết kế đơn giản, màu tối.
  * Gồm thông tin copyright, slogan "Đi không ngừng nghỉ, sống trọn từng khoảnh khắc", và link tới các mạng xã hội.

**4. Trang chủ (`index.astro`)**

  * **Hero Section:** Hiển thị một câu slogan lớn, truyền cảm hứng trên nền ảnh toàn màn hình. Ví dụ: "Mỗi bước chân là một điểm đến". Kèm một nút bấm "Bắt đầu hành trình" kiểu Glassmorphism.
  * **Giới thiệu ngắn:** Một `GlassCard.astro` lớn giới thiệu tóm tắt về dự án.
  * **Bài viết mới nhất:** Hiển thị 3 bài viết mới nhất từ mục "Hành trình" sử dụng `PostCard.astro`.
  * **Trích dẫn:** Một câu trích dẫn ý nghĩa về cuộc sống hoặc thiền định, nổi bật trên trang.

**5. Trang Hành trình (`/hanhtrinh/index.astro` & `[slug].astro`)**

  * **Trang danh sách:** Hiển thị tất cả các bài viết dưới dạng lưới (grid), sử dụng component `PostCard.astro`. Mỗi card là một tấm kính mờ.
  * **Trang chi tiết bài viết (`PostLayout.astro`):**
      * Tiêu đề bài viết lớn, bên dưới là ngày đăng và tác giả.
      * Ảnh bìa (hero image) của bài viết hiển thị đẹp mắt.
      * Nội dung bài viết được render từ file Markdown, có định dạng typography rõ ràng, dễ đọc (khoảng cách dòng, kích thước chữ).
      * Các hình ảnh trong bài viết được tối ưu.

**6. Component `GlassCard.astro`**

  * Đây là component tái sử dụng quan trọng.
  * Nó là một `div` có áp dụng các class của Tailwind CSS để tạo hiệu ứng Glassmorphism: `bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg`.

**[Phong cách & Giao diện (Styling & UI/UX)]**

  * **Bảng màu (Color Palette):**
      * `background`: Nền ảnh thiên nhiên.
      * `text-primary`: `#F3F4F6` (Xám rất nhạt)
      * `text-secondary`: `#A1A1AA` (Xám nhạt hơn)
      * `accent`: `#34D399` (Màu xanh lá cây ngọc - Emerald) cho các nút bấm và link.
      * `glass-bg`: `rgba(255, 255, 255, 0.1)`
      * `glass-border`: `rgba(255, 255, 255, 0.2)`
  * **Hiệu ứng:** Thêm hiệu ứng `transition` mượt mà cho các tương tác hover trên nút bấm và thẻ bài viết (ví dụ: viền sáng lên hoặc độ mờ của kính thay đổi nhẹ).

**[Nội dung mẫu]**

Tạo file `src/content/hanhtrinh/01-ngay-dau-tien-o-dat-mui.md` với nội dung:

```markdown
---
title: "Ngày đầu tiên ở Đất Mũi: Nơi đất trời giao thoa"
pubDate: "2025-09-01"
description: "Hành trình bắt đầu từ cột mốc số 0, nơi con sóng và rừng đước kể câu chuyện của ngàn năm. Những bước chân đầu tiên mang theo sự háo hức và một tâm trí rộng mở."
author: "Người Bộ Hành"
image:
    url: "/images/dat-mui.jpg"
    alt: "Hoàng hôn trên vùng đất Mũi Cà Mau"
tags: ["cà mau", "bắt đầu", "ngày 1"]
layout: ../../layouts/PostLayout.astro
---

Hôm nay là ngày đầu tiên.

Không khí ở Đất Mũi có vị mặn của biển và mùi ngai ngái của bùn. Tôi đứng trước cột mốc tọa độ quốc gia, cảm nhận rõ ràng điểm khởi đầu của một hành trình dài. Bữa ăn duy nhất trong ngày hôm nay là một con cá thòi lòi nướng trui do một người ngư dân tốt bụng mời. Vị ngọt của cá, vị mặn của muối và câu chuyện về những mùa đi biển của chú đã trở thành năng lượng cho những bước chân đầu tiên.

Đi bộ dọc theo con đường nhỏ ven rừng đước, tôi thực hành bài thiền đi. Chú tâm vào lòng bàn chân chạm đất, vào hơi thở hòa cùng tiếng gió...
```

**[Đầu ra mong muốn]**

Hãy cung cấp toàn bộ mã nguồn cho từng file đã được liệt kê ở trên. Đặt mã nguồn trong các khối code Markdown riêng biệt và ghi rõ đường dẫn file ở phía trên mỗi khối. Giải thích ngắn gọn các lựa chọn quan trọng về kiến trúc hoặc code nếu cần. Bắt đầu với `package.json` và `astro.config.mjs`.