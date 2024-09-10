// use GetStartedWithThreeJS from 'src/components/GetStartedWithThreeJS'

import GetStartedWithThreeJS from '@/components/GetStartedWithThreeJS'
import React from 'react'

type ComponentProps = {
  children: React.ReactNode
}

const Component = ({ children }: ComponentProps) => {
  return <GetStartedWithThreeJS />
}

export default Component
