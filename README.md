# Bộ Hành Tỉnh Thức 🚶‍♂️

> *Mỗi bước chân là một điểm đến*

Một website ghi lại hành trình bộ hành xuyên Việt Nam với tốc độ chậm, thực hành ăn một bữa mỗi ngày, và tìm về sự tỉnh thức trong từng khoảnh khắc sống.

## 🌟 Tổng quan

Website "Bộ Hành Tỉnh Thức" được xây dựng với Astro framework, tập trung vào:

- **Hiệu suất tối ưu**: Static site generation cho tốc độ tải trang cực nhanh
- **Thiết kế Glassmorphism**: Giao diện hiện đại với hiệu ứng kính mờ đẹp mắt
- **Responsive hoàn hảo**: Hoạt động mượt mà trên mọi thiết bị
- **SEO-friendly**: Tối ưu hóa cho công cụ tìm kiếm
- **Accessibility**: Đảm bảo truy cập dễ dàng cho mọi người dùng

## 🚀 Tính năng chính

### 📝 Hệ thống nội dung
- **Hành trình**: Ghi lại từng ngày của cuộc bộ hành
- **Thực hành**: Hướng dẫn các phương pháp tỉnh thức và thiền định
- **Thư viện ảnh**: Bộ sưu tập hình ảnh đẹp từ hành trình
- **Bộ lọc thông minh**: Tìm kiếm và lọc nội dung theo nhiều tiêu chí

### 🎨 Thiết kế và UX
- **Glassmorphism**: Hiệu ứng kính mờ hiện đại
- **Animations**: Chuyển động mượt mà và tự nhiên
- **Dark theme**: Giao diện tối dễ nhìn
- **Typography**: Font chữ Be Vietnam Pro tối ưu cho tiếng Việt

### 🔧 Tính năng kỹ thuật
- **Content Collections**: Quản lý nội dung với Astro Collections
- **Image Optimization**: Tối ưu hóa hình ảnh tự động
- **Sitemap**: Tự động tạo sitemap cho SEO
- **RSS Feed**: Cập nhật nội dung mới
- **PWA-ready**: Sẵn sàng cho Progressive Web App

## 🛠️ Công nghệ sử dụng

