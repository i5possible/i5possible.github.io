import React from 'react'
import { Container } from '@mui/material'

type BlogPostLayoutProps = {
  children: React.ReactNode
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ children }) => {
  return (
    <Container
      sx={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '1rem 1rem',
      }}
    >
      {children}
    </Container>
  )
}

export default BlogPostLayout
