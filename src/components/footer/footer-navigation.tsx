import React, { FC } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import type { Navigation } from "@/interfaces/navigation";
import { navigations as headerNavigations } from "@/components/navigation/navigation.data";
import { FooterSectionTitle } from "@/components/footer";
import { Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const courseMenu: Array<Navigation> = [
  {
    label: "Kỹ Năng Quản lý tài chính cá nhân",
    path: "popular-course",
  },
  {
    label: "Kỹ năng Sinh tồn và an toàn",
    path: "#",
  },
  {
    label: "Kỹ Năng Tư duy phản biện",
    path: "#",
  },
  {
    label: "Kỹ năng Quản lý thời gian",
    path: "#",
  },
  {
    label: "Kỹ năng Phòng chống bạo lực học đường",
    path: "#",
  },
];

const pageMenu = headerNavigations;

const companyMenu: Array<Navigation> = [
  { label: "Contact Us", path: "#" },
  { label: "Privacy & Policy", path: "#" },
  { label: "Term & Condition", path: "#" },
  { label: "FAQ", path: "#" },
];

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Box
      component={ScrollLink}
      key={path}
      activeClass="current"
      to={path}
      spy={true}
      smooth={true}
      duration={350}
      style={{ cursor: "pointer" }}
    >
      <MuiLink
        underline="hover"
        sx={{
          display: "block",
          mb: 1,
          color: "primary.contrastText",
        }}
      >
        {label}
      </MuiLink>
    </Box>
  );
};

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Khóa Học" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={6} ml="auto">
        <FooterSectionTitle title="Về Chúng Tôi" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
