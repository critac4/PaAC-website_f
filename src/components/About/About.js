import React, { useEffect, useState } from "react";
import "./About.css";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import { Secy, Head, Member } from "./Data.js";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import Spline from "@splinetool/react-spline";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  AOS.init({ duration: 600 });
  // const [year, setYear] = useState(4);
  return (
    <div className="about-container">
      <div className="about-topbar">
        <Topbar />
      </div>
      <div className="about-parent">
        <div className="about-intro">
          <Spline scene="https://prod.spline.design/p5QUEugrUKi3Nm20/scene.splinecode" />
        </div>
      </div>

      <div className="members">
        {/* <div className="members-secys" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    {Secy.map((value) => (
                    <Card
                    id = {value.name}
                    name={value.name} 
                    img = {value.image}
                    position ={value.position}
                    linkedIn = {value.linkedIn}
                    email = {value.email}
                    /> ))}
                </div>
                <div className="line-container" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <div className="horizontal-line"></div>
                </div>
                <div className="members-heads" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                {Head.map((value) => ( 
                    <Card 
                    id = {value.name}
                    name={value.name} 
                    img = {value.image}
                    position ={value.position}
                    linkedIn = {value.linkedIn}
                    email = {value.email} 
                    /> ))}
                </div>
                <div className="line-container" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <div className="horizontal-line"></div>
                </div>
                <div className="members-btn" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                    <button className={"members-btn-year " + (year === 1? "active-year":"") } onClick={() => setYear(1)}>1st Y</button>
                    <button className={"members-btn-year " + (year === 2? "active-year":"") } onClick={() => setYear(2)}>2nd Y</button>
                    <button className={"members-btn-year " + (year === 3? "active-year":"") } onClick={() => setYear(3)}>3rd Y</button>
                    <button className={"members-btn-year " + (year === 4? "active-year":"") } onClick={() => setYear(4)}>4th Y</button>
                </div>
                <div className="members-members" data-aos="fade-up" data-aos-once="false" data-aos-easing="ease-in-out">
                {Member.map((value) =>{
                    if (value.year === year){
                        return <Card 
                        id = {value.name}
                        name={value.name} 
                        img = {value.image}
                        position ={value.position}
                        linkedIn = {value.linkedIn}
                        email = {value.email}
                    />
                    }
                    return null;
                })}
                </div> */}
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}
