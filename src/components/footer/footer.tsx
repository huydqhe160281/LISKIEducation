import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FooterNavigation, FooterSocialLinks } from "@/components/footer";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab } from "@mui/material";
import FacebookMessengerIcon from "@mui/icons-material/Facebook"; // You can customize this icon if needed

const Footer: FC = () => {
  const [showIcons, setShowIcons] = useState(false);

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        py: { xs: 6, md: 10 },
        color: "primary.contrastText",
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: "100%", md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                <a
                  href="https://www.facebook.com/LISKI.education"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LISKI Education
                </a>
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                LISKI Education là trung tâm giáo dục đẳng cấp, chuyên cung cấp
                khóa học kỹ năng sống cho trẻ em, với sứ mệnh khai phóng tiềm
                năng và bồi đắp nhân cách cho thế hệ tương lai.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>

      {/* Back to Top and Messenger Button */}
      {showIcons && (
        <>
          <Fab
            href="https://www.facebook.com/messages/t/399584879912710"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color:"#fffffF",
              bgcolor:"#1d3f8b",
              width: "60px",
              height: "60px",
              position: "fixed",
              bottom: 85,
              right: 25,
              zIndex: 1000,
              // hover
              "&:hover": {
                bgcolor: "#1d3f8b",
              },
            }}
          >
            <FacebookMessengerIcon sx={{ fontSize: "2.5rem" }} />
          </Fab>
        </>
      )}
    </Box>
  );
};

export default Footer;
