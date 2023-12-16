import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';

export default function Home() {
    const words = ['Refreshing', 'Versatile', 'Satisfying'];
    const [index, setIndex] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change the interval time as needed

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {
                loading
                    ? <div style={{ height: "100vh" }}
                        className="loading-page w-100 d-flex align-items-center justify-content-center">
                        <DNA
                            visible={true}
                            height="100"
                            width="100"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                    </div>
                    : <section section className="home-page d-flex align-items-center justify-content-center w-100">

                        <div className="home-box d-flex flex-column align-items-center justify-content-center">

                            <span className="motion-write-box flex align-items-center justify-content-center w-100">
                                <motion.div
                                    className='motion-write text-center ibm-plex-sans text-uppercase'
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 1 }}
                                >
                                    {words[index]}
                                </motion.div>
                            </span>

                            <span className="transition-write-box d-flex align-items-center w-100 d-flex flex-wrap align-items-center justify-content-center text-center lexend-deca">
                                <Typewriter
                                    className="transition-write"
                                    words={[
                                        'Crafted for moments that become stories. Unwind with our brew.',
                                        'Elevate your gatherings with the taste of true craftsmanship. Cheers to exceptional beer.',
                                        'From grain to glass, our beer embodies the spirit of celebration. Join the journey, savor the flavor.'
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={100}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span>

                            <div className="home-bottom w-100 d-flex align-items-center justify-content-center">
                                <Link
                                    to='/beerpage'
                                    className='home-btn rubik'>
                                    View Products
                                </Link>
                            </div>

                        </div>

                    </section >
            }
        </>
    );
};