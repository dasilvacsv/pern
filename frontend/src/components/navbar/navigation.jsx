import { RxDashboard } from "react-icons/rx";
import { MdAddTask } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

export const publicRoutes = [
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Login',
        path: '/login'
    },
    {
        name: 'Register',
        path: '/register'
    }
]
export const privateRoutes = [
    {
        name: 'Tasks',
        path: '/tasks',
        icon: <RxDashboard className="w-5 h-5"/>
    },
    {
        name: 'Add',
        path: '/tasks/new',
        icon: <MdAddTask  className="w-5 h-5"/>
        
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: <IoMdPerson  className="w-5 h-5"/>

    }
]