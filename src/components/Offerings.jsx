import tree from "../assets/tree.gif"
import compatibility from "../assets/compatibility.gif"
import puja from "../assets/puja.gif"
import mantras from "../assets/mantras.gif"
import remedy from "../assets/remedy.gif"
import articles from "../assets/articles.gif"
function Offerings() {
    return (
        <div className="container flex flex-col mx-auto">
            <div className="flex justify-between gap-10 mt-10">
                <div className="p-16 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-moonly-horo-card">
                    <img src={compatibility} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Compatibility</h1>
                    <p className="text-center">Discover your compatibility score to understand how well you and your partner align emotionally, mentally, and energetically for a harmonious relationship.</p>
                </div>
                <div className="p-16 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-moonly-horo-card">
                    <img src={remedy} alt="remedy" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Daily Remedies</h1>
                    <p className="text-center">Unlock your daily free Vedic remedies, offering simple yet effective solutions to balance energies and bring positivity to your day.</p>
                </div>
                <div className="p-16 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-moonly-horo-card">
                    <img src={puja} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Puja Vidhi</h1>
                    <p className="text-center">Learn the correct way to perform puja with our step-by-step Puja Vidhi, ensuring your rituals are accurate, meaningful, and bring divine blessings.</p>
                </div>
            </div>
            <div className="flex justify-between gap-10 mt-20">

                <div className="p-16 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-moonly-horo-card">
                    <img src={mantras} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Healing Mantras</h1>
                    <p className="text-center">Discover powerful healing mantras designed to calm the mind, restore balance, and invite positivity into your life through the vibrations of ancient sounds.</p>
                </div>
                <div className="p-16 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-moonly-horo-card">
                    <img src={tree} alt="tree" className="mb-4 w-auto h-60" />
                    <h1 className="text-3xl font-extrabold">Hope Tree</h1>
                    <p className="text-center">Share your deepest wishes on the Hope Tree, a sacred space where your hopes are nurtured with positivity, prayers, and divine blessings.</p>
                </div>
                <div className="p-16 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-moonly-horo-card">
                    <img src={articles} alt="tree" className="mb-4 w-auto h-60" />
                    <h1 className="text-3xl font-extrabold">Articles</h1>
                    <p className="text-center">Explore our collection of insightful articles on astrology, remedies, and rituals, designed to guide you toward clarity, balance, and a deeper understanding of life.</p>
                </div>
            </div>
        </div >
    )
}

export default Offerings