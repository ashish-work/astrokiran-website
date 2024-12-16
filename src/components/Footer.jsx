import Navbar from './Navbar'
import Logo from './Logo'

function Footer() {
    return (
        (
            <div className="bg-moonly bg-moonly/30 backdrop-blur-sm z-10 mt-20">
                <div className="container mx-auto py-14 flex justify-between items-center">
                    <Logo />
                    <div>
                        <a href="" target="_blank" rel="noopener noreferrer">info@astrokiran.com</a>
                    </div>
                </div>
            </div>
        )
    )
}

export default Footer