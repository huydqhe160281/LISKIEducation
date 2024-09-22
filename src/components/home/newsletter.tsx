import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import { useForm, ValidationError } from '@formspree/react'

const HomeNewsLetter: FC = () => {
  const [state, handleSubmit] = useForm('xrbzwkvk')

  if (state.succeeded) {
    return (
      <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
        <Container>
          <Box
            sx={{
              backgroundColor: 'secondary.main',
              borderRadius: 10,
              py: { xs: 4, md: 10 },
              px: { xs: 4, md: 8 },
              textAlign: 'center',
            }}
          >
            <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
              Thank You for Subscribing!
            </Typography>
            <Typography sx={{ mb: 6 }}>
              You are successfully subscribed to our newsletter. Check your email for updates.
            </Typography>
          </Box>
        </Container>
      </Box>
    )
  }

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Đăng ký để nhận thông tin từ chúng tôi
          </Typography>
          <Typography sx={{ mb: 6 }}>Đăng ký để nhận hỗ trọ về cách thức đăng ký và tư vấn về khóa học</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              id="name"
              name="name"
              type="text"
              required
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mb: 2,
              }}
              placeholder="Nhập tên của bạn"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <InputBase
              id="email"
              name="email"
              type="email"
              required
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mb: 2,
              }}
              placeholder="Nhập Email của bạn"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <InputBase
              id="phone"
              name="phone"
              type="tel"
              required
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mb: 2,
              }}
              placeholder="Nhập số điện thoại của bạn"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />

            <Box>
              <StyledButton type="submit" disableHoverEffect size="large">
                Đăng Ký Ngay
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
