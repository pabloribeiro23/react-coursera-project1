import reactIcon from '../assets/react.svg'
function Navbar() {
    return (
        <nav>
            <div className="logoContainer">
            <img src={reactIcon} />
            <h3 className="logoH3">ReactFacts</h3>
            </div>
            <h4 classname="navH4">React Course - Project 1</h4>
        </nav>
    )
}
export default Navbar;