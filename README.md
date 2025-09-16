# Cosplayer Landing Page

Trang đích tĩnh, nhẹ và đẹp cho cosplayer. Bao gồm hero, giới thiệu, gallery, đặt lịch và liên hệ. Không cần backend.

## Cấu trúc

```
.
├─ index.html
├─ styles.css
├─ script.js
└─ assets/
   ├─ favicon.png
   ├─ og-cover.jpg
   └─ gallery/
      ├─ 1.jpg .. 6.jpg
      └─ thumbs/1.jpg .. 6.jpg
```

## Hướng dẫn sử dụng

- Mở `index.html` trong trình duyệt là chạy.
- Đổi tên thương hiệu và nội dung trong `index.html` theo cosplayer.
- Thay ảnh ở thư mục `assets/` bằng ảnh thật. Giữ nguyên tên hoặc sửa đường dẫn tương ứng.
- Liên kết mạng xã hội tại phần Liên hệ.

## SEO & Chia sẻ

- Cập nhật thẻ meta title/description trong `index.html`.
- Đặt `og:url` theo domain khi deploy.
- Cập nhật `assets/og-cover.jpg` (1200x630px) và `assets/favicon.png` (512x512px).

## Triển khai

- GitHub Pages: bật Pages cho repo, chọn branch `main` và root.
- Netlify/Vercel: kéo thả hoặc chọn project (build command: none, output: root).
- Nginx/IIS: serve thư mục gốc.

## Gợi ý tối ưu ảnh

- Dùng JPG chất lượng 70-80, preload thumbnail trước ảnh lớn.
- Tạo ảnh thumbnail 480px cạnh dài trong `assets/gallery/thumbs/`.
- Dùng `loading="lazy"` (đã bật) để trì hoãn tải ảnh ngoài màn hình.



