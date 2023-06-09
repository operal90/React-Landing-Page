import Image from "../img/illustration-intro.svg"
function Main() {
    return(
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
                >Bring everyone together to build better product</h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left"> Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.</p>
              <div className="flex justify-center md:justify-start">
                <a href="" className="p-3 px-6 pt-2 bg-brightRed rounded-full self-baseline hover:bg-brightRedLight">Get Started</a>
            </div>
            </div>
            <div className="md:w-1/2">
                <img src={Image} alt="" />
            </div>

        </div>
    )
}
export default Main