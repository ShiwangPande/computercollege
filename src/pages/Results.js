import React from 'react'
import background from '../img/about_us.jpg'
import result from "../img/result.svg"
function Results() {
    return (
        <div>
            <figure class="relative w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 bg-gray-500  ">

                <img class="rounded-lg   mx-auto bg-blend-darken mix-blend-multiply bg-black w-[100vw] h-[76vh] lg:h-[90vh] " src={background} alt="image description" />

                <figcaption class="absolute left-16 px-4 text-white bottom-[20%] lg:bottom-[33%] ">
                    <h1 className='text-center text-3xl lg:text-4xl my-10 font-bold'>
                        / Results
                    </h1>

                </figcaption>
            </figure>
            <div class="container my-24 mx-auto md:px-6">
                <section class="mb-32 text-center">
                    <div class="flex flex-wrap justify-center">
                        <div class="flex-basis w-full shrink-0 grow-0 md:w-10/12 md:px-3 lg:w-8/12 xl:w-6/12">
                            <div class="mb-6 inline-block ">
                                <img className='w-28 h-28' src={result} alt="" />
                            </div>

                            <h2 class="mb-6 text-3xl font-bold">Get Your Result Now</h2>

                          

                            <div class="mb-6 flex-row md:mb-0 md:flex">
                                <div class="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                                    <input type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2" placeholder="Student ID" />
                                    <label for="exampleFormControlInput2"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                                        Student ID
                                    </label>
                                </div>
                                <button type="submit"
                                    class="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Results