import Navbar from './Navbar'
import Logo from './Logo'

function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-moonly bg-moonly/30 backdrop-blur-sm z-10">
            <div className="container mx-auto py-14 flex justify-between items-center">
                <Logo />
                <Navbar />
            </div>
        </div>
    )
}

export default Header