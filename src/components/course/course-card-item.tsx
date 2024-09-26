import React, { FC, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Course } from "@/interfaces/course";

interface Props {
  item: Course;
}

const CourseCardItem: FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const descriptionLines = item.description
    .split("\n")
    .filter((line) => line.trim() !== "");
  return (
    <>
      <Box
        sx={{
          px: 1,
          py: 4,
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: "background.paper",
            borderRadius: 4,
            transition: (theme) => theme.transitions.create(["box-shadow"]),
            "&:hover": {
              boxShadow: 2,
              [`& .${iconButtonClasses.root}`]: {
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                boxShadow: 2,
              },
            },
          }}
        >
          <Box
            sx={{
              lineHeight: 0,
              overflow: "hidden",
              borderRadius: 3,
              mb: 2,
            }}
          >
            <Image
              src={item.cover}
              width={760}
              height={760}
              alt={"Course " + item.id}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            {/* Nhấn vào title để mở modal */}
            <Typography
              component="h2"
              variant="h5"
              sx={{
                mb: 2,
                height: 56,
                overflow: "hidden",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              {item.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating
                name="rating-course"
                value={item.rating}
                max={5}
                sx={{ color: "#ffce31", mr: 1 }}
                readOnly
              />
              <Typography component="span" variant="h5">
                ({item.ratingCount})
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h5" color="primary.main">
                {item.price + "vnđ"}
              </Typography>
              <Typography variant="h6"> / Khóa</Typography>
            </Box>
            <IconButton
              color="primary"
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                },
              }}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Modal hiển thị thông tin khóa học */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: 8,
            p: 3,
            boxShadow: 10,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            borderBottom: "1px solid #eee",
            mb: 2,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          {item.title}
        </DialogTitle>
        <DialogContent
          sx={{
            typography: "body1",
            lineHeight: 1.7,
            fontSize: "1.1rem",
            color: "text.secondary",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={item.cover}
                alt={"Course " + item.id}
                width={400} // Điều chỉnh kích thước ảnh theo yêu cầu
                height={400}
                style={{ borderRadius: 8, objectFit: "cover" }}
              />
            </Box>
            {/* Phần bên trái: Thông tin khóa học */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                {item.titleDesc}
              </Typography>
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
              <Typography variant="body1" gutterBottom>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "primary.main",
                  }}
                >
                  Giá:{" "}
                </span>
                <Typography
                  component="span"
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                  fontSize={item.price.length > 7 ? "1.3rem" : "1.6rem"}
                  fontWeight={item.price.length > 7 ? "normal" : "bold"}
                >
                  {item.price + "VND"}
                </Typography>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  fontWeight: "bold",
                  color: "primary.main",
                }}
                variant="body1"
                gutterBottom
              >
                Đánh giá:{" "}
                <Rating
                  name="rating-course"
                  value={item.rating}
                  max={5}
                  sx={{ color: "#ffce31", mr: 1 }}
                  readOnly
                />
                <Typography component="span" variant="h5">
                  ({item.ratingCount} lượt đánh giá)
                </Typography>
              </Typography>
            </Box>

            {/* Phần bên phải: Hình ảnh khóa học */}
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", p: 2 }}>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              px: 4,
              py: 1,
              backgroundColor: "primary.main",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CourseCardItem;
