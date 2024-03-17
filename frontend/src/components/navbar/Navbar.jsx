import { Link, useLocation } from "react-router-dom";
import { navigation } from "../navbar/navigation";
import {Container} from '../ui/Container'

function Navbar() {
    const location = useLocation();
    console.log(location);
  return (
    <nav className="bg-zinc-800">
    <Container className="flex justify-between py-3">
<Link to="/">
    <h1 className="font-bold text-2xl ">PERN Tasks</h1>
</Link>
    <ul className="flex gap-3" >
        {navigation.map(({path, name}) => (
            <li className={
                `${location.pathname === path && "bg-sky-500 px-2 py-1 rounded-md text-zinc-950"}`
            } key={path}>
                <Link to={path}>
                    {name}
                </Link>
            </li>
        ))}
    </ul>
    </Container>

    </nav>
  )
}

export default Navbar