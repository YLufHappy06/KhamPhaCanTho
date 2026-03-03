# KhamPhaCanTho

Website tĩnh giới thiệu du lịch Cần Thơ (tiếng Việt).

## Repository này đã có code gì?

Các file chính đang nằm trực tiếp trong repository:

- `index.html`: trang chính, chứa header + menu + khung nội dung.
- `styles.css`: CSS cho giao diện tổng.
- `pages/trangchu.html`: nội dung giới thiệu tổng quan.
- `pages/diemden.html`: các điểm đến nổi bật.
- `pages/amthuc.html`: đặc sản Cần Thơ.
- `pages/lienhe.html`: thông tin liên hệ và lịch trình mẫu.
- `pages/page.css`: CSS dùng chung cho các trang con.

## Cấu trúc repository

```text
.
├── index.html
├── styles.css
├── pages/
│   ├── trangchu.html
│   ├── diemden.html
│   ├── amthuc.html
│   ├── lienhe.html
│   └── page.css
└── README.md
```

## Chạy local

```bash
python3 -m http.server 4173
```

Mở trình duyệt tại: `http://127.0.0.1:4173`
