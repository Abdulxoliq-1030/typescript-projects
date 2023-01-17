import React from 'react'
import Sidebar from '../sidebar/sidebar'
import './style.scss'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Sidebar />
    </>
  )
}

export default Layout
