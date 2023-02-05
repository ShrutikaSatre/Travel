import React,{useEffect} from "react";
import './hotel.css';
import img from "../../assets/hotel1.jpg";
import img2 from "../../assets/hotel2.jpg";
import img3 from "../../assets/hotel3.jpg";
import img4 from "../../assets/hotel4.jpg";
import img5 from "../../assets/hotel5.jpg";
import img6 from "../../assets/hotel6.jpg";
import img7 from "../../assets/hotel7.jpg";
import img8 from "../../assets/hotel8.jpg";
import img9 from "../../assets/hotel9.jpg";

import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"
import {BsFillStarFill} from "react-icons/bs"
import Aos from "aos";
import 'aos/dist/aos.css';



// Let me paste the array named data
const Data = [
   {
    id:1,
    img:img,
    destTitle:'Hotel Blue bells',
    location:'Kerala',
    grade:'4.3',
    fees:'₹2,500',
    description:'This is a very unique luxurious hotel built in its own style, with all modern amenities , probably a few kms before the Munnar Town and amidst a beautiful tea estate.'
   },
   {
    id:2,
    img:img2,
    destTitle:'Hotel Sun and Wind',
    location:'Manali',
    grade:'4.0',
    fees:'₹999',
    description:'Thirty minutes to reach Manali mall road from Hotel Sun and Wind. Most of the celebrities stay in span & spa resort during the time of making the movie or any song making.'
 },
 {
    id:3,
    img:img3,
    destTitle:'Hotel Lake View',
    location:'Mahabaleshwar',
    grade:'4.2',
    fees:'₹1,499',
    description:'Boasting garden views, Jumbo Heavens 5 Bedroom Scenic Luxury Pool Villa features accommodation with an outdoor swimming pool, a terrace and a bar, around 4.1 km from Parsi Point. This villa has a private pool, a garden and free private parking.'
 },
 {
    id:4,
    img:img4,
    destTitle:'Hotel Amani Vagator',
    location:'Goa',
    grade:'4.6',
    fees:'₹2,999',
    description:'Located in Old Goa, 200 metres from Mandrem Beach, Mandrem Retreat Beach resort provides accommodation with a terrace, free private parking, a restaurant and a bar. Great Location, Great staff. Very Near to Mandrem Beach.'
 },
 {
    id:5,
    img:img5,
    destTitle:'Hotel The White Yak Leh',
    location:'Ladakh',
    grade:'4.5',
    fees:' ₹2,673',
    description:'Known for its antique-styled furniture and décor, Hotel White Yak Leh is also one of the most preferred choice of Bollywood stars and celebrities, when it comes to choosing from best hotels in Leh-Ladakh.'
 },
 {
   id:6,
   img:img6,
   destTitle:'Hotel Heritage Holiday Home',
   location:'Ooty',
   grade:'3.5',
   fees:'₹1,068',
   description:'Located in the beautiful blue city of Jodhpur, Ajit Bhawan Palace boasts of being the first Heritage Hotel of India.'
},
{
   id:7,
   img:img7,
   destTitle:'Hotel Padmini Palace',
   location:'Udaipur',
   grade:'4.5',
   fees:'₹1,399',
   description:'In close proximity to the medieval era of Udaipur, enjoy luxury and royalty with plush rooms, mesmerizing views and more at the Hotel Padmini Palace'
},
{
   id:8,
   img:img8,
   destTitle:'Hotel Stay Chill',
   location:'Hampi',
   grade:'3.5',
   fees:'₹1,499',
   description:'Staychillhampi is a Guesthouse located in between lush green paddy fields with open air multi-cuisine restaurant.'
},
{
   id:9,
   img:img9,
   destTitle:'Hotel Polo Towers',
   location:'Meghalaya',
   grade:'4.7',
   fees:'₹1,999',
   description:'Hotel Polo Towers Group is a collection of intimate luxury hotels hidden in holiday destinations across Meghalaya, Kolkata & more'
},




]
const Hotel = () => {
   useEffect(()=>{
      Aos.init({duration:2000})
  
    }, [])
    return(
         <section className="hmain container section">
            <div className="hsecTitle">        
                <h3 data-aos="fade-right" className="title">Suggested Hotels</h3>
            </div>
            <div className="hsecContent grid">
            {
                 Data.map(({ id, img, destTitle, location, grade, fees, description}) => {
                   return(
                     <div key={id} data-aos="fade-up"
                       className="hsingleDestination">
                      <div className="himageDiv flex">
                         <img src={img} alt={destTitle}/>
                     </div>
                     <div className="hcardInfo">
                        <h4 className="hdestTitle">{destTitle}</h4>
                         <span className="hcontinent flex">
                            <HiOutlineLocationMarker className="icon"/>
                            <span className="name">{location}</span>
                         </span>
                         <div className="hfees flex">
                            <div className="hgrade">
                                <h7>Rating:</h7>
                                <span>{grade}</span>
                            </div>
                            <div className="hprice flex">
                                <h5>{fees}</h5>
                                <small>Per Day</small>
                            </div>
                         </div>
                         <div className="hdesc">
                            <p>{description}</p>
                         </div>
                         <button className="btn flex">
                            BOOK<HiOutlineClipboardCheck className="icon"/>
                         </button>
                     </div>

                    </div>
                   )        
                })
            }
            </div>
                 
        </section>
    )
}
export default Hotel;