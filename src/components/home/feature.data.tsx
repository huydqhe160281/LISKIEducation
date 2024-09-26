import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Sự tận tâm',
    description: ' Liên tục cải tiến và đổi mới, chất lượng, đảm bảo chất lượng giáo dục tốt nhất.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Chất lượng',
    description: 'Liên tục cải tiến và đổi mới, chất lượng, đảm bảo chất lượng giáo dục tốt nhất.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Độ tin cậy',
    description: 'Đảm bảo độ tin cậy trong mọi khía cạnh của trung tâm.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Lấy khách hàng làm trung tâm',
    description: 'Lấy sự hài lòng và nhu cầu của khách hàng là kim chỉ nam.',
    icon: <ContactSupportIcon />,
  },
]
