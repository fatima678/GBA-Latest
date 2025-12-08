

'use client';

import React from 'react';
import Image from 'next/image';

// -----------------------------------------------------------------------
// 1. CSS Styles as React.CSSProperties Objects (for desktop/inline styles)
// -----------------------------------------------------------------------

// Watermark style for "Message"
const watermarkBgTitleStyle: React.CSSProperties = {
    fontSize: '150px',
    // Note: The outline (text-stroke) effect is typically handled by global CSS 
    // or a specific utility class. For this example, we'll keep the font size 
    // and margin-left inline property as requested by the original HTML.
    // Assuming the outline style is defined elsewhere and applied via .bg-title class.
    marginLeft: '100px',
};

// Main Heading Container (div above p.name)
const mainHeadingBlockStyle: React.CSSProperties = {
    marginTop: '-100px',
};

// Paragraph/Pre-title style ("Leadership with Purpose")
const nameStyle: React.CSSProperties = {
    fontSize: '16px',
    marginLeft: '100px',
    marginTop: '50px',
};

// Main Heading (H1) style ("Message From The Chairman")
const mainHeadingStyle: React.CSSProperties = {
    marginTop: '-35px',
    fontWeight: 800,
    fontSize: '48px',
    marginLeft: '100px',
};

// Main Content Container (to handle -300px overlap)
const mainContainerOverlapStyle: React.CSSProperties = {
    marginTop: '-300px',
    paddingTop: 40,
};

// Image Column Style
const imageColumnStyle: React.CSSProperties = {
    display: 'flex',
};

// Image Style
const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    display: 'block',
};

// Chairman Name H2 Style
const chairmanNameStyle: React.CSSProperties = {
    fontSize: '48px',
    marginTop: 0,
    paddingTop: 0,
    lineHeight: 1.2,
};

// Description Paragraph Style
const discStyle: React.CSSProperties = {
    fontSize: '15px',
    lineHeight: 1.6,
    marginBottom: 0,
};

