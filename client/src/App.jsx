import "react-router-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./components/LoginSignUp/SignIn"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SignIn />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}