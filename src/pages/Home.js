import React from 'react'
import background from '../img/bg.jpg'
import "./home.css"
function Home() {
    return (
        <div>
            <figure class="relative w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 bg-gray-500  ">

                <img class="rounded-lg   mx-auto bg-blend-darken mix-blend-multiply bg-black w-[100vw] h-[76vh] lg:h-[90vh] " src={background} alt="image description" />

                <figcaption class="absolute px-4 text-white bottom-[20%] lg:bottom-[33%] ">
                    <h1 className='text-center text-3xl lg:text-4xl my-10 font-bold'>
                        MSP Provides Complete Training
                    </h1>
                    <p className='text-base lg:mx-32 mx-6'>
                        MSP provides course that includes computer training from basic to advanced computer courses like CCC, ADCA, DCA, CFA, DTP etc. It is designed to aim at imparting a basic level IT Literacy program. This program gives an opportunity to the common man to attain computer literacy and gain computer knowledge and Information Technology </p>
                </figcaption>
            </figure>


            <div class="wrapper">
                <h1>Our Course Categories</h1>
                <div class="cols1">
                    <div class="col1" ontouchstart="this.classList.toggle('hover');">
                        <div class="containerss">
                            <div class="front" style={{ backgroundImage: "url(https://i.ibb.co/NTwLWn4/undraw-Pair-programming-re-or4x.png)" }}>
                                <div class="inner">
                                    <p>Advance Diploma in Computer Applications </p>
                                    <span>(ADCA)</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>ADCA is a course that includes computer training from basic to advanced computer operation with accounting practical knowledge on tally ERP 9.0, Software Application knowledge on MS office (MS-WORD, MS-EXCEL, MS-POWER POINT), Typing, Tally ERP, CorelDraw Pagemake</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col1" ontouchstart="this.classList.toggle('hover');">
                        <div class="containerss">
                            <div class="front" style={{ backgroundImage: "url(https://i.ibb.co/ySmMs7v/undraw-Firmware-re-fgdy.png)" }}>
                                <div class="inner">
                                    <p>Diploma in Computer Application </p>
                                    <span>(DCA)</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>DCA, Diploma in Computer Applications, is a one-year diploma course in the field of Computer Applications which involves the study of numerous computer applications such as MS Office, Internet Applications, Operating System, Database Management System (DBMS).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col1" ontouchstart="this.classList.toggle('hover');">
                        <div class="containerss">
                            <div class="front" style={{ backgroundImage: "url(https://i.ibb.co/N2pPgCc/undraw-Web-developer-re-h7ie.png)" }}>
                                <div class="inner">
                                    <p>Chartered Financial Analyst </p>
                                    <span>(CFA)</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>The CFA Program is a three-part exam that tests the fundamentals of investment tools, valuing assets, portfolio management, and wealth planning. The CFA Program is typically completed by those with backgrounds in finance, accounting, economics, or business.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col1" ontouchstart="this.classList.toggle('hover');">
                        <div class="containerss">
                            <div class="front" style={{ backgroundImage: "url(https://i.ibb.co/2yJ865x/undraw-Shared-workspace-re-3gsu.png)" }}>
                                <div class="inner">
                                    <p>Desktop Publishing </p>
                                    <span>(DTP)</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>
                                        LDTP uses page layout software on personal computers (desktops) or computer systems to design, build and edit documents.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col1" ontouchstart="this.classList.toggle('hover');">
                        <div class="containerss">
                            <div class="front" style={{ backgroundImage: "url(https://i.ibb.co/JjhMnxn/undraw-informed-decision-p2lh.png)" }}>
                                <div class="inner">
                                    <p>Course on Computer Concepts </p>
                                    <span>(CCC)</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>
                                        Fundamental M S Word Ms Excel M S Power Point Online Mock Test</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col1" ontouchstart="this.classList.toggle('hover');">
                        <div class="containerss">
                            <div class="front" style={{ backgroundImage: "url(https://i.ibb.co/Wg2gXR1/undraw-Code-review-re-woeb.png)" }}>
                                <div class="inner">
                                    <p>Common Cryptographic Architecture
                                    </p>
                                    <span>(CCA)</span>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Accounting Fundamental Excel Internet(E-mail) Tally Erp9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home