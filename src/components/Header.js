import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <h1>
                <Link to="/">Quiz App</Link>
            </h1>
        </header>
    )
}