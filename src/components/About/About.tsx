//@ts-nocheck
"use client"
import React, { useEffect, useRef, useState } from 'react';
import FindOutMore from '../Shared/FindOutMore';
import aboutImage from "../../assets/Images/about/why.jpg"
import Image from 'next/image';

const About = () => {
    // Create a ref for the div you want to observe
    const divRef = useRef(null);
    const [isOnScreen, setIsOnScreen] = useState(false)

    // Callback function for the Intersection Observer
    const handleIntersection = (entries) => {
        // Loop through the entries (there will usually be only one entry)
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // The div is on the screen
                console.log('The div is on the screen!');
                // Add additional logic here for when the div is visible
                setIsOnScreen(true)

            } else {
                // The div is not on the screen
                console.log('The div is not on the screen!');
                setIsOnScreen(false)
            }
        });
    };

    useEffect(() => {
        // Create an Intersection Observer with the callback function
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // Observe in the context of the viewport
            rootMargin: '0px', // Margin around the root
            threshold: 0.6, // Callback when 50% of the div is visible
        });

        // Observe the div using the ref
        if (divRef.current) {
            observer.observe(divRef.current);
        }

        // Cleanup: Disconnect the observer when the component unmounts
        // Capture the current ref value to use in the cleanup function
        const currentDivRef = divRef.current;
        return () => {
            if (currentDivRef) {
                observer.unobserve(currentDivRef);
            }
        };
    }, []);

    return (
        <div ref={divRef} className='text-white relative h-[720px] overflow-hidden my-10 '>
            <video className='absolute -z-0 top-0 bottom-0 left-0 right-0 object-cover w-screen overflow-hidden h-[720px]' id="background-video" autoPlay={true} loop muted>
                <source src="about-bg.mp4" type="video/mp4" />
            </video>

            <div className='w-full h-full relative z-10 flex justify-end items-center'>
                <div className='content w-[50%] px-20'>
                    <h1 className='text-xl font-bold '>What makes us unique?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                    <div>
                        <FindOutMore className='justify-start items-start' />
                    </div>
                </div>

                <div className={`absolute image w-full h-full  left-0  ${isOnScreen ? "top-[26%]" : "top-0"} overflow-hidden transition-all duration-700`}>
                    <Image src={aboutImage} alt="about-image" fill className={`object-cover ${isOnScreen ? "!h-1/2 !w-1/2" : "h-full w-full"}   overflow-hidden transition-all duration-700`} />
                </div>
            </div>
        </div>
    );
};

export default About;