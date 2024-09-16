import '../styles/components/footer.scss';
// import $ from 'jquery';

function Footer () {
    return (
        <div className="footer-sec">
            <div className="main-footer-wrapper">
                <div className="description-wrapper">
                    <div className="footer-logo-wrapper">
                        <svg className='footer-logo' viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 38.8632V0.395508H8.73836V30.3991H27.9165V38.8632H0ZM140.277 39.0003C137.602 39.0003 135.58 38.3489 134.204 37.0504C132.828 35.7518 132.143 33.909 132.143 31.5262V18.5579H127.36V11.0281H132.143V2.45689H140.221V11.0281H147.146V18.5579H140.221V29.4948C140.221 30.1205 140.375 30.5748 140.688 30.8705C141.001 31.1619 141.502 31.3076 142.201 31.3076H147.146V39.0003H140.277ZM109.905 33.2876C111.297 33.2876 112.514 33.069 113.56 32.6276C114.606 32.1862 115.412 31.5476 115.977 30.7034C116.543 29.8591 116.83 28.8734 116.83 27.7377V27.1334H109.686C108.182 27.1334 107.067 27.4077 106.335 27.9563C105.602 28.5048 105.233 29.2377 105.233 30.1548C105.233 31.1448 105.627 31.9119 106.416 32.4647C107.205 33.0133 108.366 33.2876 109.905 33.2876ZM108.034 39.6046C105.725 39.6043 103.75 39.2272 102.1 38.4775C100.45 37.7275 99.2076 36.6818 98.3634 35.3447C97.5191 34.0076 97.0991 32.4776 97.0991 30.7548C97.0991 29.032 97.5191 27.4292 98.3634 26.0578C99.2033 24.6821 100.489 23.6021 102.212 22.8135C103.935 22.025 106.039 21.6307 108.529 21.6307H116.826V20.9707C116.826 19.7622 116.35 18.7722 115.399 18.0008C114.443 17.2337 113.183 16.848 111.606 16.848C110.582 16.848 109.712 16.9765 108.996 17.2337C108.28 17.4908 107.723 17.8037 107.32 18.1679C106.917 18.5322 106.587 18.9736 106.33 19.4879H98.3077C98.4919 17.838 99.1133 16.3294 100.176 14.9537C101.239 13.5781 102.722 12.4809 104.629 11.6538C106.532 10.831 108.842 10.4196 111.554 10.4196C114.267 10.4196 116.573 10.8781 118.587 11.7952C120.601 12.7124 122.166 13.9852 123.284 15.6137C124.403 17.2465 124.96 19.0851 124.96 21.1379V39.0003H117.927L117.267 36.4718H116.937C116.17 37.3161 114.996 38.0489 113.419 38.6703C111.842 39.2915 110.047 39.6044 108.034 39.6046ZM170.846 19.6293C171.489 20.4565 171.883 21.3607 172.029 22.3507H172.024H157.351C157.646 21.3222 158.148 20.3965 158.863 19.5736C159.575 18.7508 160.445 18.0994 161.473 17.6237C162.498 17.148 163.672 16.908 164.992 16.908C166.166 16.908 167.272 17.1565 168.317 17.6494C169.363 18.1465 170.203 18.8065 170.846 19.6293ZM157.081 37.6803C159.425 38.966 162.026 39.6046 164.885 39.6046L164.893 39.6003C167.533 39.6003 169.843 39.1417 171.819 38.2246C173.794 37.3118 175.38 36.1718 176.572 34.8175C177.759 33.4633 178.633 32.0876 179.181 30.6948H170.773C170.225 31.3205 169.462 31.869 168.493 32.3448C167.52 32.8205 166.303 33.0604 164.838 33.0604C163.629 33.0604 162.502 32.8205 161.456 32.3448C160.41 31.869 159.54 31.2005 158.846 30.3391C158.148 29.4777 157.672 28.5177 157.415 27.4549H179.726C179.799 27.1249 179.863 26.7049 179.919 26.1906C179.97 25.6763 180 25.1449 180 24.5964C180 21.9221 179.349 19.5008 178.05 17.3408C176.747 15.1809 174.952 13.4881 172.663 12.2581C170.37 11.0324 167.932 10.4196 164.996 10.4196C162.06 10.4196 159.425 11.0624 157.081 12.3438C154.736 13.6252 152.885 15.3652 151.531 17.5637C150.176 19.7622 149.499 22.2307 149.499 24.9821C149.499 27.7334 150.176 30.2148 151.531 32.4305C152.885 34.6504 154.736 36.3989 157.081 37.6803ZM64.9913 11.0281V39.0003H73.1254V24.3264C73.1254 23.0793 73.3782 21.9907 73.8925 21.0564C74.4068 20.1222 75.1353 19.4065 76.091 18.9136C77.0424 18.4208 78.0496 18.1722 79.2238 18.1722C80.3981 18.1722 81.4309 18.4208 82.3309 18.9136C83.2266 19.4065 83.9423 20.1222 84.4737 21.0564C85.0051 21.9907 85.2708 23.0793 85.2708 24.3264V39.0003H93.3492V23.1735C93.3492 20.5379 92.8306 18.2579 91.7849 16.3337C90.7393 14.4095 89.295 12.9438 87.4436 11.9367C85.5922 10.9295 83.5309 10.4238 81.2595 10.4238C79.4252 10.4238 77.7667 10.7367 76.2839 11.3581C74.7968 11.9795 73.674 12.7124 72.9025 13.5566H72.6283L72.024 11.0281H64.9913ZM49.8503 31.9848C41.4933 31.9848 34.7178 25.2092 34.7178 16.8523C34.7178 14.7566 35.142 12.7638 35.9134 10.951C32.065 13.848 29.575 18.4551 29.575 23.645C29.575 32.4133 36.6848 39.5232 45.4532 39.5232C53.0216 39.5232 59.3472 34.2261 60.9414 27.142C58.1772 30.1205 54.2344 31.9848 49.8503 31.9848ZM53.043 11.1952C53.043 10.6895 53.0173 10.1924 52.9702 9.69957C55.7258 10.9038 57.6543 13.6509 57.6543 16.8523C57.6543 21.1636 54.1573 24.6564 49.8502 24.6564C48.5646 24.6564 47.356 24.3435 46.2889 23.7949C50.3602 21.0822 53.043 16.4537 53.043 11.1952Z"/>
                        </svg>
                    </div>
                    <div className="description">
                        <p className="description-text">
                            Lunate is a new Abu Dhabi-based, Partner-led independent global alternative investment management company with more than 150 employees and more than US$60 billion of assets under management. Lunate invests across the entire private market spectrum including buyouts, growth equity, early and late-stage venture capital, private credit, real assets, and public equities and public credit. Lunate aims to be one of the world’s leading private markets solutions providers through SMAs and multi-asset class funds, seeking to generate best-in-class risk-adjusted returns for its clients. 
                        </p>
                    </div>
                </div>
                <div className="links-wrapper">
                    <div className="links-columns-wrapper">
                        <ul className='links-col'>
                            <li className='links-col-title'>About Lunate</li>
                            <li className='link-wrapper'>
                                <a href="#" className="link">
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Who we are</span>
                                </a>
                            </li>
                            <li className='link-wrapper'>
                                <a href="#" className="link">                                    
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Our team</span>
                                </a>
                            </li>
                        </ul>

                        <ul className='links-col'>
                            <li className='links-col-title'>Our Approach</li>
                            <li className='link-wrapper'>
                                <a href="#" className="link">                                    
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Asset classes</span>
                                </a>
                            </li>
                            <li className='link-wrapper'>
                                <a href="#" className="link">                                    
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Investment strategies</span>
                                </a>
                            </li>
                            <li className='link-wrapper'>
                                <a href="#" className="link">                                    
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Solutions & products</span>
                                </a>
                            </li>
                        </ul>

                        <ul className='links-col'>
                            <li className='links-col-title'>News & Insights</li>
                            <li className='link-wrapper'>
                                <a href="#" className="link">                                    
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Careers</span>
                                </a>
                            </li>
                            <li className='link-wrapper'>
                                <a href="#" className="link">
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Contact us</span>
                                </a>
                            </li>
                            <li className='link-wrapper'>
                                <a href="#" className="link">                                    
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Privacy policy</span>
                                </a>
                            </li>
                            <li className='link-wrapper'>
                                <a href="#" className='link'>
                                    <span className="link-arrow-span">
                                        <svg className='link-arrow' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.02344 18.1202L15.0234 12.1202L9.02344 6.12024" stroke="#453D43" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="link-text">Term of use</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright-footer">
                <div className="social-links-sec">
                    <div className="social-link-wrapper">
                        <a href="#" className="social-link">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9970_1663)">
                                    <path d="M23.6729 0.620605H2.36914C1.34863 0.620605 0.523438 1.42627 0.523438 2.42236V23.814C0.523438 24.8101 1.34863 25.6206 2.36914 25.6206H23.6729C24.6934 25.6206 25.5234 24.8101 25.5234 23.8188V2.42236C25.5234 1.42627 24.6934 0.620605 23.6729 0.620605ZM7.94043 21.9243H4.22949V9.99072H7.94043V21.9243ZM6.08496 8.36475C4.89355 8.36475 3.93164 7.40283 3.93164 6.21631C3.93164 5.02978 4.89355 4.06787 6.08496 4.06787C7.27148 4.06787 8.2334 5.02978 8.2334 6.21631C8.2334 7.39795 7.27148 8.36475 6.08496 8.36475ZM21.8271 21.9243H18.1211V16.1235C18.1211 14.7417 18.0967 12.9595 16.1924 12.9595C14.2637 12.9595 13.9707 14.4683 13.9707 16.0259V21.9243H10.2695V9.99072H13.8242V11.6216H13.873C14.3662 10.6841 15.5771 9.69287 17.3789 9.69287C21.1338 9.69287 21.8271 12.1636 21.8271 15.3765V21.9243Z" fill="#453D43"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_9970_1663">
                                        <rect width="25" height="25" fill="white" transform="translate(0.523438 0.620605)"/>
                                    </clipPath>
                                </defs>
                            </svg> 
                        </a>
                    </div>
                    <div className="social-link-wrapper">
                        <a href="#" className="social-link">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9970_1667)">
                                    <path d="M25.5234 13.1206C25.5234 6.21704 19.927 0.620605 13.0234 0.620605C6.11987 0.620605 0.523438 6.21704 0.523438 13.1206C0.523438 19.3596 5.09448 24.531 11.0703 25.4688V16.7339H7.89648V13.1206H11.0703V10.3667C11.0703 7.23389 12.9365 5.50342 15.7917 5.50342C17.1589 5.50342 18.5898 5.74756 18.5898 5.74756V8.82373H17.0137C15.4609 8.82373 14.9766 9.78735 14.9766 10.7769V13.1206H18.4434L17.8892 16.7339H14.9766V25.4688C20.9524 24.531 25.5234 19.3596 25.5234 13.1206Z" fill="#453D43"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_9970_1667">
                                        <rect width="25" height="25" fill="white" transform="translate(0.523438 0.620605)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div className="social-link-wrapper">
                        <a href="#" className="social-link">
                            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0201 1.5585C26.439 1.98011 26.7398 2.50436 26.8925 3.07876C27.457 5.19888 27.457 9.62013 27.457 9.62013C27.457 9.62013 27.457 14.0414 26.8925 16.1615C26.7398 16.7359 26.439 17.2601 26.0201 17.6818C25.6012 18.1034 25.0789 18.4076 24.5054 18.5639C22.3945 19.1315 13.957 19.1315 13.957 19.1315C13.957 19.1315 5.51953 19.1315 3.40862 18.5639C2.8352 18.4076 2.3129 18.1034 1.89398 17.6818C1.47506 17.2601 1.17422 16.7359 1.02158 16.1615C0.457031 14.0414 0.457031 9.62013 0.457031 9.62013C0.457031 9.62013 0.457031 5.19888 1.02158 3.07876C1.17422 2.50436 1.47506 1.98011 1.89398 1.5585C2.3129 1.13689 2.8352 0.832703 3.40862 0.676379C5.51953 0.108765 13.957 0.108765 13.957 0.108765C13.957 0.108765 22.3945 0.108765 24.5054 0.676379C25.0789 0.832703 25.6012 1.13689 26.0201 1.5585ZM18.2525 9.62016L11.1957 5.60545V13.6349L18.2525 9.62016Z" fill="#453D43"/>
                            </svg>
                        </a>
                    </div>
                    <div className="social-link-wrapper">
                        <a href="#" className="social-link">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6146 2.60364H23.1287L15.4515 11.3781L24.4831 23.3182H17.4114L11.8727 16.0766L5.5351 23.3182H2.01894L10.2304 13.9329L1.56641 2.60364H8.81756L13.8241 9.22273L19.6146 2.60364ZM18.3813 21.2149H20.3285L7.75953 4.59648H5.67001L18.3813 21.2149Z" fill="#453D43"/>
                            </svg>
                        </a>
                    </div>
                    <div className="social-link-wrapper">
                        <a href="#" className="social-link">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6851 7.93532C18.8573 7.93694 18.1842 7.26665 18.1826 6.43882C18.1809 5.61098 18.8512 4.93787 19.6794 4.93625C20.5077 4.93463 21.1808 5.60531 21.1824 6.43314C21.1836 7.26098 20.5133 7.9337 19.6851 7.93532Z" fill="#453D43"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0354 19.5383C9.49124 19.5452 6.61208 16.6778 6.60521 13.1327C6.59831 9.58855 9.46652 6.70895 13.0107 6.70207C16.5557 6.69518 19.4352 9.56425 19.4421 13.1081C19.449 16.6531 16.58 19.5314 13.0354 19.5383ZM13.0151 8.9543C10.7147 8.95836 8.85254 10.8275 8.85659 13.1283C8.86104 15.4295 10.7305 17.2914 13.0309 17.2869C15.3322 17.2824 17.1944 15.4137 17.1899 13.1125C17.1854 10.8113 15.316 8.94985 13.0151 8.9543Z" fill="#453D43"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81427 1.29402C5.60808 0.982976 6.51649 0.769941 7.84651 0.707166C9.1798 0.643181 9.60544 0.628596 12.9993 0.622119C16.3941 0.615641 16.8197 0.628594 18.153 0.687724C19.4834 0.745234 20.3922 0.955031 21.1877 1.26284C22.0106 1.57995 22.7088 2.00684 23.4046 2.6998C24.1004 3.39357 24.5289 4.08938 24.8501 4.91113C25.1607 5.70576 25.3737 6.61337 25.4369 7.94423C25.5001 9.27709 25.5155 9.70234 25.522 13.0967C25.5285 16.4907 25.5147 16.9167 25.4564 18.2508C25.3984 19.5804 25.1891 20.4897 24.8813 21.2847C24.5633 22.1077 24.1373 22.8059 23.4443 23.5017C22.7514 24.1979 22.0548 24.626 21.233 24.9476C20.4384 25.2578 19.5308 25.4709 18.2008 25.5344C16.8675 25.5976 16.4419 25.6126 13.0467 25.6191C9.65322 25.6256 9.22758 25.6126 7.89432 25.5539C6.56388 25.4956 5.65466 25.2862 4.85963 24.9788C4.03668 24.6604 3.33846 24.2348 2.64266 23.5414C1.94647 22.848 1.51759 22.1518 1.19683 21.3301C0.885789 20.5359 0.673549 19.6278 0.609972 18.2982C0.546392 16.9645 0.531412 16.5385 0.524937 13.1445C0.518437 9.75014 0.531809 9.32489 0.590122 7.9916C0.648854 6.66076 0.857434 5.75192 1.16524 4.95608C1.48315 4.13351 1.90921 3.43569 2.60299 2.73949C3.29594 2.04369 3.99253 1.61437 4.81427 1.29402ZM5.67087 22.8788C6.11191 23.0485 6.77367 23.251 7.99233 23.3041C9.31101 23.3612 9.70587 23.3737 13.0427 23.3672C16.3807 23.3612 16.7756 23.347 18.0938 23.285C19.3113 23.2271 19.973 23.0222 20.4129 22.8505C20.9965 22.6224 21.412 22.3499 21.8486 21.9129C22.2852 21.4742 22.5553 21.0575 22.7813 20.4739C22.9514 20.0324 23.1535 19.3702 23.2066 18.1516C23.2645 16.8337 23.2766 16.4384 23.2702 13.1008C23.2641 9.76391 23.2499 9.36863 23.1871 8.05033C23.1296 6.83247 22.9251 6.17069 22.753 5.73126C22.525 5.14684 22.2532 4.73212 21.815 4.29512C21.3768 3.85811 20.96 3.58878 20.3756 3.36279C19.9354 3.19229 19.2728 2.99059 18.055 2.93754C16.7363 2.87962 16.341 2.86787 13.0034 2.87436C9.66659 2.88083 9.27173 2.89419 7.95345 2.95657C6.73521 3.01448 6.07424 3.21901 5.63359 3.39114C5.05039 3.61916 4.63486 3.89011 4.19787 4.32873C3.76167 4.76735 3.49154 5.18329 3.26556 5.76812C3.09628 6.20877 2.89255 6.87136 2.84031 8.08922C2.78279 9.40791 2.77065 9.8032 2.77713 13.14C2.78321 16.4777 2.79738 16.873 2.85935 18.1905C2.91645 19.4091 3.12258 20.0701 3.29391 20.5112C3.52192 21.094 3.79369 21.5095 4.23149 21.9465C4.67011 22.3819 5.08685 22.6528 5.67087 22.8788Z" fill="#453D43"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="copyright-text-sec">
                    <div className="copyright-text-wrapper">
                        <p className="copyright-text">
                        ⓒ Lunate <span className="copyright-year">2023</span>. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;