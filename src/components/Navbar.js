import Logo from "../img/logo.svg"
function Navbar() {
    return (
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            {/* Logo goes here */}
            <div className="pt-2">
                <img src={Logo} alt="" />
            </div>
            {/* Menu goes here */}
            <div className="hidden space-x-6 md:flex">
                <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                <a href="#" className="hover:text-darkGrayishBlue">Product</a>
                <a href="#" className="hover:text-darkGrayishBlue">About</a>
                <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
                <a href="#" className="hover:text-darkGrayishBlue">Community</a>
            </div>
            <div>
                <a href="" className="p-3 px-6 pt-2 bg-brightRed rounded-full self-baseline hover:bg-brightRedLight">Get Started</a>
            </div>
        </div>
        
      </nav>
    );
  }
  
  export default Navbar;
  