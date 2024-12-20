import compass from "../assets/compass.gif";
function HoroscopeCard() {
    return (
        <div className="container mx-auto mt-20 flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:flex-row rounded-[50px] justify-between bg-moonly-horo-card">
                <div className="flex flex-col justify-center max-w-full lg:max-w-96 ml-4 text-[#E8AED9]">
                    <h1 className="text-3xl lg:text-4xl font-extrabold">Daily Horoscope</h1>
                    <h1 className="text-xl lg:text-2xl mt-2 font-extrabold">Start your day with clarity and confidence by exploring what the stars have in store for you with your daily horoscope predictions.</h1>
                </div>
                <div className="mt-10 items-center p-4 lg:pr-20">
                    <div className="flex flex-wrap gap-4 mt-10">
                        <div className="p-2 w-32 h-28 lg:w-40 lg:h-36 rounded-3xl bg-[#E77272] flex items-center justify-center">
                            <h1 className="text-lg lg:text-xl">Love</h1>
                        </div>
                        <div className="p-2 w-32 h-28 lg:w-40 lg:h-36 rounded-3xl bg-[#8EC4FD] flex items-center justify-center">
                            <h1 className="text-lg lg:text-xl">Work</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="p-2 w-32 h-28 lg:w-40 lg:h-36 rounded-3xl bg-[#80EBB3] flex items-center justify-center">
                            <h1 className="text-lg lg:text-xl">Finance</h1>
                        </div>
                        <div className="p-2 w-32 h-28 lg:w-40 lg:h-36 rounded-3xl bg-[#EE74B8] flex items-center justify-center">
                            <h1 className="text-lg lg:text-xl">Chinese</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-10 lg:mt-0 rounded-[50px] w-full lg:w-96 flex flex-col items-center bg-gradient-to-r from-[#331376] to-[#78dcca]">
                <img src={compass} alt="compass" className="mb-4 w-40 h-40 lg:w-60 lg:h-60"></img>
                <h1 className="text-2xl lg:text-3xl font-extrabold">Vastu Score</h1>
                <p className="p-2 text-center">Your Vastu Score reveals how well your space aligns with Vastu principles, helping you enhance positivity, balance, and prosperity.</p>
            </div>
        </div>
    )
}

export default HoroscopeCard