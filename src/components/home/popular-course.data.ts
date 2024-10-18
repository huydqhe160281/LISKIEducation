import type { Course } from "@/interfaces/course";

export const data: Array<Course> = [
  {
    id: 1,
    cover: "/images/courses/1.png",
    title: "Kỹ Năng Quản Lý Tài Chính Cá Nhân",
    titleDesc: "Khám phá tài chính bé thông minh, tương lai rực rỡ!",
    description: `
**Hiểu về tiền**: Trẻ sẽ học khái niệm về tiền, vai trò của nó và cách kiếm thu nhập, giúp bé hiểu rõ giá trị và cách sử dụng tiền hợp lý.
**Tiết kiệm**: Hướng dẫn trẻ cách tiết kiệm từ những khoản nhỏ, như tiền thưởng hay quà tặng, qua các hoạt động thực tế.
**Ngân sách**: Trẻ học cách lập ngân sách, phân chia chi tiêu cho các mục đích khác nhau và quản lý tiền hiệu quả.
**Đầu tư**: Giới thiệu khái niệm đầu tư, giúp trẻ hiểu cách tạo thu nhập bổ sung trong tương lai qua những bài học đơn giản.
**Lập kế hoạch tài chính**: Hướng dẫn trẻ cách lập kế hoạch tài chính cá nhân cho cả ngắn và dài hạn.
`,
    rating: 5,
    ratingCount: 8,
    price: "2.000.000",
    category: "Beginner",
  },
  {
    id: 2,
    cover: "/images/courses/2.png",
    title: "Kỹ Năng Sinh Tồn Và An Toàn",
    titleDesc: "Khóa Học Sinh Tồn – Khám Phá Giới Hạn Của Trẻ!",
    description: `
**Kỹ năng sinh tồn khi bị đuối nước**: Trẻ sẽ học cách phản ứng nhanh và hiệu quả khi rơi vào tình huống nguy hiểm dưới nước.
**Kỹ năng phòng cháy chữa cháy**: Giới thiệu các biện pháp an toàn và cách sử dụng bình cứu hỏa để thoát hiểm.
**Kỹ năng sinh tồn khi gặp thiên tai**: Hướng dẫn trẻ chuẩn bị và phản ứng với bão, lũ, bằng cách sử dụng bộ dụng cụ khẩn cấp và tìm nơi trú ẩn an toàn.
**Kỹ năng giữ an toàn khi bị lạc/ cứu trợ**: Trang bị kiến thức giúp trẻ tự bảo vệ và tìm đường trở về an toàn.
**Kỹ năng sơ cứu**: Cung cấp kiến thức cơ bản về xử lý vết thương và các phản ứng cấp cứu trong trường hợp khẩn cấp.
  `,
    rating: 5,
    ratingCount: 15,
    price: "2.000.000",
    category: "Intermediate",
  },
  {
    id: 3,
    cover: "/images/courses/3.png",
    title: "Kỹ Năng Tư Duy Phản Biện",
    titleDesc:
      "Khóa học Tư duy Phản biện được thiết kế để giúp các bé phát triển khả năng suy nghĩ độc lập và phản biện thông qua việc trang bị kiến thức và kỹ năng cơ bản:",
    description:
      "Khóa học Tư duy Phản biện được thiết kế để giúp các bé phát triển khả năng suy nghĩ độc lập và phản biện thông qua việc trang bị kiến thức và kỹ năng cơ bản",
    rating: 4,
    ratingCount: 7,
    price: "2.000.000",
    category: "Beginner",
  },
  {
    id: 4,
    cover: "/images/courses/4.png",
    title: "Kỹ Năng Quản Lý Thời Gian",
    titleDesc:
      "Phát triển tư duy phản biện mở rộng tầm nhìn, nâng cao quyết định!",
    description: `
**Kỹ năng ra quyết định tốt hơn**: Trẻ sẽ học cách phân tích tình huống và đưa ra quyết định dựa trên lý lẽ và bằng chứng, thay vì chỉ dựa vào cảm xúc.
**Khả năng giải quyết vấn đề**: Học cách tiếp cận và giải quyết vấn đề một cách hiệu quả, từ đó tăng cường khả năng ứng phó với các tình huống khó khăn trong cuộc sống.
**Tư duy độc lập**: Trẻ sẽ phát triển khả năng tư duy độc lập, không dễ dàng bị ảnh hưởng bởi ý kiến của người khác.
**Tự tin trong giao tiếp**: Giúp trẻ tự tin hơn trong việc diễn đạt ý kiến của mình, tham gia vào các cuộc thảo luận và tranh luận.
**Khả năng sáng tạo**: Khuyến khích trẻ phát triển tư duy sáng tạo, tìm ra những giải pháp mới và độc đáo cho các vấn đề.
      `,
    rating: 4,
    ratingCount: 12,
    price: "2.000.000",
    category: "Intermediate",
  },
  {
    id: 5,
    cover: "/images/courses/5.png",
    title: "Kỹ Năng Phòng Chống Bạo Lực Học Đường",
    titleDesc:
      "Khóa học Kỹ năng Sinh Tồn và An Toàn là một chương trình đặc biệt được thiết kế để trang bị cho trẻ những kỹ năng cần thiết để đối phó với các tình huống khẩn cấp và khó khăn trong môi trường tự nhiên hoặc đô thị.",
    description:
      "Khóa học Kỹ năng Sinh Tồn và An Toàn là một chương trình đặc biệt được thiết kế để trang bị cho trẻ những kỹ năng cần thiết để đối phó với các tình huống khẩn cấp và khó khăn trong môi trường tự nhiên hoặc đô thị.",
    rating: 4,
    ratingCount: 32,
    price: "2.000.000",
    category: "Intermediate",
  },
];
