import star from '../assets/star.gif'
import lotus from '../assets/lotus.gif'
import introVideo from '../assets/intro-video.mp4'

function HeroSection() {
    return (
        <div className="container text-3xl mt-40 mx-auto px-4">
            <div className="flex justify-between py-10">
                <div>
                    <img src={star} alt="star" />
                    <div className="flex justify-start">
                        <div>
                            <h1 className="text-6xl font-extrabold">Find-Divine</h1>
                            <h1 className="text-8xl font-extrabold">Answers</h1>
                            <div className="mt-10">
                                <h1 className="text-4xl font-extrabold">Daily Horoscope, Puja</h1>
                                <h1 className="text-4xl font-extrabold">Vidhi, Compatibility etc</h1>
                            </div>
                        </div>
                        <div>
                            <img src={lotus} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block left-40 w-2/4 mt-20 object-cover rounded-[50px] overflow-hidden">
                    <video autoPlay loop muted >
                        <source src={introVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default HeroSection