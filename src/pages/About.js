import React from 'react'
import background from '../img/about_us.jpg'
import about from '../img/about.jpg'
function About() {
    return (
        <div>
            <figure class="relative w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 bg-gray-500  ">

                <img class="rounded-lg   mx-auto bg-blend-darken mix-blend-multiply bg-black w-[100vw] h-[76vh] lg:h-[90vh] " src={background} alt="image description" />

                <figcaption class="absolute left-16 px-4 text-white bottom-[20%] lg:bottom-[33%] ">
                    <h1 className='text-center text-3xl lg:text-4xl my-10 font-bold'>
                        /About Us
                    </h1>

                </figcaption>
            </figure>
            <h1 className='text-center text-3xl lg:text-4xl my-20 font-bold'>

                About MSP Computer College
            </h1>
           
                <div class="flex w-[70vw] drop-shadow-md	 flex-col items-center  m-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60  md:rounded-none md:rounded-l-lg" src={about} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">MSP Computer college is and have been the first choice of recruiters & companies.</h5>
                        <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400"> Our motive is to teach every student individually so that he can put his problems and he gets satisfied. We teach every student with the latest techniques. We also teach many other courses like Computer/Laptop Repairing, Mobile Repairing, Graphic Designing, Software Development, Accounting and Animation Courses. MSP Computer College's quality commitment & assurance is proved through verious certification and result.


                            We provide best computer training in software, hardware and multimedia fields. Our courses are specially designed and updated as per the current market needs as well as different student level which makes us a best it training institute in delhi.</p>
                    </div>
                </div>
                <div class="flex w-[70vw] drop-shadow-md 	 flex-col items-center  m-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl text-left   font-bold tracking-tight text-gray-900 dark:text-white">Our Vision</h5>
                        <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400"> MSP college has been created to fulfill a vision of empowering students with knowledge so that they make a wiser decision while choosing their career and alma mater.
                            <br />
                            Providing best computer training and IT training to all the students and make the eligible to get a good job in like always growing market of computer. Student who don't know what to do, Our mission is to provide them a proper target and provide them a plate form to achieve that targe.</p>
                    </div>
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60  md:rounded-none md:rounded-l-lg" src={about} alt="" />
                </div>
                <div class="flex w-[70vw] drop-shadow-md 	 flex-col items-center  m-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60  md:rounded-none md:rounded-l-lg" src={about} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold text-right tracking-tight text-gray-900 dark:text-white">Our Mission</h5>
                        <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                            Our mission is to provide a broad range of career-oriented educational programs with the goal of producing innovative, creative graduates who are well-prepared for their chosen careers in a global society.
                            <br />
                            College Choosing decision, the second biggest decision of anyone's life should not go wrong. With the most interactive user interface and most validated content, we aspire to be the top education portals and help the students in every way in making his decision easier.</p>
                    </div>
                </div>
         


        </div>
    )
}

export default About