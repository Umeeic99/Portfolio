import React, { useEffect, useState } from 'react'
import AnimatedLettersFast from './AnimatedlettersFast'
import "./scss/about.scss"
const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "01. About Me".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)

    })
    return (
        <div className='about'>
            <div className="about__left">
                <span className="sectiontag">&lt;section&gt;</span>
                <h1 className="about__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
                <div className='about__description'>
                    Hello! My name is <span className='about__link'>Umar&nbsp;Khalid</span> and  I am a full stack developer who love programming, Developing, learning and problem solving. 
Recent university graduate with background in web development. Excellent focus, communication, and ability to learn rapidly. Excels working in a team environment..<br />
                    <br />
                    Well-organised person, problem solver  with high attention to detail. Fan of Gaming esports, outdoor activities, web series, indian movies.<br />
                    <br />
                    Here are the few technologies that I'have been working recently: <br />
                    <ul className='about__skillsList'>
                        <li className='about__skillsItems'>Javascript(ES6+)</li>
                        <li className='about__skillsItems'>PHP</li>
                        <li className='about__skillsItems'>HTML/CSS</li>
                        <li className='about__skillsItems'>Node js</li>
                        <li className='about__skillsItems'>Express js</li>
                        <li className='about__skillsItems'>React js</li>
                        <li className='about__skillsItems'>MongoDb</li>
                        <li className='about__skillsItems'>sequelize js</li>
                        <li className='about__skillsItems'>Passport js</li>
                        <li className='about__skillsItems'>React Redux</li>
                        <li className='about__skillsItems'>SQL</li>
                        <li className='about__skillsItems'>Amazon Web Services</li>
                        <li className='about__skillsItems'>Mongoose ODM</li>
                    </ul>
                </div>
                <span className="sectiontag">&lt;/section&gt;</span>
            </div>
            <div className="about__right">
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-python"></use>
                            </svg>
                        </div>
                        <div className="face2">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-css3"></use>
                            </svg>
                        </div>
                        <div className="face3">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-javascript"></use>
                            </svg>
                        </div>
                        <div className="face4">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-mongodb"></use>
                            </svg>
                        </div>
                        <div className="face5">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-node-dot-js"></use>
                            </svg>
                        </div>
                        <div className="face6">
                            <svg className="about__icon">
                                <use href="icons/symbol-defs.svg#icon-react"></use>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
