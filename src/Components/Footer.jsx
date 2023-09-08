import '../scss/Footer.scss'
import footerLogo from '../assets/sattonjanamLogo.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="footerColumns">
            <div className="footerLogoInfo">
            <img src={footerLogo} alt="no image" />
            <p>Marriage is a journey of two individuals who come together to grow, learn, and support each other in every aspect of life.</p>
            </div>
            <div className="impLinks">
                <h4>IMPORTANT LINKS</h4>
                <div className="Links">
                    <Link to={"/about"}><span><i className="bi bi-caret-right-fill"></i> About Us</span></Link>
                    {/* <span><i className="bi bi-caret-right-fill"></i> Blogs</span>
                    <span><i className="bi bi-caret-right-fill"></i> Why We Stand Out?</span> */}
                    <Link to={"/service"}><span><i className="bi bi-caret-right-fill"></i> Services</span></Link>
                    {/* <span><i className="bi bi-caret-right-fill"></i> Packages</span>
                    <span><i className="bi bi-caret-right-fill"></i> Testimonials</span> */}
                   <Link to={"/successstories"}> <span><i className="bi bi-caret-right-fill"></i> Success Stories</span></Link>
                </div>
            </div>

            <div className="impLinks">
                <h4>OTHER LINKS</h4>
                <div className="Links">
                    {/* <span><i className="bi bi-caret-right-fill"></i> Press & Media</span>
                    <span><i className="bi bi-caret-right-fill"></i> Gallery</span> */}
                    <Link to={"/terms&privacy"}><span><i className="bi bi-caret-right-fill"></i> Terms&Privacy Policy</span></Link>
                  
                    <Link to={"/refund"}><i className="bi bi-caret-right-fill"></i> Refund&Copyright Policies</Link>
                    <Link to={"/disclaimer"}><span><i className="bi bi-caret-right-fill"></i> Disclaimer</span></Link>
                    {/* <span><i className="bi bi-caret-right-fill"></i> Sitemap</span> */}
                </div>
            </div>

            <div className="impLinks">
                <h4>SUPPORT</h4>
                <div className="Links">
                    <span><i className="bi bi-telephone-fill"></i> 9773643677 </span>
                    <span><i className="bi bi-envelope-fill"></i> info@sattonjanam.com</span>
                    {/* <span className='location'><i class="bi bi-geo-alt-fill"></i> Add- 224, Ground floor, IP colony Faridabad, Haryana. Pin- 121009</span>
                    <span><i className="bi bi-geo-fill"></i> Get Direction</span> */}
                </div>

                <h4>OPENING HOURS</h4>
                    <div className="Links">
                        <span>Wed-Mon: 10AM to 7PM</span>
                        <span>Tuesday - Weekly Off</span>
                    </div>
            </div>
        </div>
        {/* <div className="footerColumns"> */}
            <div className="impLinks">
                
                <div className="Links logos">
                    
                    <span><Link to={"whatsapp://send?text=Hi!&phone=9773643677"} className="bi bi-whatsapp" > </Link></span>
                    <span><Link to={"mailto:info@sattonjanam.com"} className="bi bi-envelope-fill" > </Link></span>
                    <span><Link to={"https://www.linkedin.com/company/sattonjanam-matrimonial-services/about/?viewAsMember=true"} className='bi bi-linkedin'></Link></span>
                    <span><Link to={"https://www.facebook.com/profile.php?id=61550954489680&sk=about_contact_and_basic_info"} className='bi bi-facebook'></Link></span>
                    <span><Link to={"https://www.instagram.com/sattonjanam_matrimony/"} className='bi bi-instagram'></Link></span>
                    <span><Link to={"#"} className='bi bi-twitter'></Link></span>
                </div>
            </div>
        {/* </div> */}

        <div className="footerEnd">
            <p>© 2023 sattonjanam.com. All Rights Reserved. | Privacy Policy</p>
            <span> <a
            style={{
            color: "lightblue",
            textDecoration: "none",
            textAlign: 'left',
            marginLeft: '0px'
            }}
            href="https://techsynergia.com"
            target="_blank"
                >
                    Powered by Tech Synergia
                </a></span>
        </div>
    </footer>
  )
}

export default Footer
