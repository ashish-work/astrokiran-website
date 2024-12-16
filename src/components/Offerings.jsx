import tree from "../assets/tree.gif"
import compatibility from "../assets/compatibility.gif"
import puja from "../assets/puja.gif"
import mantras from "../assets/mantras.gif"
import remedy from "../assets/remedy.gif"
function Offerings() {
    return (
        <div className="container flex mt-20 mx-auto">
            <div className="flex gap-4 justify-between h-[500px]">
                <div className="p-2 border border-gray-300 rounded-[50px] w-80 flex flex-col items-center bg-gradient-to-r from-[#B0A3BC] to-[#F1CBEB]">
                    <img src={compatibility} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Compatibility</h1>
                    <p className="p-2 text-center">Discover your compatibility score to understand how well you and your partner align emotionally, mentally, and energetically for a harmonious relationship.</p>
                </div>
                <div className="p-2 border border-gray-300 rounded-[50px] w-80 flex flex-col items-center bg-[#1C73AF]">
                    <img src={remedy} alt="remedy" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Daily Remedies</h1>
                    <p className="p-2 text-center">Unlock your daily free Vedic remedies, offering simple yet effective solutions to balance energies and bring positivity to your day.</p>
                </div>
                <div className="p-2 border border-gray-300 rounded-[50px] w-80 flex flex-col items-center bg-[#CA5F3E]">
                    <img src={puja} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Puja Vidhi</h1>
                    <p className="p-2 text-center">Learn the correct way to perform puja with our step-by-step Puja Vidhi, ensuring your rituals are accurate, meaningful, and bring divine blessings.</p>
                </div>
                <div className="p-2 border border-gray-300 rounded-[50px] w-80 flex flex-col items-center bg-[#9D6083]">
                    <img src={mantras} alt="" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Healing Mantras</h1>
                    <p className="p-2 text-center">Learn the correct way to perform puja with our step-by-step Puja Vidhi, ensuring your rituals are accurate, meaningful, and bring divine blessings.</p>
                </div>
                <div className="p-2 border border-gray-300 rounded-[50px] w-80 flex flex-col items-center bg-[#34d399]">
                    <img src={tree} alt="tree" className="mb-4 w-60 h-60" />
                    <h1 className="text-3xl font-extrabold">Hope Tree</h1>
                    <p className="p-2 text-center">Learn the correct way to perform puja with our step-by-step Puja Vidhi, ensuring your rituals are accurate, meaningful, and bring divine blessings.</p>
                </div>
            </div>
            <div className="h-96">

            </div>
        </div >
    )
}

export default Offerings