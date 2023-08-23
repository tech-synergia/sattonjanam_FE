import '../scss/Footer.scss'
import footerLogo from '../assets/footer-logo.png'

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
                    <span><i class="bi bi-caret-right-fill"></i> About Us</span>
                    <span><i class="bi bi-caret-right-fill"></i> Blogs</span>
                    <span><i class="bi bi-caret-right-fill"></i> Why We Stand Out?</span>
                    <span><i class="bi bi-caret-right-fill"></i> Services</span>
                    <span><i class="bi bi-caret-right-fill"></i> Packages</span>
                    <span><i class="bi bi-caret-right-fill"></i> Testimonials</span>
                    <span><i class="bi bi-caret-right-fill"></i> Success Stories</span>
                </div>
            </div>

            <div className="impLinks">
                <h3>Other Links</h3>
                <div className="Links">
                    <span><i class="bi bi-caret-right-fill"></i> Press & Media</span>
                    <span><i class="bi bi-caret-right-fill"></i> Gallery</span>
                    <span><i class="bi bi-caret-right-fill"></i> Privacy Policies</span>
                    <span><i class="bi bi-caret-right-fill"></i> Disclaimer</span>
                    <span><i class="bi bi-caret-right-fill"></i> Sitemap</span>
                </div>
            </div>

            <div className="impLinks">
                <h3>Support</h3>
                <div className="Links">
                    <span><i class="bi bi-telephone-fill"></i> +91-11-47094491</span>
                    <span style={{borderLeft: "1px solid grey",marginLeft:"8px"}}> <span style={{marginLeft: "12px"}}>+91-9599991982</span> </span>
                    <span><i class="bi bi-envelope-fill"></i> contact@wedgatematrimony.com</span>
                    <span className='location'><i class="bi bi-geo-alt-fill"></i> I-7, Metro Pillar No 333, Najafgarh Road, Near Moti Nagar Metro Station, Kailash Park, New Delhi 110015 (Above Pind Balluchi Restaurant)</span>
                    <span><i class="bi bi-geo-fill"></i> Get Direction</span>
                </div>
            </div>
        </div>

        <div className="footerEnd">
            <p>© 2008 - 2023 Wedgate Matrimony and Event Services | All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
