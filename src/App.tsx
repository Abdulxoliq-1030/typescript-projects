import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
