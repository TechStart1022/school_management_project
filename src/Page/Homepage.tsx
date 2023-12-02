import { LoginButton,LoginGuestButton } from '../components/buttonstyle'
import { Link } from "react-router-dom"

const Homepage = () =>{
    return (
        <div className="flex h-screen w-full grid-rows-2">
            <div className="w-1/2 flex justify-end">
                <div className="w-2/3 h-full bg-contain bg-no-repeat bg-right-top"  style={{backgroundImage:'url(/assets/students.svg'}} />
            </div>
            <div className="w-1/2">
                <div className="flex w-4/5 pl-10 flex-col gap-5">
                    <h2 className="text-5xl font-bold py-12">
                        Welcome to
                        <br />
                        School Management
                        <br />
                        System
                        <br/>
                    </h2>
                    <p className="text-lg">
                        Streamline school management, class organization, and add students and faculty.
                        Seamlessly track attendance, assess performance, and provide feedback.
                        Access records, view marks, and communicate effortlessly.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/choose">
                            <LoginButton name="Login"/>
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <Link to="/chooseasguest">
                            <LoginGuestButton name="Login as Guest"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage;