import ActiveLink from "../../../components/ActiveLink";
import logo from '../../../assets/logo/logo1.png'
import banner from '../../../assets/banner/logo2.jpg'

const Header = () => {
    return (
        <div className=" mx-auto">
            <div className="flex navbar max-auto justify-between max-w-screen-xl mx-auto">
                <div >
                    {/* <a className="btn btn-ghost normal-case text-xl">TOY BOX</a> */}
                    <img className="w-2/4" src={logo} alt="" />
                </div>
                <div className="text-gray-800 font-semibold mr-60">
                    <ul className="flex gap-4 justify-between">
                        <li>
                            <ActiveLink to='/'>Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/all-toys'>All Toys</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/my-toys'>My Toys</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/add-a-toy'>Add A Toy</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/Blogs'>Blog</ActiveLink>
                        </li>
                    </ul>
                </div>
                {/* avate */}
                <div className="dropdown dropdown-end">
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>

                </div>
            </div>
        </div>

    );
};

export default Header;