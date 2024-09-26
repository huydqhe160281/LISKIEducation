import type { Navigation } from '@/interfaces/navigation'

export const navigations: Navigation[] = [
  {
    label: 'Trang chủ',
    path: '#', // '/',
  },
  {
    label: 'Khóa học',
    path: 'popular-course', // '/popular-course',
  },
  {
    label: 'Đánh giá',
    path: 'testimonial', // '/testimonial',
  },
  {
    label: 'Giảng viên',
    path: 'mentors', // '/mentors',
  },
  {
    label: 'Về chúng tôi',
    path: 'about', // '/about me',
  },
]
