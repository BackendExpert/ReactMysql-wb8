import { Link } from "react-router-dom"
import IonIcons from "@reacticons/ionicons"

const SignUp = () => {
  return (
    <div className="bg-[url(https://wallpapercave.com/wp/wp2707504.jpg)] bg-cover bg-center h-screen w-full lg:pt-40">
        <div className="lg:mx-32 rounded-xl">
            <div className="lg:flex justify-between ">
                <div className="backdrop-blur-lg h-[600px] w-1/2 lg:px-20 lg:py-24">
                    <p className="text-4xl text-center text-white">Welcome to UMS <br />(User Management System)</p>
                    <Link to={'/register'}>
                        <div className="flex bg-transparent">
                            <p><IonIcons name="person-add"></IonIcons></p>
                            <p className="pl-4">SignUp</p>
                        </div>
                    </Link>
                    
                </div>
                <div className="bg-white w-1/2">
                    Welcome to UMS (User Management System)
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
