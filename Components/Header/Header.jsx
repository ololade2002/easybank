
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import {HiOutlineX} from 'react-icons/hi';

const Header = () => {

    const [mobile,setMobile] = useState(false);
   

    return ( 
        <div className="header ">
            <div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div>
                <ul className= {mobile ? 'nav-link-mobile': 'nav-link' } onClick={()=> setMobile(false)} >
                    <li><Link className='link'  to='/'>Home</Link></li>
                    <li><Link className='link' to='/careers'>Careers</Link></li>
                    <li><Link className='link' to='/about'>About </Link></li>
                    <li><Link className='link' to='/account'>Account</Link></li>
                    <li><Link className='link' to='/contact'>Contact</Link></li>
                </ul>
            </div>

            <div>
                <MDBBtn className='btn1' rippleDuration={1000}  size='sm'>Request Invite</MDBBtn>
            </div>

             {/*MENU*/}
             <button className='menu' onClick={()=> setMobile(!mobile)} >
                {mobile ? <HiOutlineX/> :  <HiOutlineMenu/> }
        
           </button>

        </div>
     );
}
 
export default Header;