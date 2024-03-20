import imgPath from '../assets/icon.png'
export default function UserProjectCard() {
    return (
        <div className="mb-3 ml-5">
            <div className="flex gap-x-4 items-end flex-wrap">
                <img src={imgPath} alt="project" className="w-[50px] rounded bg-yellow-300 " />
                <div className="flex flex-col">
                    <h2 className="text-left font-medium">Error Handler</h2>
                    <p className="text-left text-gray-500">Dec 2023-Jan 2024</p>
                </div>
            </div>
        </div>
    )
}
