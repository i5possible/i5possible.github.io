'use client'
import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'

interface ImageTextSectionProps {
  imageSrc: string
  title: string
  description: string
  imageOnLeft: boolean
  isDark: boolean
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  title,
  description,
  imageOnLeft,
  isDark,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        backgroundColor: isDark ? 'grey.900' : 'grey.100',
        color: isDark ? 'common.white' : 'common.black',
      }}
    >
      <Box
        sx={{
          width: isMobile ? '100%' : '50%',
          order: isMobile ? 0 : imageOnLeft ? 0 : 1,
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        sx={{
          width: isMobile ? '100%' : '50%',
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  )
}

export default ImageTextSection
