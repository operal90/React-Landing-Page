function Card(props) {
    return(
        <div
        className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
      >
       
        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div
              className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
            >
              {props.item.label}
            </div>
            <h3 className="text-base font-bold md:mb-4 md:hidden">
            {props.item.description}
            </h3>
          </div>
        </div>

        <div>
          <h3 className="hidden mb-4 text-lg font-bold md:block">
          {props.item.sub_description}
          </h3>
          <p className="text-darkGrayishBlue">
          {props.item.content}
          </p>
        </div>
      </div>
    )
}
export default Card