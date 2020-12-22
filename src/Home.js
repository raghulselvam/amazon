import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
           <div className="products">
            <Product id="12345"
            title="Amazon Brand-Solimo Microfiber Reversable comforter,Single(Aqua Blue & Olive Green"
            rating={5}
            image="https://m.media-amazon.com/images/I/81Vzm0NAr8L._AC_UL320_.jpg"
            price={1500}/>
            <Product id="1234"
            title="Amazon Brand-Solimo Microfiber Reversable comforter,Single(Aqua Blue & Olive Green"
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/31K2WAq-dGL._AC_SX184_.jpg"
            price={1000}/>
            </div>

            <div className="products">
            <Product id="123456"
            title="High Living Executive Revolving Office Chair | Desk Chair - Black"
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/Coop-Brands/High_Living/banner2_WFH_1242x450._CB413375052_SY250_.jpg"
            price={20000}/>
            </div>
            <div className="products">
            <Product id="1000"
            title="Sanyo 1 Ton 3 Star Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, SI/SO-10T3SCIC White)"
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/31HSSj7RLiL._AC_SX184_.jpg"
            price={30000}/>
            <Product id="1002"
            title="Amazon Brand-Solimo Microfiber Reversable comforter,Single(Aqua Blue & Olive Green"
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/31K2WAq-dGL._AC_SX184_.jpg"
            price={15000}/>
            <Product id="1003"
            title="Samsung 28 L Convection Microwave Oven (CE1041DSB2/TL, Black, SlimFry)
            Visit the Samsung Store"
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Rx3ZhLy0L._AC_SX184_.jpg"
            price={1000}/>
            </div>
            <div className="products">
            <Product id="1001"
            title="Elica 60 cm 1200 m3/hr Auto Clean Chimney with Free Installation Kit (WD HAC TOUCH BF 60, 2 Baffle Filters, Touch Control, Black)"
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/31B1M34FXTL._AC_SX184_.jpg"
            price={5000}/>
            <Product id="1004"
            title="Smart Shelter Premium Heavy Duty Front/Top Load Washing Machine/Refrigerator/Dishwasher Stand/Trolley (100% Made of Metal)"
            rating={3}
            image="https://m.media-amazon.com/images/I/31pAqdBlTkL.jpg"
            price={1850}/>
            </div>

            
            
        </div>
    )
}

export default Home
