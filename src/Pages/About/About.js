import React from 'react';

const About = () => {
    return (
        <div>
             {/* about yogaburn  */}
             <div className="about-details container p-5">
                <h5 className="text-info text-center">About YogaBurn</h5>
                <div className="intro">
                    <h1 className="my-4  text-center">Who We Are</h1>
                    <p>YogaBurn is an learning platform offer classes of various styles to suit all ages and abilities for you to find what ever you are looking for.</p>
                </div>

                {/* goal  */}
                <div className="mission">
                    <h1 className="mb-4">Our Mission</h1>
                    <ul>
                        <li className="text-start">Increase access to high quality yoga education for everyone, everywhere</li>
                        <li className="text-start">Deepen your practice</li>
                        <li className="text-start">Get in shape, feel great</li>
                        <li className="text-start">Accelerate transformation in your life</li>
                        <li className="text-start">Broaden your understanding of yoga practices beyond physical poses</li>
                    </ul>
                </div>
             
            </div>
        </div>
    );
};

export default About;