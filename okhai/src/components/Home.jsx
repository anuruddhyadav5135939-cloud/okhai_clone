import React, { useState, useEffect } from 'react'
import slider1 from '../assets/HomeImages/slider1.webp'
import slider2 from '../assets/HomeImages/slider2.webp'
import slider3 from '../assets/HomeImages/slider3.webp'
import slider4 from '../assets/HomeImages/slider4.webp'
import slider5 from '../assets/HomeImages/slider5.webp'
import left_arrow from '../assets/HomeImages/left-scroll-arrow.svg'
import right_arrow from '../assets/HomeImages/right-scroll-arrow.svg'


import collection1 from '../assets/HomeImages/woman-empowerment.avif'
import collection2 from '../assets/HomeImages/circular-fashion.webp'
import collection3 from '../assets/HomeImages/susatainable.avif'
import collection4 from '../assets/HomeImages/heirloom-craft.avif'
import collection5 from '../assets/HomeImages/easy-return.avif'

const Home = () => {
    return (
        <>
            <div className=' py-65'>
                <div>
                    <Images />
                    <Section />
                </div>

            </div>
        </>
    )
}

export default Home

// images Scroller slider  

const Images = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { id: 1, images: slider1 },
        { id: 2, images: slider2 },
        { id: 3, images: slider3 },
        { id: 4, images: slider4 },
        { id: 5, images: slider5 },
    ];

    // auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goLeft = () => {
        setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
        );
    };

    const goRight = () => {
        setCurrentIndex(
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <div
            className="
                relative w-full overflow-hidden
                h-50
                sm:h-95
                md:h-120 
                lg:h-145
                xl:h-200 
                
            "
        >
            {/* image */}
            <img
                src={images[currentIndex].images}
                alt="Slider Images"
                className="w-full h-full object-cover transition-all duration-500"
            />

            {/* arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 md:px-10">
                <span onClick={goLeft} className="cursor-pointer">
                    <img
                        src={left_arrow}
                        alt="left arrow"
                        className="
                            h-6
                            sm:h-8
                            md:h-10
                            lg:h-12
                        "
                    />
                </span>

                <span onClick={goRight} className="cursor-pointer">
                    <img
                        src={right_arrow}
                        alt="right arrow"
                        className="
                            h-6
                            sm:h-8
                            md:h-10
                            lg:h-12
                        "
                    />
                </span>
            </div>
        </div>
    );
};

// some images Part 
const Section = () => {
    const item = [
        { id: 1, img: collection1, txt: "Women Empowerment" },
        { id: 2, img: collection2, txt: "Circular Fashion  " },
        { id: 3, img: collection3, txt: "Sustainable" },
        { id: 4, img: collection4, txt: "Heirloom Crafts" },
        { id: 5, img: collection5, txt: "Easy Returns" },
    ]

    return (
        <div className="w-full bg-white py-8">
            <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
                {item.map((itm) => (
                    <div
                        key={itm.id}
                        className="flex flex-col items-center text-center space-y-2"
                    >
                        {/* icon */}
                        <img
                            src={itm.img}
                            alt={itm.txt}
                            className="h-12 w-12 object-contain"
                        />

                        {/* text */}
                        <h6 className="text-sm font-medium text-gray-700">
                            {itm.txt}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    );


}


