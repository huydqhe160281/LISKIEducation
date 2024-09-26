import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                <a
                  href="https://www.facebook.com/LISKI.education"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  LISKI Education
                </a>
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                LISKI Education là trung tâm giáo dục đẳng cấp, chuyên cung cấp khóa học kỹ năng sống cho trẻ em, với sứ mệnh khai phóng tiềm năng và bồi đắp nhân cách cho thế hệ tương lai.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
