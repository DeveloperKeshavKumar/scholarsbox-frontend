import imgPath from '../assets/hero.jpg';

export const HomepageHero = () => {
    return (
        <div className="w-11/12 max-w-5xl m-auto mt-8">

            <div className="bg-cover bg-center bg-no-repeat h-[500px] border rounded-lg flex flex-col justify-end pb-[2.5rem] pl-3" style={{ backgroundImage: `url(${imgPath})` }}>
                <h1 className="text-5xl font-extrabold text-white text-wrap text-left">Discover and share the projects that <br /> matter most to you.</h1>
            </div>
        </div>
    )
}
