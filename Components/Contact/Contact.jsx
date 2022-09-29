import './Contact.css';
import img1 from '../../images/Contact us-rafiki (1) 1.svg';
import { MDBBtn } from 'mdb-react-ui-kit';
import img2 from '../../images/laptop2.jpg';
import 'aos/dist/aos.css';
import img3 from '../../images/arin5.jpg';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
const [name,setName] = useState('');
const [mail,setMail] = useState('');
const [msg,setMsg] = useState('');
const [loading,setLoading] = useState(true);
const form = useRef()


const handleSubmit = () => {

  emailjs.sendForm('service_0oiso62', 'template_oshhr2c' , form.current,
  'xf42fBPmvSDYYDpGW'  )
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});

  setLoading(false);

 
}

    return ( 
        <div className="contact">
            
            <div className="main">
            <h2 data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80" data-aos-delay="400">Contact Us</h2>
          <p data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="120" data-aos-delay="400">We’re happy to answer any questions you may have, just send us a message and we’ll be 
            sure to get in touch with you as soon as possible.</p>
            </div>

           <div className="contact-body">
           <div className="left-contact ">
            <h3 >Get In Touch</h3>

            <form ref={form} onSubmit={handleSubmit} >

            <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} required />

            <input type="email" required placeholder='Email '  name="user_email" value={mail} onChange={(e)=> setMail(e.target.value)} />

            <textarea name="" id="" cols="20" rows="6" placeholder='Message' value={msg} onChange={(e)=> setMsg(e.target.value)} required></textarea>

           { loading &&  <MDBBtn className='btn1 button-c' rippleDuration={1000}  size='sm'>Submit Form</MDBBtn>  }
           {! loading &&  <MDBBtn className='btn1 button-c' rippleDuration={1000} disabled  size='sm'>Submitting Form</MDBBtn> }
            

            </form>
           </div>
           <div className="right-contact ">
          <img className=' img-c ' data-aos="zoom-out"   data-aos-duration="2500" data-aos-offset="80" data-aos-delay="200"  src={img1} alt="" />
           </div>
           </div>

           <div className="sub-main">
           {/*CARD1*/}
           <div className="cards1 ">
           <div data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="130" data-aos-delay="400">
            <h6>Email</h6>
            <h3>info@easybank.com</h3>
            <p>With our game-changing technology,
                 we help financial institutions.Contact us via the email above for 
                 possible collaborations.</p>
                 <MDBBtn className='btn1 card-btn' rippleDuration={1000}  size='sm'>Send Us A Mail</MDBBtn>
           </div>
           <div>
            <img className='' src={img2} alt="" />
           </div>
            </div>

              {/*CARD1*/}
              <div className="cards2">
            <div>
            <img className='' src={img3} alt="" />
           </div>
           <div data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="160" data-aos-delay="400">
            <h6 >In App</h6>
            <h3>Chat With Arin</h3>
            <p>Ask Arin.Simply tap on the chat with Arin button on the home screen of your Easybank app and ask 
                her any of your Easybank related questions.</p>
                 <MDBBtn className='btn1 card-btn' rippleDuration={1000}  size='sm'>Start Chat</MDBBtn>
           </div>
            </div>

           </div>
        
        </div>
     );
}
 
export default Contact;