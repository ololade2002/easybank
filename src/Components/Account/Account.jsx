import './Account.css';
//import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'aos/dist/aos.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


import { MDBBtn } from 'mdb-react-ui-kit';
import img1 from '../../images/banker6.jpg';
import img2 from '../../images/banker7.jpg';
import img3 from '../../images/bank-notes-768x669.jpg';
import img4 from '../../images/targer.jpg';
import img5 from '../../images/Take-a-Loan_-3.jpg';
import img7 from '../../images/alpher-web-banner-1.jpg';



const Account = () => {

    return ( 
        <div className="account">

            {/*Swiper */}
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img  src={img5} className='img-fluid s-img' alt="" /></SwiperSlide>
        <SwiperSlide> <img src={img7} className='img-fluid s-img' alt="" /></SwiperSlide>

       
      </Swiper>
          
        <div className="account1 ">
            <div className="account-left text-center ">
            <img data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="160" data-aos-delay="400" src={img1} alt=""/>
            </div>
            <div className="account-right " data-aos="fade-up-left"   data-aos-duration="2500" data-aos-offset="100" data-aos-delay="400">
                <h6>Savings Account </h6>
                <p>Savings Account
Open a savings account without any documentation. Save regularly at competitive interest rates
 with flexible withdrawals. An account designed for long term savings, offers concessions and other benefits.</p>
 <MDBBtn className='btn1' rippleDuration={1000}  size='sm'>Learn More</MDBBtn>
            </div>
            </div> 
         
         <div className="account2">
            <div className="account2-left" data-aos="fade-up-right"   data-aos-duration="2500" data-aos-offset="200" data-aos-delay="400">
                <h6>Current Account</h6>
                <p>A flexible current account to meet your everyday banking needs. This type of account is also a customised account for salary earners with 
                    the flexibility of an overdraft facility, zero maintenance fee, and access to personal loans.</p>
                    <MDBBtn className='btn1' rippleDuration={1000}  size='sm'>Learn More</MDBBtn>
            </div>
            <div className="account2-right text-center">
                <img data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="160" data-aos-delay="400" src={img2} alt="" />
            </div>
         </div>


         <div className="account1 ">
            <div className="account-left text-center ">
            <img data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="160" data-aos-delay="400" src={img3} alt="" />
            </div>
            <div className="account-right " data-aos="fade-up-left"   data-aos-duration="2500" data-aos-offset="250" data-aos-delay="400">
                <h6>Domiciliary Account </h6>
                <p>A foreign currency account that gives customers the option to bank in any of the 
                    three global currencies (US Dollars, Euros and GB Pounds).</p>
 <MDBBtn className='btn1' rippleDuration={1000}  size='sm'>Learn More</MDBBtn>
            </div>
            </div> 

            <div className="account2">
            <div className="account2-left" data-aos="fade-up-right"   data-aos-duration="2500" data-aos-offset="300" data-aos-delay="400">
                <h6>Target Savings</h6>
                <p>Tenured savings targeted at a future expense (e.g. school fees, medical bills), individuals with low 
                    disposable income. The product is available to 11 states in the northern part of Nigeria.</p>
                    <MDBBtn className='btn1' rippleDuration={1000}  size='sm'>Learn More</MDBBtn>
            </div>
            <div className="account2-right text-center">
                <img data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="160" data-aos-delay="400" src={img4} alt="" />
            </div>
         </div>


        </div>
     );
}
 
export default Account;