import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PageNotFound from '../pages/404'

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  )
}

export default PageRoutes
