import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout, Home } from './components'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
