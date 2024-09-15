'use client'
import React from 'react'
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

interface ImageTextSectionProps {
  imageSrc: string
  title: string
  description: string | string[]
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
        maxHeight: '400px',
      }}
    >
      <Box
        sx={{
          width: isMobile ? '100%' : '50%',
          order: isMobile ? 0 : imageOnLeft ? 0 : 1,
        }}
      >
        <Image
          src={imageSrc}
          width={isMobile ? 400 : 600}
          height={isMobile ? 270 : 400}
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
        <Stack direction={'column'} gap={2}>
          {Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <Typography key={index} variant="body1">
                {paragraph}
              </Typography>
            ))
          ) : (
            <Typography variant="body1">{description}</Typography>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default ImageTextSection
