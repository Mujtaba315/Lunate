import '../styles/components/header.scss';
import pattern1 from '../assets/images/pattern1.png';
import pattern2 from '../assets/images/pattern2.png';
import pattern3 from '../assets/images/pattern3.png';
import pattern4 from '../assets/images/pattern4.png';
import pattern5 from '../assets/images/pattern5.png';
import pattern6 from '../assets/images/pattern6.png';

import $ from 'jquery';
// import { useEffect } from 'react';

function Header () {

    // useEffect(() => {
        
    // }, []);
    //let globalMenuItemId;
    function handleMenuItemMouseOver (e) {
        $('.sub-menu-js').addClass('sub-menu-active');
        $('.menu-item-js').removeClass('menu-item-active');
        $(e.currentTarget).addClass('menu-item-active');
        let menuItemId = $(e.currentTarget).attr('id');
        //globalMenuItemId = menuItemId;
        $('.sub-menu-list').removeClass('sub-menu-list-active');
        $('#' + menuItemId + '-list').addClass('sub-menu-list-active');
        $('.sol-dropdown').removeClass('sol-dropdown-active');
        $('.pattern-bg').removeClass('pattern-bg-active');
        $('#' + menuItemId + '-bg').addClass('pattern-bg-active');
        
    }

    function handleHeaderMouseLeave () {
        $('.sub-menu-js').removeClass('sub-menu-active');
        $('.menu-item-js').removeClass('menu-item-active');
        $('.sol-dropdown').removeClass('sol-dropdown-active');
    }

    function handleContactLangMouseOver () {
        $('.sub-menu-js').removeClass('sub-menu-active');
        $('.menu-item-js').removeClass('menu-item-active');
        $('.sol-dropdown').removeClass('sol-dropdown-active');
    } 

    function handleCrossClick () {
        $('.sub-menu-js').removeClass('sub-menu-active');
        $('.menu-item-js').removeClass('menu-item-active');
        $('.sol-dropdown').removeClass('sol-dropdown-active');
    }

    function handleSubMenuLinkMouseOver (e) {
        $('.sol-dropdown').removeClass('sol-dropdown-active');
        if ($(e.currentTarget).hasClass('approach-sub-menu-link')) {
            if ($(e.currentTarget).hasClass('sol-pro')){
                $('.sol-dropdown').addClass('sol-dropdown-active');
            }
            let approachSubMenuLinkId = $(e.currentTarget).attr('id');
            $('.pattern-bg').removeClass('pattern-bg-active');
            $('#' + approachSubMenuLinkId + '-bg').addClass('pattern-bg-active');
        }
    }

    return (
        <div className='header' onMouseLeave={handleHeaderMouseLeave}>
            <div className='header-wrapper'>
                <div className='header-logo'>
                    <a href="#">
                        <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 38.8632V0.395508H8.73836V30.3991H27.9165V38.8632H0ZM140.277 39.0003C137.602 39.0003 135.58 38.3489 134.204 37.0504C132.828 35.7518 132.143 33.909 132.143 31.5262V18.5579H127.36V11.0281H132.143V2.45689H140.221V11.0281H147.146V18.5579H140.221V29.4948C140.221 30.1205 140.375 30.5748 140.688 30.8705C141.001 31.1619 141.502 31.3076 142.201 31.3076H147.146V39.0003H140.277ZM109.905 33.2876C111.297 33.2876 112.514 33.069 113.56 32.6276C114.606 32.1862 115.412 31.5476 115.977 30.7034C116.543 29.8591 116.83 28.8734 116.83 27.7377V27.1334H109.686C108.182 27.1334 107.067 27.4077 106.335 27.9563C105.602 28.5048 105.233 29.2377 105.233 30.1548C105.233 31.1448 105.627 31.9119 106.416 32.4647C107.205 33.0133 108.366 33.2876 109.905 33.2876ZM108.034 39.6046C105.725 39.6043 103.75 39.2272 102.1 38.4775C100.45 37.7275 99.2076 36.6818 98.3634 35.3447C97.5191 34.0076 97.0991 32.4776 97.0991 30.7548C97.0991 29.032 97.5191 27.4292 98.3634 26.0578C99.2033 24.6821 100.489 23.6021 102.212 22.8135C103.935 22.025 106.039 21.6307 108.529 21.6307H116.826V20.9707C116.826 19.7622 116.35 18.7722 115.399 18.0008C114.443 17.2337 113.183 16.848 111.606 16.848C110.582 16.848 109.712 16.9765 108.996 17.2337C108.28 17.4908 107.723 17.8037 107.32 18.1679C106.917 18.5322 106.587 18.9736 106.33 19.4879H98.3077C98.4919 17.838 99.1133 16.3294 100.176 14.9537C101.239 13.5781 102.722 12.4809 104.629 11.6538C106.532 10.831 108.842 10.4196 111.554 10.4196C114.267 10.4196 116.573 10.8781 118.587 11.7952C120.601 12.7124 122.166 13.9852 123.284 15.6137C124.403 17.2465 124.96 19.0851 124.96 21.1379V39.0003H117.927L117.267 36.4718H116.937C116.17 37.3161 114.996 38.0489 113.419 38.6703C111.842 39.2915 110.047 39.6044 108.034 39.6046ZM170.846 19.6293C171.489 20.4565 171.883 21.3607 172.029 22.3507H172.024H157.351C157.646 21.3222 158.148 20.3965 158.863 19.5736C159.575 18.7508 160.445 18.0994 161.473 17.6237C162.498 17.148 163.672 16.908 164.992 16.908C166.166 16.908 167.272 17.1565 168.317 17.6494C169.363 18.1465 170.203 18.8065 170.846 19.6293ZM157.081 37.6803C159.425 38.966 162.026 39.6046 164.885 39.6046L164.893 39.6003C167.533 39.6003 169.843 39.1417 171.819 38.2246C173.794 37.3118 175.38 36.1718 176.572 34.8175C177.759 33.4633 178.633 32.0876 179.181 30.6948H170.773C170.225 31.3205 169.462 31.869 168.493 32.3448C167.52 32.8205 166.303 33.0604 164.838 33.0604C163.629 33.0604 162.502 32.8205 161.456 32.3448C160.41 31.869 159.54 31.2005 158.846 30.3391C158.148 29.4777 157.672 28.5177 157.415 27.4549H179.726C179.799 27.1249 179.863 26.7049 179.919 26.1906C179.97 25.6763 180 25.1449 180 24.5964C180 21.9221 179.349 19.5008 178.05 17.3408C176.747 15.1809 174.952 13.4881 172.663 12.2581C170.37 11.0324 167.932 10.4196 164.996 10.4196C162.06 10.4196 159.425 11.0624 157.081 12.3438C154.736 13.6252 152.885 15.3652 151.531 17.5637C150.176 19.7622 149.499 22.2307 149.499 24.9821C149.499 27.7334 150.176 30.2148 151.531 32.4305C152.885 34.6504 154.736 36.3989 157.081 37.6803ZM64.9913 11.0281V39.0003H73.1254V24.3264C73.1254 23.0793 73.3782 21.9907 73.8925 21.0564C74.4068 20.1222 75.1353 19.4065 76.091 18.9136C77.0424 18.4208 78.0496 18.1722 79.2238 18.1722C80.3981 18.1722 81.4309 18.4208 82.3309 18.9136C83.2266 19.4065 83.9423 20.1222 84.4737 21.0564C85.0051 21.9907 85.2708 23.0793 85.2708 24.3264V39.0003H93.3492V23.1735C93.3492 20.5379 92.8306 18.2579 91.7849 16.3337C90.7393 14.4095 89.295 12.9438 87.4436 11.9367C85.5922 10.9295 83.5309 10.4238 81.2595 10.4238C79.4252 10.4238 77.7667 10.7367 76.2839 11.3581C74.7968 11.9795 73.674 12.7124 72.9025 13.5566H72.6283L72.024 11.0281H64.9913ZM49.8503 31.9848C41.4933 31.9848 34.7178 25.2092 34.7178 16.8523C34.7178 14.7566 35.142 12.7638 35.9134 10.951C32.065 13.848 29.575 18.4551 29.575 23.645C29.575 32.4133 36.6848 39.5232 45.4532 39.5232C53.0216 39.5232 59.3472 34.2261 60.9414 27.142C58.1772 30.1205 54.2344 31.9848 49.8503 31.9848ZM53.043 11.1952C53.043 10.6895 53.0173 10.1924 52.9702 9.69957C55.7258 10.9038 57.6543 13.6509 57.6543 16.8523C57.6543 21.1636 54.1573 24.6564 49.8502 24.6564C48.5646 24.6564 47.356 24.3435 46.2889 23.7949C50.3602 21.0822 53.043 16.4537 53.043 11.1952Z"/>
                        </svg>
                    </a>
                </div>
                <div className='header-lists'>
                    <div className='header-list'>
                        <ul className='main-menu'>
                            <li id='about' className='menu-item menu-item-js' onMouseOver={handleMenuItemMouseOver}>
                                <a href="#">
                                    About Lunate
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L13 1" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                            <li id='approach' className='menu-item menu-item-js' onMouseOver={handleMenuItemMouseOver}>
                                <a href="#">
                                    Our Approach
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L13 1" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                            <li id='news' className='menu-item menu-item-js' onMouseOver={handleMenuItemMouseOver}>
                                <a href="#">
                                    News & Insights
                                </a>
                            </li>
                            <li id='careers' className='menu-item menu-item-js' onMouseOver={handleMenuItemMouseOver}>
                                <a href="#">
                                    Careers
                                </a>
                            </li>
                            <li className='menu-item contact-lang'>
                                <a className='contact-link' href="#" onMouseOver={handleContactLangMouseOver}>
                                    Contact Us
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.35355 0.646447C8.15829 0.451184 7.84171 0.451184 7.64645 0.646447C7.45118 0.841709 7.45118 1.15829 7.64645 1.35355L13.7929 7.5H1.00195C0.725811 7.5 0.501953 7.72386 0.501953 8C0.501953 8.27614 0.725811 8.5 1.00195 8.5H13.7929L7.64645 14.6464C7.45118 14.8417 7.45118 15.1583 7.64645 15.3536C7.84171 15.5488 8.15829 15.5488 8.35355 15.3536L15.3282 8.37892C15.4346 8.28723 15.502 8.15148 15.502 8C15.502 7.84852 15.4346 7.71278 15.3282 7.62109L8.35355 0.646447Z"/>
                                    </svg>
                                </a>
                                <div className='lang-links'>
                                    <a className='eng-lang-link' href="#" onMouseOver={handleContactLangMouseOver}> EN </a>
                                    <a href="#" onMouseOver={handleContactLangMouseOver}> AR </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='sub-menu sub-menu-js'>
                        <div className='sub-menu-lists'>
                            <ul id='about-list' className='sub-menu-list'>
                                <li className='sub-menu-link' onMouseOver={handleSubMenuLinkMouseOver}>
                                    <a href="#">Who We Are</a>
                                </li>
                                <li className='sub-menu-link' onMouseOver={handleSubMenuLinkMouseOver}>
                                    <a href="#">Our People</a>
                                </li>
                            </ul>

                            <ul id='approach-list' className='sub-menu-list'>
                                <li id='approach-strategies' className='sub-menu-link approach-sub-menu-link' onMouseOver={handleSubMenuLinkMouseOver}>
                                    <a href="#">Strategies</a>
                                </li>
                                <li id='approach-asset' className='sub-menu-link approach-sub-menu-link' onMouseOver={handleSubMenuLinkMouseOver}>
                                    <a href="#">Asset Classes</a>
                                </li>
                                <li id='approach-sol' className='sub-menu-link sol-pro approach-sub-menu-link' onMouseOver={handleSubMenuLinkMouseOver}>
                                    <a>
                                        Solutions & Products
                                        <svg className='side-dropdown-arrow' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 17.9995L15 11.9995L9 5.99951" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <ul className='sol-dropdown'>
                                    <li className='sol-dropdown-item'>
                                        <a href="#">
                                            Solutions
                                        </a>
                                    </li>
                                    <li className='sol-dropdown-item'>
                                        <a href="#">
                                            ETFs Overview
                                            <svg className='overview' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 12.9995V18.9995C18 19.5299 17.7893 20.0387 17.4142 20.4137C17.0391 20.7888 16.5304 20.9995 16 20.9995H5C4.46957 20.9995 3.96086 20.7888 3.58579 20.4137C3.21071 20.0387 3 19.5299 3 18.9995V7.99951C3 7.46908 3.21071 6.96037 3.58579 6.5853C3.96086 6.21023 4.46957 5.99951 5 5.99951H11" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M15 2.99951H21V8.99951" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M10 13.9995L21 2.99951" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </ul>

                            <ul id='news-list' className='sub-menu-list'>
                                <li className='sub-menu-link' onMouseOver={handleSubMenuLinkMouseOver}>
                                    <a href="#">News OR Insight 1</a>
                                </li>
                                <li className='sub-menu-link' onMouseOver={handleSubMenuLinkMouseOver}>
                                    <a href="#">News OR Insight N</a>
                                </li>
                            </ul>

                            <ul id='careers-list' className='sub-menu-list'>
                                <li className='sub-menu-link' onMouseOver={handleSubMenuLinkMouseOver}>
                                    <a href="#">Working at Lunate</a>
                                </li>
                            </ul>
                            <div id='about-bg' className='pattern-bg'>
                                <img src={pattern1} alt="" />
                            </div>
                            <div id='approach-bg' className='pattern-bg'>
                                <img src={pattern2} alt="" />
                            </div>
                            <div id='approach-strategies-bg' className='pattern-bg'>
                                <img src={pattern2} alt="" />
                            </div>
                            <div id='approach-asset-bg' className='pattern-bg'>
                                <img src={pattern3} alt="" />
                            </div>
                            <div id='approach-sol-bg' className='pattern-bg'>
                                <img src={pattern4} alt="" />
                            </div>
                            <div id='news-bg' className='pattern-bg'>
                                <img src={pattern5} alt="" />
                            </div>
                            <div id='careers-bg' className='pattern-bg'>
                                <img src={pattern6} alt="" />
                            </div>
                            <div className='cross-icon' onClick={handleCrossClick}>
                                <svg width="60" height="60" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8125 15.8127L28.1869 28.1871" stroke="#A68B5C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.8125 28.1873L28.1869 15.8129" stroke="#A68B5C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;