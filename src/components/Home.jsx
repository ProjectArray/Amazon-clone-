import React,{useState} from 'react'
import "./Home.css"
import Product from './Product'
import { v4 as uuidv4 } from 'uuid';


function Home(props) {
  // const [count,setCount]=useState(0);
  // const getData= () => {
  //   setCount(count +1);
  //   props.getCountHome(count);

  // }
  return (
    <div className='home'>
    <div className='home__container'>
        <img className="home_image" src='https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner-1024x334.jpg' 
        alt="banner imgage" />
        <div className='home__row'>
            <Product 
              key={uuidv4()}
              id={uuidv4()}
              title="Vivo Y56 5G (Black Engine, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
              price={29.0}
              rating={3}
              image="https://m.media-amazon.com/images/I/41xnfQ6+TCL._SY300_SX300_.jpg"
              cartNumber={() => {
                props.getCountHome()
              }}
            />
            <Product 
              key={uuidv4()}
              id={uuidv4()}
              image="https://m.media-amazon.com/images/I/81wJJj6jLfL._SY355_.jpg"
              title="        HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 11/MS Office/Xbox Game Pass),16-E0162ax     "
              price={100}
              rating={4}
              cartNumber={() => {
                props.getCountHome()
              }}
            />
            {/* product 2 */}

        </div>
        <div className='home__row'>
        <Product
        key={uuidv4()}
        id={uuidv4()}
        title="Fastrack New Limitless FS1 Smart Watch|Biggest 1.95 Horizon Curve Display|SingleSync BT Calling v5.3|Built-in Alexa|Mega 10 Day Battery|ATS Chipset with Zero Lag|100+ Sports Modes|150+ Watchfaces" 
        image="https://m.media-amazon.com/images/I/71KpoPUzJ2L._UL1500_.jpg"
        price={20}
        rating={5}
        cartNumber={() => {
                props.getCountHome()
              }}
         />
        <Product 
          key={uuidv4()}
          id={uuidv4()}
          image="https://m.media-amazon.com/images/I/514xUT1xYVL._UL1500_.jpg"
          title="Safari Pentagon Trolley Bags for Travel, 55 cm Cabin Suitcase, 4 Wheel Cyan Small Luggage for Men and Women, Polypropylene Hard Side Cabin Bag"
          price={60}
          rating={5}
          cartNumber={() => {
                props.getCountHome()
              }}
        />
        <Product 
          key={uuidv4()}
          id={uuidv4()}
          image="https://m.media-amazon.com/images/I/71sRTA09UXL._SX679_.jpg"
          title="AmazonBasics Neoprene Dumbbells"
          price={20}
          rating={3}
          cartNumber={() => {
                props.getCountHome()
              }}
        />
            {/* product 2 */}
            {/* product 3 */}


        </div>
        <div className='home__row'>
            {/* product 1 */}
        <Product
        key={uuidv4()} 
        id={uuidv4()} 
        image="https://m.media-amazon.com/images/I/71d5fMDvq9L._SX522_.jpg"
        title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"
        price={80}
        rating={5}
        cartNumber={() => {
                props.getCountHome()
              }}
        />
        
        

        </div>

    </div>
    </div>
  )
}

export default Home
