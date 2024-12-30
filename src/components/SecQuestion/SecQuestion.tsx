import SecTitle from "@components/common/SecTitle";
import { title } from "process";
import React from "react";
import QuestionBox from "./components/QuestionBox";

const SecQuestion = () => {
  const questionList = [
    {
      title: 'Vì sao lại là "Job Fair Pre-Event"?',
      text: 'Sự kiện "Hyogo Job Fair Pre-Event" là khởi đầu cho chương trình tuyển dụng Hyogo Job Fair tại Việt Nam trong năm 2025. Sự kiện giúp nhà tuyển dụng Nhật Bản giao lưu với sinh viên ngành Khoa học Kỹ thuật và các lĩnh vực liên quan. Giúp sinh viên chuẩn bị cho sự nghiệp, hiểu về văn hóa doanh nghiệp, yêu cầu tuyển dụng, cơ hội nghề nghiệp tại tỉnh Hyogo, và nhanh chóng hòa nhập vào thị trường lao động Nhật Bản sau khi tốt nghiệp.',
    },
    {
      title: "Ai là đối tượng chính của sự kiện này?",
      text: "Đối tượng tham gia bao gồm sinh viên ngành Khoa học Kỹ thuật, CNTT, Cơ khí và các ngành liên quan trên địa bàn thành phố Hồ Chí Minh. Đặc biệt sinh viên Trường Đại học Bách Khoa - Đại học Quốc Gia TP.HCM thuộc tất cả các chuyên ngành. Chương trình hướng đến các bạn sinh viên năm 1, 2, 3 và 4 đang mong muốn tìm hiểu về cơ hội nghề nghiệp tại Nhật Bản.",
    },
    {
      title: "Làm sao để tham gia sự kiện",
      text: "Để tham gia sự kiện, bạn cần đăng ký trước qua form đăng ký tại đây. BTC sẽ gửi thông tin xác nhận đăng ký thành công đến email của bạn và hướng dẫn tham gia khi gần đến ngày diễn ra sự kiện.",
    },
    {
      title: "Sự kiện có thu phí với người tham gia không?",
      text: "Sự kiện sẽ diễn ra miễn phí, bạn không cần tốn bất kỳ chi phí nào khi tham gia Hyogo Job Fair Pre-Event.",
    },
    {
      title: "Tôi cần biết tiếng Nhật tham gia sự kiện không?",
      text: "Để tạo điều kiện thuận lợi cho tất cả các bạn tham gia, sự kiện không yêu cầu bạn phải có khả năng tiếng Nhật.",
    },
    {
      title: "Tôi nên chuẩn bị gì trước khi tham gia sự kiện?",
      text: "Trước khi tham gia sự kiện, bạn nên chuẩn bị một số câu hỏi để hỏi nhà tuyển dụng, tìm hiểu thông tin về công ty và thị trường việc làm tại Nhật Bản cũng như rõ ràng về mong muốn và định hướng nghề nghiệp của mình để có thể giao lưu và chia sẻ. Ngoài ra, bạn cũng có thể mang theo CV để được tư vấn và chỉnh sửa.",
    },
  ];
  return (
    <div
      id="frequently-asked-questions"
      className="py-8 md:py-12 lg:py-14 container mx-auto"
    >
      <SecTitle title="Câu hỏi thường gặp" />
      <div className="mt-6 md:mt-9 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {questionList.map((item, index) => (
          <QuestionBox key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default SecQuestion;
