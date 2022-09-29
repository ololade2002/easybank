import './Career.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import img1 from '../../images/online.jpg';
import img5 from '../../images/bankers.jpg';
import Testimonial from './testimonial';

const Career = () => {

    return ( 
        <div className="career">

            <div className="career-body">
                
            <div className="custom-shape-divider-bottom-1664228237">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>
             <div className="left-career ">
            
                <h2  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80" data-aos-delay="400">Do you want to join Easybank team ?</h2>
                <p  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="120" data-aos-delay="400" >We are a creative tribe of diverse talents building an exciting financial ecosystem that lives on your smartphone and helps you make financial decisions 
                    in a simple and smarter way. </p>
                    <MDBBtn  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="130" data-aos-delay="400" className='btn1 card-btn btn-c' rippleDuration={1000}  size='sm'>See Current Openings</MDBBtn>
             </div>
             <div className="right-career text-center ">
                <img className='img-fluid' src={img1} alt="" />
             </div>
            </div>


            <div className="career-main">
                <div className="main-left">
                      <div className="text-c">
                    <h6  data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="80" data-aos-delay="400">OUR MISSION</h6>
                    <h2>Easybank is not your everyday bank.</h2>
                    <p>"We are creating access to financial freedom for everyone by connecting our users with financial solutions using a simple mobile platform. We are building an inclusive economy and breaking down barriers by using technology,
                         innovation and data to empower those who are currently under served."</p>
                         <p  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80" data-aos-delay="400">Does this seem like a team you’d love to be a part of? Join us!”</p>
                         </div>
                         <div className="blob"  data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="200" data-aos-delay="400" ></div>
                </div>
                <div className="main-right">
               <img src={img5} className='img-fluid' alt="" />
                </div>
            </div>
 
            <Testimonial/>

        </div>
     );
}
 
export default Career;