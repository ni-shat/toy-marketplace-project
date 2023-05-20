import logo from '../../../assets/logo/logo2.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-100 text-base-content text-center flex gap-10 justify-around mt-52 ">
            {/* <div className='bg-red-200'> */}
                <div>
                    <div className="w-[98px] h-[127px] mb-5">
                        {/* <a className="btn btn-ghost normal-case text-xl">TOY BOX</a> */}
                        <img className="w-full object-contain" src={logo} alt="" />
                    </div>
                    <p className='text-left'>TOY BOX Ltd.<br />Providing amazing playtoys since 1992</p>
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