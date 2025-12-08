


// 'use client'
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Header() {
//     // Note: The CSS within the <style> tags here will be moved to globals.css,
//     // but for context, I'm noting where it came from.
//     // The inline styles (like border-bottom: 1px solid #e0e0e0;) are converted to JS objects.
    
//     return (
//         // The Header component starts here. All 'class' attributes are now 'className'.
//         <header className="header-one header--sticky">
            
//             {/* --- 1. Header Top Bar (CTA and Social Links) --- */}
//             <div className="header-top-area-wrapper header-top-cta-bar">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="header-top-one-wrapper nav-cta-layout">
//                                 <div className="left top-cta-message">
//                                     <p>
//                                         Are you ready to grow up your business? 
//                                         {/* Internal link conversion: <a> -> <Link> */}
//                                         <Link className="contact-link" href="/contact">
//                                             Contact Us <i className="fal fa-arrow-right"></i>
//                                         </Link>
//                                     </p>
//                                 </div>
//                                 <div className="right top-cta-contact">
//                                     <a className="email-link" href="mailto:info@gba.org.pk">
//                                         <i className="fal fa-envelope"></i> info@gba.org.pk
//                                     </a>
//                                     <span className="divider" aria-hidden="true"></span>
//                                     <ul className="social-wrapper-one">
//                                         <li><a href="https://www.facebook.com/gbaofficial" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
//                                         <li><a href="https://www.instagram.com/gba.connect/" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
//                                         <li><a className="mr--0" href="https://www.linkedin.com/company/gbaofficial/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* --- 2. Header Main (Logo and Navigation) --- */}
//             <div className="header-main" style={{ borderBottom: '1px solid #e0e0e0' }}> 
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="header-main-one-wrapper">
//                                 {/* Logo: Use Next.js Image component for optimization, path is relative to public/ */}
//                                 <div className="thumbnail">
//                                     <Link href="/">
//                                         <Image 
//                                             src="/images/logo/01.svg" // Corrected path assuming public/images/logo/01.svg
//                                             alt="finbiz-logo"
//                                             width={100} // Set appropriate width/height
//                                             height={30} // based on your design
//                                         />
//                                     </Link>
//                                 </div>

//                                 <div className="main-header">
//                                     <div className="nav-area">
//                                         <ul className="">

//                                             {/* --- Navigation Item 1: ABOUT (Mega Menu) --- */}
//                                             <li className="main-nav has-dropdown mega-menu">
//                                                 <Link href="#">About</Link>
//                                                 <div className="rts-mega-menu" style={{ width: '30%', left: '244px', top: '101%' }}>
//                                                     <div className="wrapper">
//                                                         <div style={{ maxWidth: '300px' }}>
//                                                             <div className="row g-0">
//                                                                 <div className="col-lg-12">
//                                                                     <ul className="mega-menu-item with-list parent-nav">
//                                                                         {/* Gujranwala */}
//                                                                         <li>
//                                                                             <Link href="/gujranwala">
//                                                                                 <i className="fa-sharp fa-regular fa-chevron-right"></i> Gujranwala
//                                                                             </Link>
//                                                                         </li>
//                                                                         {/* GBA */}
//                                                                         <li>
//                                                                             <Link href="/gba">
//                                                                                 <i className="fa-sharp fa-regular fa-chevron-right"></i> GBA
//                                                                             </Link>
//                                                                         </li>
//                                                                         {/* Our Team */}
//                                                                         <li>
//                                                                             <Link href="/our-team">
//                                                                                 <i className="fa-sharp fa-regular fa-chevron-right"></i> Our Team
//                                                                             </Link>
//                                                                         </li>
//                                                                         {/* Our Focus (linking to team.html) */}
//                                                                         <li>
//                                                                             <Link href="/team">
//                                                                                 <i className="fa-sharp fa-regular fa-chevron-right"></i> Our Focus
//                                                                             </Link>
//                                                                         </li>
//                                                                     </ul>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </li>
                                            
//                                             {/* --- Navigation Item 2: SERVICES (Mega Menu) --- */}
//                                             <li className="main-nav has-dropdown mega-menu">
//                                                 <Link href="#">Services</Link>
//                                                 <div className="rts-mega-menu" style={{ top: '101%' }}>
//                                                     <div className="wrapper">
//                                                         <div className="container">
//                                                             <div className="row g-0">
//                                                                 {/* Column 1 */}
//                                                                 <div className="col-lg-3">
//                                                                     <ul className="mega-menu-item with-list parent-nav">
//                                                                         <li><Link href="/service-details"><i className="fa-sharp fa-regular fa-chevron-right"></i>Global Reach</Link></li>
//                                                                         <li><Link href="/business-deligation"><i className="fa-sharp fa-regular fa-chevron-right"></i>Business Delegations</Link></li>
//                                                                         <li><Link href="/pakistan-products"><i className="fa-sharp fa-regular fa-chevron-right"></i>Pakistan Products House</Link></li>
//                                                                         <li><Link href="/trade-shows"><i className="fa-sharp fa-regular fa-chevron-right"></i>Trade Shows & Expos</Link></li>
//                                                                     </ul>
//                                                                 </div>
//                                                                 {/* Column 2 */}
//                                                                 <div className="col-lg-3">
//                                                                     <ul className="mega-menu-item with-list parent-nav">
//                                                                         <li><Link href="/industry-academia"><i className="fa-sharp fa-regular fa-chevron-right"></i>Industry Academia Linkages</Link></li>
//                                                                         <li><Link href="/global-growth"><i className="fa-sharp fa-regular fa-chevron-right"></i>Global Growth Windows</Link></li>
//                                                                         <li><Link href="/international-tech"><i className="fa-sharp fa-regular fa-chevron-right"></i>International Tech Gateways</Link></li>
//                                                                         <li><Link href="/leadership-incubation"><i className="fa-sharp fa-regular fa-chevron-right"></i>Leadership Incubation & Mentorship</Link></li>
//                                                                     </ul>
//                                                                 </div>
//                                                                 {/* Column 3 */}
//                                                                 <div className="col-lg-3">
//                                                                     <ul className="mega-menu-item with-list parent-nav">
//                                                                         <li><Link href="/business-events"><i className="fa-sharp fa-regular fa-chevron-right"></i>Business Events</Link></li>
//                                                                         <li><Link href="/women-empowerment"><i className="fa-sharp fa-regular fa-chevron-right"></i>Women Empowerment</Link></li>
//                                                                         <li><Link href="/bRI-centre"><i className="fa-sharp fa-regular fa-chevron-right"></i>BRI Centre</Link></li>
//                                                                         <li><Link href="/capacity-building"><i className="fa-sharp fa-regular fa-chevron-right"></i>Capacity Building & Research</Link></li>
//                                                                     </ul>
//                                                                 </div>
//                                                                 {/* Column 4 */}
//                                                                 <div className="col-lg-3">
//                                                                     <ul className="mega-menu-item with-list parent-nav">
//                                                                         <li><Link href="/global-trade"><i className="fa-sharp fa-regular fa-chevron-right"></i>Global Trade Facilitation Desks</Link></li>
//                                                                         <li><Link href="/community-development"><i className="fa-sharp fa-regular fa-chevron-right"></i>Community Development</Link></li>
//                                                                     </ul>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </li>

//                                             {/* --- Navigation Item 3: MEMBER (Mega Menu) --- */}
//                                             <li className="main-nav has-dropdown mega-menu">
//                                                 <Link href="#">Member</Link>
//                                                 <div className="rts-mega-menu" style={{ width: '30%', left: '450px', top: '101%' }}>
//                                                     <div className="wrapper">
//                                                         <div style={{ maxWidth: '300px' }}>
//                                                             <div className="row g-0">
//                                                                 <div className="col-lg-12">
//                                                                     <ul className="mega-menu-item with-list parent-nav">
//                                                                         {/* Partners */}
//                                                                         <li>
//                                                                             <Link href="/partners2">
//                                                                                 <i className="fa-sharp fa-regular fa-chevron-right"></i> Our Partners
//                                                                             </Link>
//                                                                         </li>
//                                                                         {/* Our Member */}
//                                                                         <li>
//                                                                             <Link href="/our-member">
//                                                                                 <i className="fa-sharp fa-regular fa-chevron-right"></i> Our Member
//                                                                             </Link>
//                                                                         </li>
//                                                                         {/* Flagship */}
//                                                                         <li>
//                                                                             <Link href="/Flagship">
//                                                                                 <i className="fa-sharp fa-regular fa-chevron-right"></i> Flagship
//                                                                             </Link>
//                                                                         </li>
//                                                                     </ul>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </li>

//                                             {/* --- Navigation Item 4: Resources --- */}
//                                             <div className="main-nav project-a-after">
//                                                 <Link href="#"><strong>Resources</strong></Link>
//                                             </div>

//                                             {/* --- Navigation Item 5: Archives --- */}
//                                             <div className="main-nav project-a-after">
//                                                 <Link href="/archive"><strong>Archives</strong></Link>
//                                             </div>

//                                             {/* --- Navigation Item 6: Contact --- */}
//                                             <div className="main-nav project-a-after">
//                                                 <Link href="/contact-2"><strong>Contact</strong></Link>
//                                             </div>

//                                         </ul>
//                                     </div>

//                                     {/* Mobile Menu Button Area */}
//                                     <div className="button-area d-lg-none">
//                                         <button id="menu-btn" type="button" className="menu menu-btn ml--20 ml_sm--5" aria-label="Open menu">
//                                             {/* Image component used for the menu icon */}
//                                             <Image 
//                                                 className="menu-light" 
//                                                 src="/images/icons/01.svg" // Corrected path
//                                                 alt="Menu-icon"
//                                                 width={24} // Set appropriate size
//                                                 height={24} 
//                                             />
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Note: The CSS from the <style> tags at the end of the header 
//                  MUST be moved to src/app/globals.css to be active. */}

//         </header>
//     );
// }


'use client';
import Link from 'next/link';
import Image from 'next/image';

// Import the JSON data. In a Next.js environment, importing JSON is typically done like this.
import headerData from '../Data/HeaderData.json';

// Utility component for rendering standard dropdown items
const DropdownItem = ({ item }) => (
    <li>
        <Link href={item.href}>
            <i className="fa-sharp fa-regular fa-chevron-right"></i> {item.title}
        </Link>
    </li>
);

// Utility component for rendering a full multi-column mega menu (like Services)
const MultiColumnMenu = ({ columns }) => (
    <div className="rts-mega-menu" style={{ top: '101%' }}>
        <div className="wrapper">
            <div className="container">
                <div className="row g-0">
                    {columns.map((column, colIndex) => (
                        <div key={colIndex} className="col-lg-3">
                            <ul className="mega-menu-item with-list parent-nav">
                                {column.map((item, itemIndex) => (
                                    <DropdownItem key={itemIndex} item={item} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// Utility component for rendering a single-column mega menu (like About or Member)
const SingleColumnMenu = ({ items, dropdownStyle }) => (
    <div className="rts-mega-menu" style={{ ...dropdownStyle, top: '101%' }}>
        <div className="wrapper">
            <div style={{ maxWidth: '300px' }}>
                <div className="row g-0">
                    <div className="col-lg-12">
                        <ul className="mega-menu-item with-list parent-nav">
                            {items.map((item, index) => (
                                <DropdownItem key={index} item={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function Header() {
    const { topBar, logo, mobileMenuIcon, mainNav } = headerData;

    // --- RENDER MAIN NAVIGATION ITEMS DYNAMICALLY ---
    const renderNavItem = (item, index) => {
        if (item.type === 'link') {
            // Standard Link (e.g., Resources, Archives, Contact)
            return (
                <div key={index} className="main-nav project-a-after">
                    <Link href={item.href}>
                        {item.strong ? <strong>{item.title}</strong> : item.title}
                    </Link>
                </div>
            );
        }

        // Mega Menu Link (e.g., About, Services, Member)
        return (
            <li key={index} className="main-nav has-dropdown mega-menu">
                <Link href={item.href}>{item.title}</Link>

                {item.type === 'mega-menu-multi-column' && item.columns && (
                    <MultiColumnMenu columns={item.columns} />
                )}

                {item.type === 'mega-menu-single-column' && item.dropdownItems && (
                    <SingleColumnMenu 
                        items={item.dropdownItems} 
                        dropdownStyle={item.dropdownStyle || {}} 
                    />
                )}
            </li>
        );
    };

    return (
        <header className="header-one header--sticky">
            {/* --- 1. Header Top Bar (Content from JSON) --- */}
            <div className="header-top-area-wrapper header-top-cta-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-top-one-wrapper nav-cta-layout">
                                <div className="left top-cta-message">
                                    <p>
                                        {topBar.ctaMessage}
                                        <Link className="contact-link" href={topBar.ctaLink}>
                                            {topBar.ctaLinkText} <i className="fal fa-arrow-right"></i>
                                        </Link>
                                    </p>
                                </div>
                                <div className="right top-cta-contact">
                                    <a className="email-link" href={`mailto:${topBar.email}`}>
                                        <i className="fal fa-envelope"></i> {topBar.email}
                                    </a>
                                    <span className="divider" aria-hidden="true"></span>
                                    <ul className="social-wrapper-one">
                                        {topBar.socialLinks.map((social, index) => (
                                            <li key={index}>
                                                <a href={social.href} aria-label={social.ariaLabel} className={social.className}>
                                                    <i className={social.iconClass}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 2. Header Main (Logo and Navigation) --- */}
            <div className="header-main" style={{ borderBottom: '1px solid #e0e0e0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-main-one-wrapper">
                                {/* Logo (Content from JSON) */}
                                <div className="thumbnail">
                                    <Link href={logo.homeLink}>
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={logo.width}
                                            height={logo.height}
                                        />
                                    </Link>
                                </div>

                                <div className="main-header">
                                    <div className="nav-area">
                                        <ul className="">
                                            {/* Dynamic Navigation Rendering (Content from JSON) */}
                                            {mainNav.map(renderNavItem)}
                                        </ul>
                                    </div>

                                    {/* Mobile Menu Button Area (Content from JSON) */}
                                    <div className="button-area d-lg-none">
                                        <button id="menu-btn" type="button" className="menu menu-btn ml--20 ml_sm--5" aria-label="Open menu">
                                            <Image
                                                className="menu-light"
                                                src={mobileMenuIcon.src}
                                                alt={mobileMenuIcon.alt}
                                                width={mobileMenuIcon.width}
                                                height={mobileMenuIcon.height}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}