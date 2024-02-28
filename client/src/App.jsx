import "react-router-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./components/LoginSignUp/SignIn"
import SignUp from "./components/LoginSignUp/SignUp"
import DashboardAdmin from "./components/Admin/DashboardAdmin"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} ></Route>
        <Route path="/register" element={<SignUp />} ></Route>
        <Route path="/admin" element={<DashboardAdmin />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}