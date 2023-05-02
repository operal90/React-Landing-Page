import Card from "./Card";
import {data1} from "../data";

function Content() {
    const main = data1.map(item => {
        return(
            <Card 
            key={item.id}
            item={item}/>
        )
    })
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
       <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
      {/* Number List */}
      <div className="flex flex-col space-y-8 md:w-1/2">
          
            {main}
          </div>
     
    </div>
  );
}
export default Content;
