import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import ViewPage from '../pages/view'


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
      path="/views"
      element={
        <Header >
          <ViewPage />
        </Header>
      }
    />
  </Routes>
)

export default AppRoutes