// -----------------------------------------------------------------------
// 2. THE COMPONENT
// -----------------------------------------------------------------------
const MessageSection: React.FC = () => {
    return (
        <>
            {/* ---------------------------------------------------- */}
            {/* SECTION 1: BREADCRUMB / HERO INTRODUCTION (Message) */}
            {/* ---------------------------------------------------- */}
            <div className="rts-breadcrumb-area top-300">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left" style={{ textAlign: 'left' }}>
                                {/* Watermark: Note the use of style={...} for inline styles */}
                                <span className="bg-title" style={watermarkBgTitleStyle}>Message</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Shapes (paths adjusted for Next.js /public folder) */}
                <div className="shape-area">
                    {/* Assuming assets folder is inside public for next/image */}
                    <Image src="/images/about/shape/01.png" alt="shape" className="one" width={100} height={100} />
                    <Image src="/images/about/shape/02.png" alt="shape" className="two" width={100} height={100} />
                    <Image src="/images/about/shape/03.png" alt="shape" className="three" width={100} height={100} />
                </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* SECTION 2: CHAIRMAN'S MESSAGE CONTENT */}
            {/* ---------------------------------------------------- */}
            <div className="rts-about-area rts-section-gap">
                <div className="container pt--40" style={mainContainerOverlapStyle}>
                    <div style={mainHeadingBlockStyle}>
                        <p className="name" style={nameStyle}>Leadership with Purpose</p>
                        <h1 style={mainHeadingStyle}>Message From The <br /> Chairman</h1>
                    </div>
                    
                    <div className="row" style={{ marginTop: '100px', alignItems: 'flex-start', gap: 0 }}>
                        
                        {/* Left Column: Image */}
                        <div className="col-lg-5" style={imageColumnStyle}>
                            <div className="main-thumnal-inner-about-three" style={{ width: '100%', fontSize: '48px' }}>
                                <div className="">
                                    <div className="thumbnail">
                                        {/* Image path adjusted for Next.js /public folder */}
                                        <Image 
                                            src="/images/Our Team/Chairman - Ahmad Ikram Lone.png" 
                                            style={imageStyle} 
                                            alt="Ahmad Ikram Lone, Chairman of GBA"
                                            width={500} // Set appropriate dimensions
                                            height={600} // Set appropriate dimensions
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Description */}
                        {/* Note: In JSX, class names with dashes are accessed as strings or directly as attributes */}
                        <div className="col-lg-7 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
                            <div className="about-content-right-three" style={{ marginTop: 0, paddingTop: 0, height: 'auto', maxHeight: '100%', overflow: 'hidden' }}>
                                <div className="title-style-three left" style={{ marginTop: 0, paddingTop: 0 }}>
                                    <h2 className="title rts-text-anime-style-1" style={chairmanNameStyle}>Ahmad Ikram Lone</h2>
                                </div>
                                <p className="disc" style={discStyle}>
                                    It is with great pride and enthusiasm that I extend my warmest greetings as **Founder & Chairman of the Gujranwala Business Alliance (GBA)**. I am honoured to lead this alliance, dedicated to advancing Gujranwala's industrial potential and connecting our enterprises with global opportunities. Renowned for its entrepreneurial spirit, craftsmanship, and industrial excellence, Gujranwala continues to be a symbol of resilience and innovation. Through GBA, we are building on these strengths to create a modern business ecosystem that fosters innovation, competitiveness, and collaboration. Our mission is to help local enterprises grow beyond borders, access new markets, and position Gujranwala among the world's leading industrial cities.
                                    <br /><br />
                                    At GBA, we believe that lasting progress is built on strong partnerships. We are deeply committed to engaging with industry leaders, academia, policymakers, and international trade organisations to promote an enabling environment for business and investment. By fostering dialogue, advocating for the private sector, and offering practical support programs, we aim to remove barriers to growth and create opportunities that drive meaningful transformation. Alongside our international outreach, GBA focuses on capacity building, industry–academia linkages, entrepreneurship development, and knowledge exchange - areas that prepare our business community for a rapidly evolving global economy. We take pride in providing our members with access to strategic insights, training opportunities, and international networks that help them innovate and thrive
                                    <br /><br />
                                    I extend my sincere appreciation to our members, partners, and stakeholders for their trust and collaboration. Together, we are shaping a stronger, more connected, and future-ready Gujranwala - a city standing proudly at the forefront of Pakistan's industrial and economic growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 3. GLOBAL STYLES (INCLUDING MEDIA QUERIES) */}
            {/* ---------------------------------------------------- */}
            
            <style jsx global>{`
                /* ---------- MOBILE FIXES FOR THIS PAGE ONLY (First Block) ---------- */
                @media (max-width: 768px) {
                    .name {
                        margin-left: 0px !important;
                        padding-bottom: 5px !important;
                    }

                    /* Breadcrumb big background text */
                    .rts-breadcrumb-area .title-area-left .bg-title {
                        font-size: 65px !important;
                        margin-left: 0 !important;
                        margin-bottom: 50px !important;
                    }

                    /* Reduce top spacing of breadcrumb block */
                    .rts-breadcrumb-area.top-300 {
                        padding-top: 120px !important;
                        padding-bottom: 40px !important;
                    }

                    /* Remove negative margin trick on first about container */
                    .rts-about-area .container {
                        margin-top: 0 !important;
                        padding-top: 20px !important;
                    }

                    /* About Gujranwala heading block */
                    .rts-about-area h1 {
                        margin-left: 0px !important;
                    }

                    .rts-about-area h1 {
                        font-size: 32px !important;
                        line-height: 1.2;
                    }

                    /* Big Gujranwala image height (Not relevant here, but kept for completeness) */
                    .about-invena-large-image .large-image-bottm-breadcrumb {
                        max-height: 300px !important;
                    }

                    .about-invena-large-image .large-image-bottm-breadcrumb img {
                        height: 300px !important;
                    }

                    /* Text under Gujranwala image (Not relevant here, but kept for completeness) */
                    .about-between-wrapper {
                        margin-top: 40px !important;
                        padding: 0 12px;
                    }

                    .about-between-wrapper .disc {
                        font-size: 14px !important;
                        line-height: 1.7;
                    }

                    /* Industries of Gujranwala block spacing (Not relevant here, but kept for completeness) */
                    .working-process-area-three {
                        margin-top: 60px !important;
                        margin-bottom: 60px !important;
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                    }

                    .working-process-area-three .title-style-three .title {
                        font-size: 32px !important;
                        line-height: 1.2;
                    }

                    .working-process-area-three p {
                        font-size: 14px !important;
                    }

                    /* Industry list font size (Not relevant here, but kept for completeness) */
                    .industry-list li {
                        font-size: 14px;
                    }

                    /* Extra tighten generic container vertical gaps inside this page */
                    .container {
                        padding-left: 15px;
                        padding-right: 15px;
                    }
                }

                @media only screen and (max-width: 575px) {
                    .rts-breadcrumb-area {
                        height: 150px;
                    }
                }
            `}</style>

            <style jsx global>{`
                /* SECOND BLOCK OF MOBILE FIXES */
                @media (max-width: 768px) {
                    /* 1. Main Column Adjustment (Upar Lift karna) */
                    .rts-about-area .col-lg-7 {
                        /* Default margin ko reset ya kam karna */
                        margin-top: 20px !important; 
                        
                        /* Large screen padding ko reset karke mobile padding dena */
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                    
                    /* 2. Heading (Chairman's Name) ko Responsive banana */
                    .about-content-right-three h2.title {
                        /* Font size ko mobile ke liye chota karna */
                        font-size: 30px !important; 
                        
                        /* Margin ko kam karna */
                        margin-top: 10px !important;
                        margin-bottom: 10px !important;
                        
                        /* Agar aap heading ko center karna chahte hain */
                        text-align: center; 
                    }
                    
                    /* 3. Paragraph Text (p.disc) ko Responsive banana */
                    .about-content-right-three p.disc {
                        /* Text size ko readable banana */
                        font-size: 14px !important; 
                        
                        /* Line height ko thoda badhana taaki aasani se padha ja sake */
                        line-height: 1.6 !important; 
                    }

                    /* 4. Overall section spacing ko kam karna (agar about-content-right-three div mein extra gap hai) */
                    .about-content-right-three {
                        padding-top: 0 !important;
                        padding-bottom: 20px !important;
                    }
                }
            `}</style>
            
        </>
    );
};

export default MessageSection;


