import React from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "@/interfaces/layout";
import { MainLayout } from "@/components/layout";
import { Typography, Box, Grid, Paper, Rating, Button } from "@mui/material"; // Import Button từ Material UI
import Image from "next/image"; // Sử dụng Image của Next.js để tối ưu hóa hình ảnh
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { data } from "@/components/home/popular-course.data"; // Dữ liệu khóa học của bạn

const CourseDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query; // Lấy id từ URL

  // Kiểm tra nếu id chưa được định nghĩa (vì router.query sẽ undefined trước khi hydration hoàn tất)
  if (!id) {
    return <Typography>Đang tải...</Typography>; // Hiển thị trong khi chờ lấy được id
  }

  // Tìm khóa học dựa trên id
  const course = data.find((item) => item.id === Number(id));

  if (!course) {
    return <Typography>Không tìm thấy khóa học.</Typography>; // Hiển thị thông báo nếu không tìm thấy khóa học
  }

  const descriptionLines = course.description
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <Box sx={{ p: 3 }}>
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 4, maxWidth: "1200px", margin: "auto" }}
      >
        <Button
          onClick={() => router.back()}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            mb: 2,
            color: "primary.main",
            zIndex: "1000",
          }}
        >
          <ArrowBackIcon sx={{ mr: 1 }} />{" "}
          <Typography variant="h5">Quay lại</Typography>{" "}
        </Button>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={course.cover}
                alt={course.title}
                width={400}
                height={400}
                objectFit="cover"
                style={{ borderRadius: "8px" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              {course.title}
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              sx={{ mb: 2, fontStyle: "italic" }}
            >
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                {descriptionLines.map((line, index) => (
                  <li key={index}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Rating
                value={course.rating}
                readOnly
                max={5}
                sx={{ color: "#ffce31" }}
              />
              <Typography variant="body1" sx={{ ml: 1 }}>
                ({course.ratingCount} đánh giá)
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Giá: {course.price} VND
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => router.back()}
              >
                Quay lại
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/messages/t/399584879912710",
                    "_blank"
                  )
                }
              >
                Liên hệ ngay
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

// Layout cho trang
CourseDetail.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default CourseDetail;
