import IonIons from '@reacticons/ionicons';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="bg-[url(https://wallpapercave.com/wp/wp2707504.jpg)] bg-cover bg-center h-screen w-full lg:pt-40 pt-28">
        <div className="mx-12 lg:mx-32 rounded-xl">
            <div className="lg:flex justify-between ">
                <div className="backdrop-blur-lg lg:h-[600px] h-[300px] lg:w-1/2 lg:px-20 px-10 lg:py-24 py-20">
                    <p className="lg:text-4xl text-2xl text-center text-white">Welcome to UMS <br />(User Management System)</p>
                    <p className="text-4xl font-semibold mt-16 text-center">SignUp Here</p>
                </div>
                <div className="bg-white w-1/2">
                    <div className="">
                        <form className="py-20 px-16">
                            <div className="py-2">
                            <span><IonIons name='person' size='large'></IonIons></span>
                                <label htmlFor="" className="text-xl pl-4">First Name: </label>
                                <input type="text" className="w-full h-12 border my-2 pl-2" required placeholder="First Name" />
                            </div>
                            <div className="py-2">
                                <span><IonIons name='at' size='large'></IonIons></span>
                                <label htmlFor="" className="text-xl pl-4">Email: </label>
                                <input type="email" className="w-full h-12 border my-2 pl-2" required placeholder="First Name" />
                            </div>
                            <div className="py-2">
                                <span><IonIons name='key' size='large'></IonIons></span>
                                <label htmlFor="" className="text-xl pl-4">Password: </label>
                                <input type="password" className="w-full h-12 border my-2 pl-2" required placeholder="Password" />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="border border-cyan-600 w-1/2 text-cyan-600 rounded-lg h-12 duration-500 hover:bg-cyan-600 hover:text-white">SignUp</button>    
                            </div>                          
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
