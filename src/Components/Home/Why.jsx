import './Why.css';
import { bankData } from '../../Data/data';
import { useState } from 'react';



const Why = () => {
const [selected,setSelected] = useState(0);

    return ( 
        <div className="why" >
<h1 data-aos="fade-up" data-aos-offset="150" 
        data-aos-easing="ease" data-aos-delay="400" data-aos-duration="2500">Why choose Easybank ?</h1>
        <p data-aos="fade-up" data-aos-offset="150" 
        data-aos-easing="ease" data-aos-delay="400" data-aos-duration="2500" >We leverage Open Banking to turn your bank account into your
             financial hub. Control 
  your finances like never before.</p>


  <div className="why-card" >
  {bankData.map((bank,index)=> (
            <div className={selected === index ? 'card-preview active ' : 'card-preview'} onClick={()=>setSelected(index)} key={index}>
            <img src={bank.img} alt="" />
            <h2>{bank.title}</h2>
            <span>{bank.text}</span>
            </div>
         ))}
  </div>

        </div>
     );
}
 
export default Why;