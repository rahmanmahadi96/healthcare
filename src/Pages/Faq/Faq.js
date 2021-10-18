import React from 'react';


const Faq = () => {
    return (
        <div className="faq text-center">

            
            <div className="container faq">
                <h4 className="text-info mt-4 mb-2">FAQs</h4>
                <h1>We've Got Answers</h1>

                {/* accordion */}

                <div className="accordion my-5" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Can I just enroll in a single service?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Yes! To get started, click the service card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-3">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How much rest does the body need between yoga classes?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Some students may wonder if they can do yoga every day or even go to two consecutive yoga classes in a row. This question may arise due to recommendations from other sports such as running or weight-lifting, where it’s often suggested to rest at least one day between two training sessions.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Does yoga have to hurt?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            It’s important to note here that there’s a big (!) difference between pain and physical effort. While it helps your flexibility and strength to put a certain strain on your muscles, yoga should never be painful. Especially not after class. Instead of feeling achy, a yoga class should leave people released and with a feeling of accomplishment.
                            </div>
                        </div>
                    </div>
                   
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingfive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        I’m a yoga beginner – which style should I start with?
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Hatha yoga is one of the main forms of yoga and many other yoga styles derive from it, so it’s a great place to learn the foundations and names of the poses. My Yoga for Beginners course takes you through the basics and is based on Hatha Yoga. You’ll learn how to move and flow with the breath, which will prepare you for other styles of yoga including Vinyasa flow and Ashtanga. These are often more energetic and strong so are good for people looking for a physical challenge. More relaxing forms of yoga include Yin yoga and Restorative.  
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Faq;