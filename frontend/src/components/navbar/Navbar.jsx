import { Link, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../navbar/navigation";
import { Container } from "../ui/Container";
import { useAuth } from "../../context/AuthContext";
import { twMerge } from "tailwind-merge";

function Navbar() {
  const location = useLocation();
  const { isAuth, signout } = useAuth();
  return (
    <nav className="bg-zinc-800">
      <Container className="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl ">PERN Tasks</h1>
        </Link>
        <ul className="flex gap-3">
          {isAuth
            ? 
            <> {
            privateRoutes.map(({ path, name }) => (
                <li
                  className={twMerge('text-slate-300 flex items-center px-2 py-1 rounded-md',
                location.pathname === path &&
                "bg-sky-500 px-2 py-1 rounded-md text-zinc-950"
              )}
                  key={path}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))
                }
              <li
              className="flex items-center px-2 py-1 rounded-md text-slate-300 hover: cursor-pointer" 
              
              onClick={() => {
                signout();
              }}
              >
                Logout
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
