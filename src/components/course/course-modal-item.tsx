import React, { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Course } from "@/interfaces/course";
import { useRouter } from "next/router";

interface Props {
  open: boolean;
  handleClose: () => void;
  item: Course;
}

const CourseModalItem: FC<Props> = ({ open, handleClose, item }) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/detail/${item.id}`);
  };
  return (
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
              width={400} // Ubah ukuran sesuai kebutuhan
              height={400}
              style={{ borderRadius: 8, objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 2}} >
              {item.subTitle}
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              {item.subDesc}
            </Typography>
           
            <Typography variant="body1" gutterBottom>
              <span style={{ fontWeight: "bold", color: "primary.main" }}>Giá: </span>
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
              style={{ display: "flex", alignItems: "center", gap: 3, fontWeight: "bold", color: "primary.main" }}
              variant="body1"
              gutterBottom
            >
              Đánh giá:{" "}
              <Rating name="rating-course" value={item.rating} max={5} sx={{ color: "#ffce31", mr: 1 }} readOnly />
              <Typography component="span" variant="h5">
                ({item.ratingCount} lượt đánh giá)
              </Typography>
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", p: 2 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            px: 4,
            py: 1,
          }}
        >
          Đóng
        </Button>
        {/* liên hệ ngay */}
        <Button
          variant="outlined"
          onClick={
            ()=>
              window.open("https://www.facebook.com/messages/t/100004841317611", "_blank")
          }
          color="secondary"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            px: 4,
            py: 1,
          }}
        >
          Liên hệ ngay
        </Button>
        {/* xem chi tiết */}
        <Button
          variant="contained"
          onClick={handleNavigate}   
          
          color="primary"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            px: 4,
            py: 1,
          }}
        >
          Xem chi tiết
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CourseModalItem;
