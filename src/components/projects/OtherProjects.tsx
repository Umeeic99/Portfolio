import AnimatedLettersFast from 'components/AnimatedlettersFast'
import React, { useState, useEffect } from 'react'
import "./otherProjects.scss"


const OtherProjects = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "Other Projects ".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)
    })

    return (
        <div className='other'>
            <span className="sectiontag">&lt;section&gt;</span>
            <div className="other__container">
                <h1 className="other__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
            </div>

            <ul className="other__list">
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/Umeeic99" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://github.com/Umeeic99" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Food Ordering App</div>
                            <p className='other__cardBodyDescription'>
                                Responsive pizza restaurant food ordering app UI design using React | Next.js. Design restaurant app using React Next.js and CSS. Next.js MongoDB restaurant (order food) project using React Redux. Full-stack Next.js APP.                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Material UI &nbsp; Nextjs &nbsp; Mongodb &nbsp; jwt-auth</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/Umeeic99" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://github.com/Umeeic99" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">INotebook</div>
                            <p className='other__cardBodyDescription'>
                                Notebook is made from the pain of writing all the things in notebook which is very hectic. So we made a online web platform where you can create,edit, upload,delete your notes / information privately and securely without any disturbancee,you can also access your notes anywhere in your world,at anytime time.</p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Material UI &nbsp; React &nbsp; MongoDB &nbsp; Expressjs</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/Umeeic99" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://github.com/Umeeic99" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-codepen"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Natours</div>
                            <p className='other__cardBodyDescription'>
                                Natours. An awesome tour booking site built on top of NodeJS. A Web design of tours and travelling usingAdvanced css i.e SCSS / SASS
                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> SCSS / SASS &nbsp; UI / UX &nbsp; Nodejs &nbsp; HTML</div>
                        </div>
                    </div>
                </li>
               
                
            </ul>
            <span className="sectiontag">&lt;/section&gt;</span>
        </div>
    )
}

export default OtherProjects