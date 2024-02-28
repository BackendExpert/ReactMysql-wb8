import IonIons from "@reacticons/ionicons"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const SignIn = () => {
    const [value, SetValue] = useState({
      email: '',
      password: ''
    })

    const [cookie, setCookie] = useState(["user"])
    const navigate = useNavigate();
    const headleLogin = (e) => {
      e.preventDefault();
      setCookie({ path: "/"})
      axios.post('http://localhost:8081/login', value)
      // .then(res => {
      //   if(res.data.Status === "Success"{

      //   })
      // })
    }
  return (
    <div className="bg-[url(https://wallpapercave.com/wp/wp2707507.jpg)] bg-cover bg-center h-screen w-full lg:pt-40 pt-28">
        <div className="mx-12 lg:mx-32 rounded-xl">
        <div className="lg:flex justify-between">
            <div className="bg-white w-1/2 rounded-xl">
            <div className="py-20 px-16">
                        <form onSubmit={headleLogin}>
                            <div className="py-2">
                                <span><IonIons name='at' size='large'></IonIons></span>
                                <label htmlFor="" className="text-xl pl-4">Email: </label>
                                <input type="email" className="w-full h-12 border my-2 pl-2 text-xl" required placeholder="First Name" 
                                onChange={e => SetData({...data, email:e.target.value})}/>
                            </div>
                            <div className="py-2">
                                <span><IonIons name='key' size='large'></IonIons></span>
                                <label htmlFor="" className="text-xl pl-4">Password: </label>
                                <input type="password" className="w-full h-12 border my-2 pl-2 text-xl" required placeholder="Password" 
                                onChange={e => SetData({...data, password:e.target.value})}/>
                            </div>
                            <div className="py-2">
                                <button type="submit" className="border border-cyan-600 w-1/2 text-cyan-600 rounded-lg h-12 duration-500 hover:bg-cyan-600 hover:text-white">Login</button>    
                            </div>                          
                        </form>

                        <p>to SignUp ? 
                            <Link to={'/register'}>
                                <span className="px-2 text-cyan-600 duration hover:underline">Create New Account</span>
                            </Link>
                        </p>
                    </div>
            </div>
            <div className="backdrop-blur-lg lg:h-[600px] h-[300px] lg:w-1/2 lg:px-20 px-10 lg:py-24 py-20">
              <p className="lg:text-4xl text-2xl text-center text-white">Welcome Back to UMS <br />(User Management System)</p>
              <p className="text-4xl font-semibold mt-16 text-center text-cyan-600">SignIn Here</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignIn