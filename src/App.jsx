import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar'
import PageNotFound from './pages/404'
import Home from './pages/Home'
import PatientLists from './pages/PatientLists'
import WardLists from './pages/WardLists'
import PatientView from './pages/PatientView'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/patients" element={<PatientLists />} />
        <Route path="/patients/:patientID" element={<PatientView />} />
        <Route path="/wards" element={<WardLists />} />
      </Routes>
    </>
  )
}

export default App
