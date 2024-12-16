import tree from "../assets/tree.gif"
import compatibility from "../assets/compatibility.gif"
import puja from "../assets/puja.gif"
import mantras from "../assets/mantras.gif"
import remedy from "../assets/remedy.gif"
import articles from "../assets/articles.gif"
function Offerings() {
    return (
        <div className="container flex flex-col mt-12 mx-auto">
            <div className="flex justify-between gap-10 mt-20">
                <div className="p-24 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-transparent">
                    <img src={compatibility} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Compatibility</h1>
                    <p className="text-center">Discover your compatibility score to understand how well you and your partner align emotionally, mentally, and energetically for a harmonious relationship.</p>
                </div>
                <div className="p-24 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-transparent">
                    <img src={remedy} alt="remedy" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Daily Remedies</h1>
                    <p className="text-center">Unlock your daily free Vedic remedies, offering simple yet effective solutions to balance energies and bring positivity to your day.</p>
                </div>
                <div className="p-24 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-transparent">
                    <img src={puja} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Puja Vidhi</h1>
                    <p className="text-center">Learn the correct way to perform puja with our step-by-step Puja Vidhi, ensuring your rituals are accurate, meaningful, and bring divine blessings.</p>
                </div>
            </div>
            <div className="flex justify-between gap-10 mt-20">

                <div className="p-24 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-transparent">
                    <img src={mantras} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Healing Mantras</h1>
                    <p className="text-center">Learn the correct way to perform puja with our step-by-step Puja Vidhi, ensuring your rituals are accurate, meaningful, and bring divine blessings.</p>
                </div>
                <div className="p-24 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-transparent">
                    <img src={tree} alt="tree" className="mb-4 w-auto h-60" />
                    <h1 className="text-3xl font-extrabold">Hope Tree</h1>
                    <p className="text-center">Learn the correct way to perform puja with our step-by-step Puja Vidhi, ensuring your rituals are accurate, meaningful, and bring divine blessings.</p>
                </div>
                <div className="p-24 border border-gray-300 rounded-[50px] w-96 flex flex-col items-center bg-transparent">
                    <img src={articles} alt="tree" className="mb-4 w-auto h-60" />
                    <h1 className="text-3xl font-extrabold">Articles</h1>
                    <p className="text-center">Learn the correct way to perform puja with our step-by-step Puja Vidhi, ensuring your rituals are accurate, meaningful, and bring divine blessings.</p>
                </div>
            </div>
        </div >
    )
}

export default Offerings