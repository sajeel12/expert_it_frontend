import React from "react";
import "./home.scss";
import Button1 from "../../components/Button1";
import Button2 from "../../components/Button2";

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
            <section className="home_section2" >
                

            </section>
        </div>
    );
};

export default Home;
