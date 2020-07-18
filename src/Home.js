import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__banner" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
            alt=""/>
            <div className="home__row">

            <Product
                id="23674765"
                title="BalanceFrom GoYoga All Purpose High Density Non-Slip Exercise Yoga Mat with Carrying Strap"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/91ofLiMz2hL._AC_UL320_.jpg"
            />
            <Product
                id="23674765"
                title="Xbox One S Two Controller Bundle (1TB) Includes Xbox One S, 2 Wireless Controllers, 1-Month Game Pass Trial, 14-day Xbox Live Gold Trial"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/61OK-9oZ7PL._AC_UY218_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="23674473"
                title="Resistance Band Set, Pull Up Assist Bands - Stretch Resistance Band - Mobility Band Powerlifting Bands "
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/619YXOkQGCL._AC_UY218_.jpg"
            />
            <Product
                id="23674896"
                title="Huawei Mate SE Factory Unlocked 5.93” - 4GB/64GB Octa-core Processor| 16MP + 2MP Dual Camera| GSM Only |Grey"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/811cPuY63mL._AC_UY218_.jpg"
            />
            <Product
                id="23674753"
                title="She's With Me (With Me (1))"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81hkvZ3E5tL._AC_UL320_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="23674294"
                title="SAMSUNG 75-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa Built-in (QN75Q80TAFXZA, 2020 Model) "
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/61UxxNFRsRL._AC_UY218_.jpg"
            />
            </div>
        </div>
    )
}

export default Home

