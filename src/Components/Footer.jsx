import '../scss/Footer.scss'
import footerLogo from '../assets/websiteLogo.svg'


function Footer() {
  return (
    <footer>
        <div className="footerColumns">
            <div className="footerLogoInfo">
            <img src={footerLogo} alt="no image" />
            <p>A decade old matrimonial company in Delhi focused to provide most genuine & selectivity choosen mactches to every individuals's preferences and suitablity</p>
            </div>
            <div className="impLinks">
                <h3>Important Links</h3>
                <div className="Links">
                    <a href="/about"><span><i className="bi bi-caret-right-fill"></i> About Us</span></a>
                    {/* <span><i className="bi bi-caret-right-fill"></i> Blogs</span>
                    <span><i className="bi bi-caret-right-fill"></i> Why We Stand Out?</span> */}
                    <a href="/service"><span><i className="bi bi-caret-right-fill"></i> Services</span></a>
                    {/* <span><i className="bi bi-caret-right-fill"></i> Packages</span>
                    <span><i className="bi bi-caret-right-fill"></i> Testimonials</span> */}
                   <a href="/successstories"> <span><i className="bi bi-caret-right-fill"></i> Success Stories</span></a>
                </div>
            </div>

            <div className="impLinks">
                <h3>Other Links</h3>
                <div className="Links">
                    {/* <span><i className="bi bi-caret-right-fill"></i> Press & Media</span>
                    <span><i className="bi bi-caret-right-fill"></i> Gallery</span> */}
                    <a href="/terms&privacy"><span><i className="bi bi-caret-right-fill"></i> Terms&Privacy Policy</span></a>
                  
                   <a href="/refund"><i className="bi bi-caret-right-fill"></i> Refund&Copyright Policies</a>
                    <a href="/disclaimer"><span><i className="bi bi-caret-right-fill"></i> Disclaimer</span></a>
                    {/* <span><i className="bi bi-caret-right-fill"></i> Sitemap</span> */}
                </div>
            </div>

            <div className="impLinks">
                <h3>Support</h3>
                <div className="Links">
                    <span><i className="bi bi-telephone-fill"></i> 9773643677 </span>
                    <span><i className="bi bi-envelope-fill"></i> support@sattonjanam.com</span>
                    <span className='location'><i class="bi bi-geo-alt-fill"></i> Add- 224, Ground floor, IP colony Faridabad, Haryana. Pin- 121009</span>
                    <span><i className="bi bi-geo-fill"></i> Get Direction</span>
                </div>
            </div>
        </div>
        {/* <div className="footerColumns"> */}
            <div className="impLinks">
                
                <div className="Links logos">
                    
                    <span><a href="whatsapp://send?text=Hi!&phone=9773643677" className="bi bi-whatsapp" > </a></span>
                    <span><a href="mailto:support@sattonjanam.com" className="bi bi-envelope-fill" > </a></span>
                    <span><a href="https://www.linkedin.com/company/sattonjanam-matrimonial-services/about/?viewAsMember=true" className='bi bi-linkedin'></a></span>
                    <span><a href="https://www.facebook.com/profile.php?id=61550954489680&sk=about_contact_and_basic_info" className='bi bi-facebook'></a></span>
                    <span><a href="#" className='bi bi-instagram'></a></span>
                    <span><a href="#" className='bi bi-twitter'></a></span>
                </div>
            </div>
        {/* </div> */}

        <div className="footerEnd">
            <p>© 2023 sattonjanam.com. All Rights Reserved. | Privacy Policy</p>
        </div>
    </footer>
  )
}

export default Footer
