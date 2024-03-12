import React from 'react';
import '../styles/ScrollButtons.css'
import leftT from '../assets/icons/leftT.svg'

const ScrollButtons = ({ scrollRef }) => {
    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    return (
        <div className='button_container'>

            <button className="scroll-button transition " onClick={() => scroll(-640)}>

                <svg width="20" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4779 24.8088C12.696 24.7178 12.8383 24.5056 12.8383 24.27L12.8383 17.8799L27.4168 17.8799C27.7387 17.8799 28 17.6187 28 17.2968L28 7.96648C28 7.64459 27.7387 7.38332 27.4168 7.38332L12.8383 7.38332L12.8383 0.968775C12.8383 0.733203 12.696 0.520921 12.479 0.429951C12.261 0.340129 12.0102 0.389113 11.8434 0.55591L0.171218 12.1896C0.0616049 12.2992 -0.000225594 12.4474 -0.000225601 12.6025C-0.000225608 12.7576 0.0616049 12.9057 0.17007 13.0153L11.8422 24.6828C12.0091 24.8496 12.2598 24.8998 12.4779 24.8088Z" fill="white" />
                </svg>

            </button>
            <button className="scroll-button transition" onClick={() => scroll(640)}>


                <svg width="20" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4389_16)">
                        <path d="M15.5221 26.8088C15.304 26.7178 15.1617 26.5056 15.1617 26.27L15.1617 19.8799L0.583161 19.8799C0.261267 19.8799 7.5328e-07 19.6187 7.3921e-07 19.2968L3.3137e-07 9.96648C3.17299e-07 9.64459 0.261266 9.38332 0.583161 9.38332L15.1617 9.38332L15.1617 2.96877C15.1617 2.7332 15.304 2.52092 15.521 2.42995C15.739 2.34013 15.9898 2.38911 16.1566 2.55591L27.8288 14.1896C27.9384 14.2992 28.0002 14.4474 28.0002 14.6025C28.0002 14.7576 27.9384 14.9057 27.8299 15.0153L16.1578 26.6828C15.9909 26.8496 15.7402 26.8998 15.5221 26.8088Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4389_16">
                            <rect width="28.0002" height="28.0002" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0.619629)" />
                        </clipPath>
                    </defs>
                </svg>

            </button>
        </div>
    );
}

export default ScrollButtons;