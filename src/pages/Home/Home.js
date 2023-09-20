import React from "react";
import "./home.scss";
import Button1 from "../../components/Button1";
import Button2 from "../../components/Button2";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {carousel_data1} from "../../data/data";

import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
    return (
        <div className="home_container">
            <section className="home_section1">
                <div className="container2">
                    <h3>Experience On-Demand, Lab-Based Training With INE</h3>
                    <p>
                        Experience a training platform that puts real-world,
                        practical learning first - regardless of skill level.
                        Learn from expert instructors and prove your knowledge
                        in Networking, Cyber Security, Cloud and Data Science.
                    </p>
                    <span>
                        <Button2 text="Explore Training Options" />
                        <Button1 text="Schedule a Demo" />
                    </span>
                    <h2>
                        Trust your upskilling to the organization that invented
                        Hands-On Training. Just like the world's top companies
                        have.
                    </h2>
                </div>
            </section>
            <section className="home_section2">
                <div className="alice_carosel">
                    <Swiper
                        style={{padding: "50px 10px"}}
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={100}
                        slidesPerView={6}
                        navigation
                        mousewheel={true}
                        direction="horizontal"
                        //   pagination={{ clickable: true }}
                        scrollbar={{draggable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        {carousel_data1.map((item) => (
                            <SwiperSlide> {item} </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="text_section">
                    <h3>Why INE?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus veritatis cumque quibusdam, iure provident
                        fugiat deserunt rem distinctio accusamus alias, culpa
                        molestias, harum fugit voluptates laboriosam quas? Ea
                        similique fugiat quos, non reprehenderit placeat nobis
                        
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
