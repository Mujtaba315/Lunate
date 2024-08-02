import '../styles/components/header.scss';

import $ from 'jquery';
// import { useEffect } from 'react';

function Header () {

    // useEffect(() => {
        
    // }, []);

    // Initial state
    var scrollPos = 0;

    // Adding scroll event
    $(window).on('scroll', function() {
    // Detects new state and compares it with the new one
    var newScrollPos = $(document).scrollTop();
    if (newScrollPos <= 0) {
        console.log('top: ', newScrollPos);
        $('.header').removeClass('scrollUp');
        $('.header').removeClass('scrollDown');
    }
    else if (newScrollPos > scrollPos) {
        console.log('down: ', scrollPos);
        $('.header').removeClass('scrollUp');
        $('.header').addClass('scrollDown');
        $('.sub-menu-js').removeClass('sub-menu-active');
        $('.menu-item-js').removeClass('menu-item-active');
        $('.sol-dropdown').removeClass('sol-dropdown-active');
    } else {
        console.log("up: ", scrollPos);
        $('.header').removeClass('scrollDown');
        $('.header').addClass('scrollUp');
    }
    // Saves the new position for iteration
    scrollPos = newScrollPos;
    });

    
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

    function handleContactLinkMouseEnter () {
        $('.contact-us-arrow').removeClass('on-mouse-out');
        $('.contact-us-arrow').addClass('on-mouse-in');
    }

    function handleContactLinkMouseLeave () {
        $('.contact-us-arrow').removeClass('on-mouse-in');
        $('.contact-us-arrow').addClass('on-mouse-out');
    }

    return (
        <div className='header' onMouseLeave={handleHeaderMouseLeave}>
            <div className='header-wrapper'>
                <div className='header-logo'>
                    <a href="#">
                        <svg width="11.25rem" height="2.5rem" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <svg width=".875rem" height=".5rem" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 7L13 1" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                            <li id='approach' className='menu-item menu-item-js' onMouseOver={handleMenuItemMouseOver}>
                                <a href="#">
                                    Our Approach
                                    <svg width=".875rem" height=".5rem" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <a className='contact-link' onMouseEnter={handleContactLinkMouseEnter} onMouseLeave={handleContactLinkMouseLeave} href="#" onMouseOver={handleContactLangMouseOver}>
                                    Contact Us
                                    <span className='contact-us-span'>
                                        <svg className='contact-us-arrow' width="1rem" height="1rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.35355 0.646447C8.15829 0.451184 7.84171 0.451184 7.64645 0.646447C7.45118 0.841709 7.45118 1.15829 7.64645 1.35355L13.7929 7.5H1.00195C0.725811 7.5 0.501953 7.72386 0.501953 8C0.501953 8.27614 0.725811 8.5 1.00195 8.5H13.7929L7.64645 14.6464C7.45118 14.8417 7.45118 15.1583 7.64645 15.3536C7.84171 15.5488 8.15829 15.5488 8.35355 15.3536L15.3282 8.37892C15.4346 8.28723 15.502 8.15148 15.502 8C15.502 7.84852 15.4346 7.71278 15.3282 7.62109L8.35355 0.646447Z"/>
                                        </svg>
                                    </span>
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
                                        <svg className='side-dropdown-arrow' width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                            <svg className='overview' width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <svg width="14.938rem" height="7.5rem" viewBox="0 0 239 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.500001 61.333L0.504864 61.3412L0.500001 61.3414L0.500001 61.333ZM0.504864 61.3412C11.1516 60.9911 21.5035 66.9858 26.3735 77.4733C32.9358 91.5929 27.0844 108.496 13.306 115.221C9.20348 117.216 4.864 118.088 0.614409 117.954C9.49768 102.711 11.0259 83.3509 3.01706 66.1206C2.25024 64.4634 1.41013 62.8731 0.504864 61.3412ZM3.01706 5.0726C2.24887 3.41245 1.40712 1.81939 0.500001 0.285011C11.1485 -0.0755309 21.4946 5.92783 26.3653 16.4085C32.9276 30.5282 27.0763 47.4315 13.2978 54.1559C9.19531 56.1598 4.85583 57.0318 0.606237 56.8977C9.49768 41.6629 11.0259 22.3029 3.01706 5.0726ZM57.085 5.0726C57.8532 3.41245 58.695 1.81939 59.6021 0.285012C48.9536 -0.0755304 38.5993 5.92783 33.7286 16.4169C27.1663 30.5366 33.0177 47.4398 46.7961 54.1643C50.8986 56.1682 55.2381 57.0402 59.4877 56.906C50.6044 41.6629 49.0762 22.3029 57.085 5.0726ZM179.898 0.285006C180.797 1.81938 181.647 3.41245 182.415 5.0726C190.424 22.3029 188.896 41.6629 180.012 56.906C184.262 57.0402 188.602 56.1682 192.704 54.1643C206.482 47.4399 212.334 30.5366 205.771 16.4169C200.893 5.92783 190.547 -0.0755287 179.898 0.285006ZM236.483 5.0726C237.251 3.41246 238.093 1.81938 239 0.285007C228.352 -0.0755282 217.997 5.92783 213.127 16.4169C206.564 30.5365 212.416 47.4398 226.194 54.1643C230.297 56.1682 234.636 57.0402 238.886 56.906C230.002 41.6629 228.474 22.3029 236.483 5.0726ZM59.5972 61.3412L59.6021 61.333V61.3414L59.5972 61.3412ZM33.7286 77.4733C38.5986 66.9858 48.9505 60.9911 59.5972 61.3412C58.692 62.8731 57.8519 64.4634 57.085 66.1206C49.0762 83.3509 50.6044 102.711 59.4877 117.954C55.2381 118.088 50.8986 117.216 46.7961 115.221C33.0177 108.496 27.1663 91.5929 33.7286 77.4733ZM239 61.333L238.995 61.3412C228.348 60.9911 217.997 66.9858 213.127 77.4733C206.564 91.5929 212.416 108.496 226.194 115.221C230.297 117.216 234.636 118.088 238.886 117.954C230.002 102.711 228.474 83.3509 236.483 66.1206C237.25 64.4634 238.09 62.8731 238.995 61.3412L239 61.3414V61.333ZM62.9363 5.0726C62.1681 3.41245 61.3181 1.81938 60.4192 0.285012C71.0677 -0.0755301 81.422 5.92783 86.2927 16.4169C92.855 30.5366 87.0036 47.4398 73.2252 54.1643C69.1227 56.1682 64.7832 57.0402 60.5336 56.906C69.4169 41.6629 70.9451 22.3029 62.9363 5.0726ZM121.85 62.4146L121.855 62.4229L121.85 62.423V62.4146ZM121.855 62.4229C132.502 62.0727 142.854 68.0674 147.724 78.5549C154.286 92.6746 148.435 109.578 134.656 116.302C130.554 118.298 126.214 119.17 121.965 119.036C130.848 103.793 132.376 84.4325 124.367 67.2022C123.601 65.5451 122.752 63.9547 121.855 62.4229ZM156.942 87.5433C155.332 88.3315 153.771 89.1951 152.276 90.1174V90.1258C151.924 79.2175 157.784 68.611 168.016 63.6138C181.802 56.8893 198.294 62.8843 204.856 77.0039C206.809 81.2046 207.659 85.6568 207.529 90.0084C192.655 80.9027 173.761 79.3348 156.942 87.5433ZM207.52 90.721C206.017 91.6433 204.464 92.5069 202.854 93.2951C186.035 101.504 167.141 99.9357 152.267 90.83C152.137 95.1816 152.987 99.6338 154.94 103.834C161.502 117.954 178.002 123.949 191.78 117.225C202.012 112.227 207.872 101.621 207.52 90.7126V90.721ZM117.004 5.0726C117.772 3.41245 118.614 1.81939 119.521 0.285013C108.873 -0.0755297 98.5267 5.92783 93.6478 16.4169C87.0855 30.5365 92.9368 47.4398 106.715 54.1643C110.818 56.1682 115.157 57.0402 119.407 56.906C110.524 41.6629 108.995 22.3029 117.004 5.0726ZM123.714 59.1532C125.209 58.2309 126.77 57.3673 128.38 56.5792C145.199 48.3707 164.093 49.9386 178.966 59.0442C179.097 54.6926 178.247 50.2404 176.294 46.0398C169.732 31.9201 153.24 25.9252 139.453 32.6496C129.222 37.6468 123.37 48.2533 123.714 59.1616V59.1532ZM128.38 2.58245C126.77 1.79431 125.209 0.930688 123.714 0.00838621V1.5012e-06C123.37 10.9083 129.222 21.5148 139.453 26.512C153.24 33.2365 169.732 27.2415 176.294 13.1219C178.247 8.92119 179.097 4.46898 178.966 0.117388C164.093 9.22304 145.199 10.7909 128.38 2.58245ZM64.3172 119.991C65.8128 119.069 67.3737 118.206 68.9836 117.417C85.8022 109.209 104.697 110.777 119.57 119.882C119.701 115.531 118.851 111.079 116.898 106.878C110.335 92.7583 93.8437 86.7634 80.0571 93.4878C69.8254 98.485 63.9658 109.083 64.3172 120V119.991ZM68.9836 63.4207C67.3737 62.6326 65.8128 61.769 64.3172 60.8467V60.8383C63.9658 71.7466 69.8254 82.3531 80.0571 87.3503C93.8437 94.0748 110.335 88.0798 116.898 73.9602C118.851 69.7595 119.701 65.3073 119.57 60.9557C104.697 70.0613 85.8022 71.6292 68.9836 63.4207Z" fill="#F5F5F5"/>
                                </svg>
                            </div>
                            <div id='approach-bg' className='pattern-bg'>
                                <svg width="8.875rem" height="8.75rem" viewBox="0 0 142 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.57884 11.7312C4.65367 7.68565 2.53339 3.79616 0.27002 0.0367507C26.9882 -0.834807 52.9519 13.8386 65.1663 39.478C81.6342 74.0021 66.9613 115.343 32.3864 131.785C22.0972 136.689 11.2096 138.81 0.543184 138.484C22.8387 101.216 26.676 53.8652 6.57884 11.7312ZM76.6511 13.2145C74.7259 9.16894 72.6057 5.27945 70.3423 1.52004C97.0474 0.648486 123.011 15.3219 135.239 40.9613C151.719 75.4854 137.034 116.826 102.459 133.268C92.1695 138.173 81.2819 140.293 70.6155 139.968C92.9109 102.699 96.7483 55.3485 76.6511 13.2145Z" fill="#F5F5F5"/>
                                </svg>
                            </div>
                            <div id='approach-strategies-bg' className='pattern-bg'>
                                <svg width="8.875rem" height="8.75rem" viewBox="0 0 142 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.57884 11.7312C4.65367 7.68565 2.53339 3.79616 0.27002 0.0367507C26.9882 -0.834807 52.9519 13.8386 65.1663 39.478C81.6342 74.0021 66.9613 115.343 32.3864 131.785C22.0972 136.689 11.2096 138.81 0.543184 138.484C22.8387 101.216 26.676 53.8652 6.57884 11.7312ZM76.6511 13.2145C74.7259 9.16894 72.6057 5.27945 70.3423 1.52004C97.0474 0.648486 123.011 15.3219 135.239 40.9613C151.719 75.4854 137.034 116.826 102.459 133.268C92.1695 138.173 81.2819 140.293 70.6155 139.968C92.9109 102.699 96.7483 55.3485 76.6511 13.2145Z" fill="#F5F5F5"/>
                                </svg>
                            </div>
                            <div id='approach-asset-bg' className='pattern-bg'>
                                <svg width="8.438rem" height="8.75rem" viewBox="0 0 135 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.6567 6.09462C7.72581 4.23098 3.93394 2.19104 0.281109 0C-0.565742 25.8266 13.7043 50.9354 38.6548 62.7469C72.2508 78.676 112.457 64.4846 128.459 31.0523C133.224 21.1045 135.284 10.5774 134.968 0.264436C98.7054 21.8223 52.6595 25.5244 11.6567 6.09462ZM11.6564 133.905C7.7255 135.769 3.93363 137.809 0.280796 140C-0.566055 114.173 13.704 89.0772 38.6545 77.2657C72.2505 61.3366 112.457 75.528 128.459 108.96C133.224 118.908 135.284 129.435 134.968 139.748C98.7051 118.19 52.6465 114.476 11.6564 133.905Z" fill="#F5F5F5"/>
                                </svg>
                            </div>
                            <div id='approach-sol-bg' className='pattern-bg'>
                                <svg width="9.25rem" height="8.75rem" viewBox="0 0 148 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M66.2947 11.8569C68.2455 7.76795 70.394 3.83681 72.6874 0.0371485C45.6141 -0.843742 19.3052 13.9868 6.91527 39.9007C-9.77162 74.8077 5.1095 116.578 40.144 133.196C50.57 138.153 61.6024 140.296 72.4106 139.967C49.8187 102.299 45.9304 54.442 66.2947 11.8569ZM81.7823 11.8569C79.8316 7.76795 77.6831 3.83681 75.3896 0.0371485C102.463 -0.843742 128.772 13.9868 141.149 39.9007C157.849 74.7945 142.968 116.578 107.933 133.196C97.507 138.153 86.4747 140.296 75.6664 139.967C98.2583 102.299 102.147 54.442 81.7823 11.8569Z" fill="#F5F5F5"/>
                                </svg>
                            </div>
                            <div id='news-bg' className='pattern-bg'>
                                <svg width="27.563rem" height="8.75rem" viewBox="0 0 441 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M229.44 5.16837C226.212 3.64303 223.097 1.96961 220.096 0.172772L220.091 0.167836C220.071 0.845648 220.064 1.52281 220.07 2.19899C219.905 23.0903 231.615 43.1817 251.728 52.6857C279.317 65.7177 312.233 53.9001 325.255 26.2812C328.913 18.5229 330.6 10.3424 330.537 2.30017C330.543 1.53221 330.533 0.765325 330.508 0C300.845 17.8844 263.102 21.0733 229.44 5.16837ZM9.37776 5.16837C6.14938 3.64304 3.03454 1.96961 0.0332321 0.172777C0.0133317 0.854444 0.00612017 1.53545 0.0114767 2.21547C-0.153086 23.1027 11.5609 43.1884 31.6654 52.6907C59.2547 65.7226 92.1704 53.905 105.193 26.2861C108.854 18.5292 110.538 10.3503 110.475 2.30939C110.481 1.54 110.471 0.771689 110.445 0.00494118C80.7822 17.8894 43.0388 21.0782 9.37776 5.16837ZM9.37776 75.2449C6.14938 73.7195 3.03454 72.0461 0.0332322 70.2493C-0.588749 91.5546 11.1845 112.218 31.6605 121.893C59.2498 134.925 92.1655 123.108 105.188 95.4889C109.035 87.3397 110.698 78.7247 110.447 70.2934C113.195 68.6794 116.038 67.1694 118.975 65.7819C152.636 49.8769 190.379 53.0658 220.042 70.9502C220.068 70.1835 220.078 69.4152 220.072 68.6457C220.135 60.6049 218.451 52.4259 214.79 44.6691C201.767 17.0502 168.852 5.23254 141.262 18.2645C121.158 27.7668 109.444 47.8525 109.609 68.7397C109.604 69.3469 109.609 69.9549 109.624 70.5634C80.0923 88.0176 42.731 91.0044 9.37776 75.2449ZM118.975 134.832C115.746 136.357 112.632 138.03 109.63 139.827V139.832C109.008 118.527 120.782 97.8633 141.262 88.1831C168.852 75.1511 201.767 86.9687 214.79 114.588C218.67 122.807 220.328 131.5 220.042 140C190.379 122.116 152.636 118.927 118.975 134.832ZM435.716 44.6691C439.378 52.426 441.061 60.6049 440.998 68.6458C441.004 69.4153 440.994 70.1834 440.968 70.9502C411.311 53.0658 373.567 49.8769 339.906 65.7819C336.678 67.3072 333.563 68.9806 330.562 70.7775L330.552 70.7824C330.532 70.1048 330.525 69.428 330.531 68.752C330.366 47.8604 342.081 27.7687 362.189 18.2645C389.778 5.23254 422.694 17.0502 435.716 44.6691ZM339.906 134.832C336.678 136.357 333.563 138.03 330.562 139.827L330.552 139.832C329.935 118.527 341.708 97.8633 362.189 88.1831C389.778 75.1511 422.694 86.9687 435.716 114.588C439.596 122.807 441.255 131.5 440.968 140C411.311 122.116 373.567 118.927 339.906 134.832ZM220.096 70.2493C223.097 72.0461 226.212 73.7195 229.44 75.2449C263.102 91.1498 300.845 87.9609 330.508 70.0765C330.794 78.5769 329.13 87.2698 325.255 95.4888C312.233 123.108 279.317 134.925 251.728 121.893C231.242 112.213 219.474 91.5496 220.091 70.2443L220.096 70.2493Z" fill="#F5F5F5"/>
                                </svg>
                            </div>
                            <div id='careers-bg' className='pattern-bg'>
                                <svg width="9.25rem" height="8.813rem" viewBox="0 0 148 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M110.027 0.160734C110.025 0.141415 110.023 0.122098 110.021 0.102783L109.983 0.141372C109.998 0.147817 110.012 0.154271 110.027 0.160734ZM110.027 0.160734C110.255 2.45738 110.369 4.79166 110.369 7.12593C110.369 31.8227 97.7871 53.5482 78.6445 66.2825C83.6617 68.8679 89.335 70.3343 95.3557 70.3343C115.579 70.3343 131.981 53.9341 131.981 33.7136C131.981 18.7197 122.932 5.8049 110.027 0.160734ZM24.3424 33.6751C24.3424 72.9198 56.1439 104.717 95.3939 104.717C115.965 104.717 134.49 95.9573 147.457 81.9882C139.97 115.252 110.291 140.103 74.7462 140.103C33.5664 140.103 0.182619 106.724 0.182619 65.5493C0.182619 41.1999 11.8766 19.5902 29.9386 5.96835C26.3493 14.4965 24.3424 23.8349 24.3424 33.6751Z" fill="#F5F5F5"/>
                                </svg>
                            </div>
                            <div className='cross-icon' onClick={handleCrossClick}>
                                <svg width="3.75rem" height="3.75rem" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
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