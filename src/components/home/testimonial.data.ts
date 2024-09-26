import type { Testimonial } from "@/interfaces/testimonial";

export const data: Array<Testimonial> = [
  {
    id: 1,
    rating: 5,
    content:
      '"Tôi rất ấn tượng với các khóa học tại trung tâm. Khóa học quản lý tài chính cá nhân không chỉ giúp con tôi hiểu giá trị của tiền bạc mà còn dạy bé cách lập kế hoạch chi tiêu hợp lý. Điều này thật sự hữu ích cho trẻ trong cuộc sống hàng ngày."',
    user: {
      id: 1,
      name: "Nguyễn Tuệ Tú",
      professional: "Phụ huynh Nguyễn Thiện Tâm",
      photo: "1.jpg",
    },
  },
  {
    id: 2,
    rating: 4,
    content:
      '"Khóa học kỹ năng sinh tồn và an toàn rất tuyệt vời! Con tôi đã học được nhiều điều bổ ích, từ cách xử lý tình huống khẩn cấp đến kỹ năng tự bảo vệ bản thân. Tôi thấy bé trở nên tự tin hơn khi ra ngoài." ',
    user: {
      id: 1,
      name: "Nguyễn Quốc Huy",
      professional: "Phụ huynh Nguyễn Minh Khoa",
      photo: "2.jpg",
    },
  },
  {
    id: 3,
    rating: 5,
    content:
      '"Tôi đánh giá cao chương trình tư duy phản biện của trung tâm. Con tôi không chỉ học được cách phân tích và đánh giá thông tin mà còn biết cách đưa ra quyết định sáng suốt. Đây là một kỹ năng cần thiết cho thế hệ trẻ."',
    user: {
      id: 1,
      name: "Đỗ Văn Quang",
      professional: "Phụ huynh Đỗ Thiên An",
      photo: "3.jpg",
    },
  },
  {
    id: 4,
    rating: 4,
    content:
      '"Trung tâm thực sự là một nơi tuyệt vời để trẻ em phát triển toàn diện. Các khóa học được thiết kế sinh động, giúp trẻ hứng thú học hỏi. Con tôi rất hào hứng tham gia và luôn muốn quay lại."',
    user: {
      id: 1,
      name: "Anna Hà",
      professional: "Phụ huynh Nguyễn Bích Ngọc",
      photo: "4.jpg",
    },
  },
  {
    id: 5,
    rating: 4,
    content:
      '"Nhờ trung tâm, con tôi đã có những bước tiến lớn trong việc quản lý tài chính cá nhân và phát triển kỹ năng tư duy phản biện. Tôi cảm thấy yên tâm hơn khi biết rằng bé đang được trang bị những kỹ năng cần thiết cho tương lai."',
    user: {
      id: 1,
      name: "Vũ Phương Hiền",
      professional: "Phụ huynh Trần Đức Trọng",
      photo: "5.jpg",
    },
  },
];
