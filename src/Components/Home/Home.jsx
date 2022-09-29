import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import { MDBBtn } from 'mdb-react-ui-kit';
//import img1 from '../../images/bg-intro-desktop.svg';
import img2 from '../../images/image-mockups.png';
import Why from './Why';
import Article from './Articles/article';

const Home = () => {
    AOS.init();
    return ( 
        <div className="hero">

            {/*HOME */}
        <div className="home ">
      
            <div className='home-left ' >
                <h2  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80"
                data-aos-delay="200" className='' >Next generation digital banking</h2>
                <p  data-aos="fade-up" data-aos-duration="2500">Take your finacial life online. Your Easybank account 
                    will be a one-stop-shop for spending,saving,budgeting,investing,
                    and much more.
                </p>
                <MDBBtn  data-aos="fade-up" data-aos-duration="2500" className='btn1' rippleDuration={1000}  size='sm'>Request Invite</MDBBtn>
            </div>
            <div className='home-right text-center ' >
                
                <img data-aos=""   data-aos-duration="2500" data-aos-offset="80"
                data-aos-delay="200" className='img2 img-fluid ' src={img2} alt="" />
            </div>
        </div>

          {/* WHY */}
          <Why/>

          {/*ARTICLES*/}
          
<Article/>

        </div>
     );
}
 
export default Home;