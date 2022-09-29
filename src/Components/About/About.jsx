import './About.css';

import img2 from '../../images/about4.jpg';
import img3 from '../../images/account.png';
import img4 from '../../images/dot.png';
import img5 from '../../images/analyse.png';
import img6 from '../../images/payments.svg';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import CountUp from 'react-countup';

const About = () => {

    return ( 
        <div className="about">

           <div className="about-head">
           <div className="about-body">
            <div className="about-left ">
            <h1  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80" data-aos-delay="400">We are not just a bank, we're a tribe...</h1>
            <p  data-aos="fade-up-"   data-aos-duration="2500" data-aos-offset="100" data-aos-delay="400" >Explore an easier and better way to save,
                 make payments, manage your money whenever you want, wherever you are!</p>
                 <p  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="105" data-aos-delay="400">Easybank is licensed by the Central Bank of Nigeria 
                    (CBN). All deposits are insured by the Nigerian Deposit Insurance 
                    Corporation (NDIC).</p>
            </div>
            <div className="about-right ">
          
            <img src={img2} alt="" />
            </div>
           </div>
           </div>


           {/*Numbers*/}
           <div className="numbers"  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="120" data-aos-delay="400">
            <div>
              <span><CountUp duration={4} start={50} end={100}></CountUp>K +</span>
           <span>Transaction Value Processed</span> </div>

            <div>
              <span><CountUp duration={4} end={10}></CountUp>K +</span>
              <span>Physical Cards Issued</span> </div>

            <div> <span><CountUp start={6} duration={4} end={14}></CountUp>M +</span>
              <span>Amount In Deposit</span></div>

            <div> <span><CountUp duration={4} end={30}></CountUp>K +</span>
              <span>Number Of Customers</span></div>
           </div>

          {/*ABOUT US*/}
          <div className="about-us">

            {/*ABOUT_1*/}
            <div className="about-1">
           <div className="us-left"  data-aos="fade-up-left"   data-aos-duration="2500" data-aos-offset="120" data-aos-delay="400">
            <h6>ABOUT US</h6>
            <h3>We will provide the freedom and transparency your money deserves. Your money
                is safe with us.
            </h3>
           <h3> With Easybank, it is more than just banking. It is 
                improving your financial lifestyle.</h3>
           </div>
           <div className="us-right text-center">
            <img src={img3} alt=""  data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="200" data-aos-delay="400"  />
            <img src={img4} alt=""  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80" data-aos-delay="400" />
            <img src={img4} alt=""  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80" data-aos-delay="400"  />
           </div>
           </div>

          {/*ABOUT_2 */}
           <div className="about-2">
            <div className="about2-left"  data-aos="fade-up-right"   data-aos-duration="2500" data-aos-offset="125" data-aos-delay="400">
                <h6>BREAKDOWN & ANALYTICS</h6>
                <h2>Analyse your expenses and categorise your finances</h2>
                <h3>Keep track of what you spend, when you spend and how you spend. 
                    Get the daily, weekly and monthly breakdown of your expenses and 
                    find out which habit you feed the most.
                You get a month in view of all your finances showing various tags 
                and categories of what was spent in the previous month.</h3>
            </div>
            <div className="about2-right text-center">
                <img src={img5} data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="200" data-aos-delay="400" alt="" />
            </div>
            </div> 


         {/*ABOUT_3*/}
         <div className="about-3">
            <div className="about3-left text-center">
                <img src={img6} alt="" data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="200" data-aos-delay="400" />
            </div>
            <div className="about3-right"  data-aos="fade-up-left"   data-aos-duration="2500" data-aos-offset="130" data-aos-delay="400">
                <h6>TRANSFERS & BILLS PAYMENTS</h6>
                <h2>Send & Request Money and Bills Payments made easy</h2>
                <h3>Send, request money, or split bills with friends and family instantly
                    , whether they are sparklers or from other Nigerian banks.</h3>
                    <h3>Also top up mobile airtime, data, cable, utility & transport bills. 
                        Other exciting payment features like scheduled 
                        payments, QR payment 
                         </h3>
            </div>
         </div>


          {/*ABOUT_4*/} 

          <div className="about-2">
            <div className="about2-left"  data-aos="fade-up-right"   data-aos-duration="2500" data-aos-offset="140" data-aos-delay="400">
                <h6>ACCOUNT OPENING & SAVINGS</h6>
                <h2>Open a Easybank Account in minutes & start saving</h2>
                <h3>Open a Easybank Account with no documents or bank queues. 
                    All can be done on your smartphone in under 5 minutes.
You can save money for rainy days using our Sparkle Stash feature which allows you save as you 
like, periodically, with investments, and with a group of people</h3>
<MDBBtn className='button btn1' rippleDuration={1000}  size='sm' ><Link to='/account'>
                         <span>Learn More</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>  </Link>
</MDBBtn> 
            </div>
            <div className="about2-right text-center">
                <img src={img3} data-aos="zoom-in"   data-aos-duration="2500" data-aos-offset="200" data-aos-delay="400" alt="" />
            </div>
            </div> 



          </div>


          <div className="faqs">
            <h2 data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="160" data-aos-delay="400">Easybank Business FAQS </h2>

            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I get an Easybank Business account?</Accordion.Header>
        <Accordion.Body>
        First, you download the Easybank application from Appstore or Playstore, open a personal account and then create a 
        usiness account. Your journey begins with a personal account
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do I access my business account from the Easybank app?</Accordion.Header>
        <Accordion.Body>
        Both personal and business accounts are accessible via the Easybank app, you only need to toggle between both accounts whenever you need to.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Do I need a personal Easybank account to have a Easybank Business account?</Accordion.Header>
        <Accordion.Body>
        Yes, the first step to getting a Sparkle Business account is getting a personal account. Your Sparkle business account profile will be added to your existing
         personal profile and you can navigate between your business and personal account in one switch.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are the charges on the Easybank Business account?</Accordion.Header>
        <Accordion.Body>
        On your Business account, you are charged for transfers, bills payments, Tax services etc. We do not charge any account maintenance charges;
         you’re only charged on services you utilize.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can I delete my invoices?</Accordion.Header>
        <Accordion.Body>
        Yes, both pending invoices and paid invoices can be easily deleted.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>How do I create an invoice?</Accordion.Header>
        <Accordion.Body>
        You must create your inventory first before you can generate an invoice. After which you click on the invoice feature and create an invoice
         by adding the items/services you want to offer.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


          </div>
         

        </div>
     );
}
 
export default About;