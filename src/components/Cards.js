
function Cards(props) {
   
    return(
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                <img src={require("/src/img/" + props.item.image)} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">{props.item.name}</h5>
              <p className="text-sm text-darkGrayishBlue">
                {props.item.content}
              </p>
                </div>
    )
}
export default Cards