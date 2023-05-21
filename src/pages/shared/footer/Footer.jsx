import logo from '../../../assets/logo/logo2.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-100 md:px-44  md:text-base-content mx-auto  md:text-base text-xs text-center grid grid-cols-2 gap-14 md:grid-cols-4 md:gap-10 justify-around mt-20 md:mt-52 ">
            <div>
                <div className="md:w-[98px] md:h-[127px] w-10 h-10 mb-5">
                    {/* <a className="btn btn-ghost normal-case text-xl">TOY BOX</a> */}
                    <img className="w-full object-contain" src={logo} alt="" />
                </div>
                <p className='text-left'>TOY BOX Ltd.
                <p> Providing amazing playtoys since 1992</p></p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Toy Rental</a>
                <a className="link link-hover">Wish List</a>
                <a className="link link-hover">Toy Customization</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            {/* </div> */}

        </footer>
    );
};

export default Footer;