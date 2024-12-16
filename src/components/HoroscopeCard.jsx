import compass from "../assets/compass.gif";
function HoroscopeCard() {
    return (
        <div className="container mx-auto mt-20 h-[500px] flex justify-between">
            <div className="flex border border-gray-300 rounded-[50px] justify-between bg-moonly-horo-card">
                <div className="flex flex-col justify-center max-w-96 ml-4 text-[#E8AED9]">
                    <h1 className="text-4xl font-extrabold">Daily Horoscope</h1>
                    <h1 className="text-2xl mt-2 font-extrabold">Start your day with clarity and confidence by exploring what the stars have in store for you with your daily horoscope predictions.</h1>
                </div>
                <div className="mt-10 items-center p-4 pr-20">
                    <div className="flex gap-4 mt-10">
                        <div className="p-2 w-40 h-36 border border-gray-300 rounded-3xl bg-[#E77272] flex items-center justify-center">
                            <h1 className="text-xl">Love</h1>
                        </div>
                        <div className="p-2 w-40 h-36 border border-gray-300 rounded-3xl bg-[#8EC4FD] flex items-center justify-center">
                            <h1 className="text-xl">Work</h1>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <div className="p-2 w-40 h-36 border border-gray-300 rounded-3xl bg-[#80EBB3] flex items-center justify-center">
                            <h1 className="text-xl">Finance</h1>
                        </div>
                        <div className="p-2 w-40 h-36 border border-gray-300 rounded-3xl bg-[#EE74B8] flex items-center justify-center">
                            <h1 className="text-xl">Chinese</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="p-2 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-gradient-to-r from-[#331376] to-[#78dcca]">
                <img src={compass} alt="compass" className="mb-4 w-60 h-60"></img>
                <h1 className="text-3xl font-extrabold">Vastu Score</h1>
                <p className="p-2 text-center">Your Vastu Score reveals how well your space aligns with Vastu principles, helping you enhance positivity, balance, and prosperity.</p>
            </div>
        </div>
    )
}

export default HoroscopeCard