import type { Course } from "@/interfaces/course";

export const data: Array<Course> = [
  {
    id: 1,
    cover: "/images/courses/1.png",
    title: "Khóa học kỹ năng quản lý tài chính",
    subTitle: "Khám phá tài chính bé thông minh, tương lai rực rỡ!",
    subDesc:
      "Khóa học Quản lý Tài chính Cá nhân cho trẻ em được thiết kế để giúp các bé xây dựng nền tảng vững chắc về tài chính thông qua các kiến thức và kỹ năng cơ bản",
    description: `
**Hiểu về tiền**: Trẻ sẽ học khái niệm về tiền, vai trò của nó và cách kiếm thu nhập, giúp bé hiểu rõ giá trị và cách sử dụng tiền hợp lý.
**Tiết kiệm**: Hướng dẫn trẻ cách tiết kiệm từ những khoản nhỏ, như tiền thưởng hay quà tặng, qua các hoạt động thực tế.
**Ngân sách**: Trẻ học cách lập ngân sách, phân chia chi tiêu cho các mục đích khác nhau và quản lý tiền hiệu quả.
**Đầu tư**: Giới thiệu khái niệm đầu tư, giúp trẻ hiểu cách tạo thu nhập bổ sung trong tương lai qua những bài học đơn giản.
**Lập kế hoạch tài chính**: Hướng dẫn trẻ cách lập kế hoạch tài chính cá nhân cho cả ngắn và dài hạn.
`,
    rating: 5,
    ratingCount: 0,
    price: "1.499.000",
    category: "Beginner",
  },
  {
    id: 2,
    cover: "/images/courses/2.png",
    title: "Kỹ Năng Sinh Tồn Và An Toàn",
    subTitle: "Khóa Học Sinh Tồn – Khám Phá Giới Hạn Của Trẻ!",
    subDesc:
      "Khóa học Kỹ năng Sinh Tồn và An Toàn là một chương trình đặc biệt được thiết kế để trang bị cho trẻ những kỹ năng cần thiết để đối phó với các tình huống khẩn cấp và khó khăn trong môi trường tự nhiên hoặc đô thị.",
    description: `
**Kỹ năng sinh tồn khi bị đuối nước**: Trẻ sẽ học cách phản ứng nhanh và hiệu quả khi rơi vào tình huống nguy hiểm dưới nước.
**Kỹ năng phòng cháy chữa cháy**: Giới thiệu các biện pháp an toàn và cách sử dụng bình cứu hỏa để thoát hiểm.
**Kỹ năng sinh tồn khi gặp thiên tai**: Hướng dẫn trẻ chuẩn bị và phản ứng với bão, lũ, bằng cách sử dụng bộ dụng cụ khẩn cấp và tìm nơi trú ẩn an toàn.
**Kỹ năng giữ an toàn khi bị lạc/ cứu trợ**: Trang bị kiến thức giúp trẻ tự bảo vệ và tìm đường trở về an toàn.
**Kỹ năng sơ cứu**: Cung cấp kiến thức cơ bản về xử lý vết thương và các phản ứng cấp cứu trong trường hợp khẩn cấp.
  `,
    rating: 5,
    ratingCount: 6,
    price: "1.999.000",
    category: "Intermediate",
  },
  {
    id: 3,
    cover: "/images/courses/3.png",
    title: "Khóa học kỹ năng tư duy phản biện",
    subTitle:
      "Phát triển tư duy phản biện Mở rộng tầm nhìn, nâng cao quyết định!",
    subDesc:
      "Khóa học Tư duy Phản biện được thiết kế để giúp các bé phát triển khả năng suy nghĩ độc lập và phản biện thông qua việc trang bị kiến thức và kỹ năng cơ bản",
    description: `
**Kỹ năng ra quyết định tốt hơn**: Trẻ sẽ học cách phân tích tình huống và đưa ra quyết định dựa trên lý lẽ và bằng chứng, thay vì chỉ dựa vào cảm xúc.
**Khả năng giải quyết vấn đề**: Học cách tiếp cận và giải quyết vấn đề một cách hiệu quả, từ đó tăng cường khả năng ứng phó với các tình huống khó khăn trong cuộc sống.
**Tư duy độc lập**: Trẻ sẽ phát triển khả năng tư duy độc lập, không dễ dàng bị ảnh hưởng bởi ý kiến của người khác.
**Tự tin trong giao tiếp**: Giúp trẻ tự tin hơn trong việc diễn đạt ý kiến của mình, tham gia vào các cuộc thảo luận và tranh luận.
**Khả năng sáng tạo**: Khuyến khích trẻ phát triển tư duy sáng tạo, tìm ra những giải pháp mới và độc đáo cho các vấn đề.
    `,
    rating: 4,
    ratingCount: 5,
    price: "1.499.000",
    category: "Beginner",
  },
  {
    id: 4,
    cover: "/images/courses/4.png",
    title: "Kỹ Năng Quản Lý Thời Gian",
    subTitle:
      "Quản lý thời gian hiệu quả, Chinh phục mọi mục tiêu!",
    subDesc: "Khóa học Kỹ Năng Quản Lý Thời Gian Dành Cho Trẻ Em được thiết kế nhằm trang bị cho trẻ những công cụ và phương pháp cần thiết để sử dụng thời gian một cách hiệu quả",
    description: `
**Quản Lý Thời Gian**: Giúp trẻ hiểu giá trị của thời gian và tầm quan trọng của việc quản lý thời gian hàng ngày với các phương pháp đơn giản nhưng hiệu quả.
**Lập Kế Hoạch và Sắp Xếp Ưu Tiên**: Trẻ học cách xác định mục tiêu và lập kế hoạch cho từng ngày, tuần và tháng.
**Tổ Chức Công Việc**: Hướng dẫn trẻ cách tạo môi trường học tập gọn gàng, sắp xếp đồ dùng và tài liệu theo trình tự hợp lý.
**Tạo Động Lực và Duy Trì Thói Quen Tốt**: Giúp trẻ tự động viên bản thân và hình thành thói quen tốt trong học tập và vui chơi.
      `,
    rating: 5,
    ratingCount: 0,
    price: "1.499.000",
    category: "Intermediate",
  },
  {
    id: 5,
    cover: "/images/courses/5.png",
    title: "Khóa học kỹ năng Phòng/chống bạo lực học đường",
    subTitle: "Ngăn chặn bạo lực, bảo vệ tương lai!",
    subDesc:
      "Khóa học kỹ năng chống bạo lực học đường được thiết kế để trang bị cho các em kiến thức và kỹ năng đối phó với bạo lực học đường",
    description: `
**Kỹ năng nhận biết dấu hiệu của bạo lực học đường**: Trẻ sẽ học cách nhận diện các dấu hiệu quấy rối, xâm hại về thể chất và tinh thần, cũng như nhận diện kẻ gây hại.
**Dấu hiệu của bạo lực học đường**: Khóa học chỉ ra các dấu hiệu cụ thể như sự thay đổi trong hành vi, cảm xúc hoặc việc sợ hãi đến trường.
**Kiểm soát cảm xúc và ứng phó với hệ lụy**: Trẻ học cách kiểm soát cảm xúc tiêu cực như sợ hãi, lo lắng và tức giận trong các tình huống căng thẳng.
**Xử lý tình huống**: Trang bị cho trẻ kỹ năng tự bảo vệ mình, tìm sự giúp đỡ từ người lớn, và hỗ trợ bạn bè khi gặp vấn đề liên quan đến bạo lực.
    `,
    rating: 5,
    ratingCount: 7,
    price: "1.999.000",
    category: "Intermediate",
  },
];
