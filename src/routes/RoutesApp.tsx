import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import Demandes from '../pages/demandes'


const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Header >
          <Home />
        </Header>
      }
    />
    {/*  */}
    <Route
      path="/demandes"
      element={
        <Header >
          <Demandes />
        </Header>
      }
    />
  </Routes>
)

export default AppRoutes