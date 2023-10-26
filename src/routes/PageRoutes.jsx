import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PageNotFound from '../pages/404'
import PatientLists from '../pages/PatientLists'
import WardLists from '../pages/WardLists'

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/patients" element={<PatientLists />} />
      <Route path='/wards' element={<WardLists />} />
    </Routes>
  )
}

export default PageRoutes
