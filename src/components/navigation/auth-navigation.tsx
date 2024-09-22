import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton
        onClick={() => {
          window.open('https://www.facebook.com/LISKI.education', '_blank')
        }}
        color="primary"
        size="medium"
        variant="outlined"
      >
        Liên Hệ Trực Tiếp
      </StyledButton>
    </Box>
  )
}

export default AuthNavigation
