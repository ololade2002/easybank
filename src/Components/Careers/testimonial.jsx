import './testimonial.css';
import { testimonialData } from '../../Data/data';
import { useState } from 'react';
import leftArrorw from '../../images/left-arrow-alt-regular-24 (1).png';
import rightArrow from '../../images/right-arrow-alt-regular-24 (1).png';
import {motion} from 'framer-motion';

const Testimonial = () => {
    const [selected,setSelected] = useState(0);
    const tLength = testimonialData.length;
    const transition = { type:'spring',duration:3}

    return ( 
        <div className="team-head">
               <h3>Meet The Team</h3>
               <div className="team-preview">
               <div className="left-t"  data-aos="zoom-out"   data-aos-duration="2500" data-aos-offset="140" data-aos-delay="400">
                <motion.div   initial={{opacity:0,x:-100}}
                 animate={{opacity:1,x:0}}
                 exit={{opacity:0, x: 100}}
                 transition={transition} >
                    <h5>{testimonialData[selected].text}</h5>
                    <h6>-{testimonialData[selected].name}</h6>
                    <p>{testimonialData[selected].job}</p>
                </motion.div>
              </div>

              <div className="right-t text-center">

                <motion.div initial={{opacity:0, x: -100}}
                transition={{...transition , duration:2}}
                whileInView={{opacity:1,x:0}} className='div1'></motion.div>
                <motion.div initial={{opacity:0, x: -100}}
                transition={{...transition , duration:2}}
                whileInView={{opacity:1,x:0}} className='div2'></motion.div>

            <motion.img className='img-t' initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:1,x:-100}}
                transition={transition} src={testimonialData[selected].image} alt="" />

              <div className="arrows text-center">
            <div className="left-arrow">
                <img src={leftArrorw} onClick={()=>{selected === 0 ? setSelected(tLength-1) : 
                    setSelected((prev)=>prev-1) }} alt="" />
            </div>
            <div className="right-arrow">
                <img src={rightArrow} alt="" onClick={()=>{selected === tLength - 1 ? setSelected(0) : 
                setSelected((prev)=>prev + 1) }} />
            </div>
              </div>

              </div>
              </div>

        </div>
     );
}
 
export default Testimonial;