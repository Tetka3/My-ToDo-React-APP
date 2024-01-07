import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <span>TODOS</span>
        </div>
        <div className="right">
            <ul>
                <li>My Todos</li>                
                <li>Log In</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar