import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";
const inter = localFont({
  src: "../../public/fonts/Inter.ttf",
  variable: "--font-inter",
});

const just = localFont({
  src: "../../public/fonts/JustAnotherHand-Regular.ttf",
  variable: "--font-just",
});

const geomanist = localFont({
  src: "../../public/fonts/geomanist-regular.ttf",
  variable: "--font-geomanist",
});
const din = localFont({
  src: "../../public/fonts/DIN.ttf",
  variable: "--font-din",
});

export const metadata: Metadata = {
  title: "Hyogo Job Fair Pre-Event | Điểm đến lý tưởng cho Kỹ sư tương lai",
  description:
    "Ngày hội việc làm tỉnh Hyogo là sự kiện do Chính quyền tổ chức. Nhằm kết nối sinh viên ngành Khoa học Kỹ thuật với các doanh nghiệp tiềm năng để chuẩn bị cho bước đệm sự nghiệp tại Nhật Bản trong tương lai. Đăng ký ngay!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${just.variable}  ${geomanist.variable} ${din.variable} font-inter antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
