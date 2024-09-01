
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PrivateRoutes from './routes/PrivateRoutes'
import PublicRoutes from './routes/PublicRoutes'
import "./style.scss"
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";



function App() {
  // const { currentUser } = useContext(AuthContext);
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/Login" />;
  //   }
  //   return children;  
  // };
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PrivateRoutes>
            <Home />
            </PrivateRoutes>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={
            <PublicRoutes>
            <Register />
            </PublicRoutes>
            } />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