- **[Astro](https://astro.build/)** - Framework chính
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Prettier](https://prettier.io/)** - Code formatting
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - SEO optimization
- **[@astrojs/rss](https://docs.astro.build/en/guides/rss/)** - RSS feed generation

## 📁 Cấu trúc dự án

```
bhtt/
├── public/                     # Static assets
│   └── assets/
│       └── logo.svg           # Logo website
├── src/
│   ├── components/            # Reusable components
│   │   ├── Header.astro      # Navigation header
│   │   ├── Footer.astro      # Site footer
│   │   ├── GlassCard.astro   # Glassmorphism card component
│   │   ├── Button.astro      # Button component với variants
│   │   └── PostCard.astro    # Card hiển thị bài viết
│   ├── content/              # Content collections
│   │   ├── config.ts         # Content schema definitions
│   │   ├── hanhtrinh/        # Journey posts
│   │   └── thuchanh/         # Practice guides
│   ├── layouts/              # Layout templates
│   │   ├── BaseLayout.astro  # Base layout với SEO
│   │   └── PostLayout.astro  # Layout cho bài viết
│   ├── pages/                # Route pages
│   │   ├── index.astro       # Trang chủ
│   │   ├── gioithieu.astro   # Giới thiệu
│   │   ├── hanhtrinh/        # Journey section
│   │   ├── thuvien.astro     # Photo gallery
│   │   ├── thuchanh.astro    # Practice guides
│   │   └── lienhe.astro      # Contact page
│   └── styles/
│       └── global.css        # Global styles và utilities
├── astro.config.mjs          # Astro configuration
├── tailwind.config.cjs       # Tailwind configuration
├── prettier.config.js        # Prettier configuration
└── package.json              # Dependencies và scripts
```

## 🏁 Bắt đầu

### Yêu cầu hệ thống
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Cài đặt

1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/bhtt.git
   cd bhtt
   ```

2. **Cài đặt dependencies**
   ```bash
   pnpm install
   ```

3. **Chạy development server**
   ```bash
   pnpm dev
   ```

4. **Mở browser**
   ```
   http://localhost:3000
   ```

### Scripts có sẵn

```bash
# Development
pnpm dev          # Chạy dev server
pnpm start        # Alias cho pnpm dev

# Production
pnpm build        # Build static site
pnpm preview      # Preview production build

# Code quality
pnpm format       # Format code với Prettier
pnpm format:check # Check code formatting
pnpm type-check   # Type checking với TypeScript
```

## 📝 Tạo nội dung

### Thêm bài viết hành trình

Tạo file mới trong `src/content/hanhtrinh/`:

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn gọn"
pubDate: 2025-01-15
author: "Người Bộ Hành"
image:
  url: "https://example.com/image.jpg"
  alt: "Mô tả hình ảnh"
tags: ["tag1", "tag2"]
location:
  province: "Tỉnh/Thành phố"
  district: "Quận/Huyện"
distance: 20
weather: "Nắng nhẹ"
mood: "bình thản"
featured: false
---

Nội dung bài viết bằng Markdown...
```

### Thêm bài thực hành

Tạo file mới trong `src/content/thuchanh/`:

```markdown
---
title: "Tên bài thực hành"
description: "Mô tả chi tiết"
pubDate: 2025-01-15
category: "thiền đi"
difficulty: "dễ"
duration: "10-15 phút"
benefits: ["Lợi ích 1", "Lợi ích 2"]
featured: false
---

Hướng dẫn chi tiết...
```

## 🎨 Tùy chỉnh giao diện

### Màu sắc
Tùy chỉnh màu sắc chính trong `tailwind.config.cjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your color palette
      },
      accent: {
        // Accent colors
      }
    }
  }
}
```

### Font chữ
Thay đổi font trong `src/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap');
```

### Glassmorphism effects
Tùy chỉnh hiệu ứng kính trong `src/styles/global.css`:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## 🚀 Deployment

### Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Kết nối với Vercel
3. Deploy tự động

### Netlify
1. Build project: `pnpm build`
2. Upload thư mục `dist` lên Netlify

### GitHub Pages
1. Cấu hình `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://username.github.io',
     base: '/repository-name',
   });
   ```
2. Build và deploy với GitHub Actions

## 🔧 Tối ưu hóa

### Performance
- Hình ảnh được tối ưu tự động
- CSS được minify trong production
- JavaScript được tree-shake
- Static generation cho tốc độ tối đa

### SEO
- Sitemap tự động
- Meta tags đầy đủ
- Structured data (JSON-LD)
- Open Graph tags
- Canonical URLs

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast tối ưu
- Screen reader support

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

### Quy tắc đóng góp
- Tuân theo Prettier formatting
- Viết commit messages rõ ràng
- Thêm documentation cho tính năng mới
- Test trước khi submit PR

## 📄 License

Dự án này được phát hành dưới [MIT License](LICENSE).

## 🙏 Cảm ơn

- **Astro team** - Framework tuyệt vời
- **Tailwind CSS** - Styling framework mạnh mẽ
- **Unsplash** - Hình ảnh chất lượng cao
- **Google Fonts** - Be Vietnam Pro font

## 📞 Liên hệ

- **Website**: [bohanhtinhthuc.com](https://bohanhtinhthuc.com)
- **Email**: contact@bohanhtinhthuc.com
- **GitHub**: [@your-username](https://github.com/your-username)

---

*"Đi không ngừng nghỉ, sống trọn từng khoảnh khắc"* 🚶‍♂️✨
# bohanhtinhthuc.com
