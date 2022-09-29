import './footer.css';
import logo from '../../images/logo.svg';
import img1 from '../../images/icon-facebook.svg';
import img2 from '../../images/icon-youtube.svg';
import img3 from '../../images/icon-twitter.svg';
import img4 from '../../images/icon-pinterest.svg';
import img5 from '../../images/icon-instagram.svg';
import { MDBBtn } from 'mdb-react-ui-kit';


const Footer = () => {

    return ( 
        <div className="footer">
            <div className='left'>
                <div>
                    <img className='logo-f' src={logo} alt="" />
                </div>
                <ul className="socials ">
                    <li><img src={img1} alt="" /></li>
                    <li><img src={img2} alt="" /></li>
                    <li><img src={img3} alt="" /></li>
                    <li><img src={img4} alt="" /></li>
                    <li><img src={img5} alt="" /></li>
                </ul>
            </div>

            <div className='middle'>
                <span>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </span>
                <span>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy</li>
                </span>
            </div>

            <div className='right '>
                <MDBBtn className="button btn1  rippleDuration={1000}  size='sm' ">Request Invite</MDBBtn>
                <span>&copy;Easybank.All Rights Reserved</span>
            </div>
        </div>
     );
}
 
export default Footer;