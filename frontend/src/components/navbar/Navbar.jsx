import { Link, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../navbar/navigation";
import { Container } from "../ui/Container";
import { useAuth } from "../../context/AuthContext";
import { twMerge } from "tailwind-merge";
import { IoLogOutOutline } from "react-icons/io5";

function Navbar() {
  const location = useLocation();
  const { isAuth, signout, user } = useAuth();

  return (
    <nav className="bg-zinc-800">
      <Container className="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl ">PERN Tasks</h1>
        </Link>
        <ul className="flex items-center justify-center md:gap-x-1">
          {isAuth
            ? 
            <> {
            privateRoutes.map(({ path, name, icon }) => (
                <li key={path}>
                  <Link to={path}
                  className={twMerge('text-slate-300 flex items-center px-2 py-1 rounded-md gap-x-1',
                  location.pathname === path &&
                  "bg-sky-500 px-2 py-1 rounded-md text-zinc-950"
                )}
                  >
                    {icon}
                    <span className="hidden md:block">
                     {name}
                    </span>
                    </Link>
                </li>
              ))
                }
              <li
              className="flex items-center px-2 py-1 rounded-md text-slate-300 hover: cursor-pointer gap-x-1" 
              
              onClick={() => {
                signout();
              }}
              >
                <IoLogOutOutline className="w-7 h-7 text-red-800"/>
                <span className="hidden md:block">
                Logout
                </span>
              </li>
              <li className="flex gap-x-2 items-center justify-center text-slate-300">
                <img src={user.gravatar} className="h-8 w-8 rounded-full"/>
                <span className="font-medium hidden md:block">
                  {user.username}
                </span>
              </li>
              </>
            : publicRoutes.map(({ path, name }) => (
                <li
                className={twMerge('text-slate-300 flex items-center px-2 py-1 rounded-md',
                location.pathname === path &&
                "bg-sky-500 px-2 py-1 rounded-md text-zinc-950"
              )}
                  key={path}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))}
             
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
