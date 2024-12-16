import logo from "../assets/file.png";;

function Logo() {
    return (

        <div className="flex items-center">
            <img className="w-16 h-16 mr-2" src={logo} alt='logo' />
            <span className="self-center text-2xl px-3 font-bold">AstroKiran</span>
        </div>

    );
}

export default Logo;

