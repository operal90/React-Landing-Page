import Cards from "./Cards"
import {data2} from "../data";
function Testimonials () {
    const test = data2.map(item => {
        return(
            <Cards 
            key={item.id}
            item={item}/>
        )
    })
    return (
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">What's Different About Manage?</h2>
            <div className="hidden md:flex flex-col mt-24 md:flex-row md:space-x-6">
                {test}
            </div>
             <div className="mt-24 md:hidden">
                {test[0]} {/* Show only the first card on small screens */}
            </div>
            <div class="my-16">
            <a
              href="#"
              class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >Get Started</a
            >
          </div>
        </div>
     );
}
 
export default Testimonials;