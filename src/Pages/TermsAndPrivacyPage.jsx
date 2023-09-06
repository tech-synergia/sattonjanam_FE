import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Typography } from 'antd'
import ConnectWithUs from '../Components/ConnectWithUs';
import Menu from '../Components/Menu';

const {Title} = Typography;

function TermsAndPrivacyPage() {
  return (
    <>
      <Navbar/>
      <Menu/>
            <div className="matrimony">
                    <div className="sattojanamAbout">
                        <Title level={2} className="titleStyle">Terms of Use/ Privacy Policy</Title>
                        <p>Welcome to Sattonjanam.com, your personal matchmaking advertiser. This Agreement sets out the legally binding terms for your use of the Site and membership. This Agreement may be modified by Sattonjanam.com from time to time. The membership and rights of admissions are reserved.</p>
                        <p>This Terms of Use is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011.</p>
                        <p>Sattonjanam.com is an advertising platform providing targeted advertising services for matchmaking alliances. Sattonjannam.com is for the personal use of individual members to advertise and promote their profiles for the purpose of finding relevant matches and cannot be used in connection with any commercial endeavors. Access to the Sattonjanam.com website is free. Whereas, we also offer Premium Memberships wherein one can avail the contact details of the prospect as per the available membership plans.</p>
                        <p>The terms "You", "User" and “Member” shall be interchangeably used for the person availing our Services and/or using our Site.</p>

                        <Title level={2} className="titleStyle">Acceptance of the Terms of Use Agreement</Title>
                        <p>In order to use the Sattonjanam.com Website/Mobile Site/Sattonjanam.com network sites ("Site"), you must register as a member 
                            of the Site ("Member"). Sattonjanam.com is intermediary as defined under sub-clause (w) of Section 2 of the Information 
                            Technology Act, 2000. This Agreement is an electronic contract that establishes the legally binding terms you must accept 
                            to use the Site and to become a "Member." For purposes of this Agreement, the term "Member" means a person who voluntarily
                            submits information to the Site whether such person uses the Service as a free member or a paid member and User shall mean 
                            a person who actively uses the Site to promote his/her profile for matchmaking purpose. By using the Site, you agree to be
                            bound by these Terms of Use ("Agreement"). If you wish to become a Member and promote/ advertise your profile to other
                            Members and make use of the Sattonjanam.com service ("Service"), read these Terms of Use and follow the instructions in
                            the Registration process. By using the Service, you consent to submit your personal identifiable information, including 
                            sensitive personal data such as your financial data if opted for our paid membership, Identity proofs if submitted, 
                            religion etc to collect, process, display and use the said information to provide the Service and if you have any 
                            objection in collecting/processing your personal data, we advise you not to register with our Site. If you want to 
                            withdraw this consent or if you have any objection in continuous collection or storage of your personal details, you must
                            discontinue using our Service and delete your account by sending an email from your registered email ID to
                            support@sattonjanam.com and we shall comply with the same within 30 days unless otherwise the same is prohibited by law. 
                            The site is a serious matchmaking platform to seek life partners for marriage and is not a casual dating site. 
                            The membership and rights of admission are reserved.
                        </p>

                        <Title level={2} className="titleStyle">Eligibility</Title>
                        <p>To register as a member of Sattonjanam.com or use this Site, you must be legally competent and of legal marriageable age as per the laws of India (currently, 18 years or over for females and 21 years or over for males).</p>
                        <p>The Sattonjanam.com site is only to facilitate personal advertisement for lawful marriage alliance between persons who are legally competent to enter into matrimony under the laws to which they are subject.</p>
                        <p>Membership in the Service is void where prohibited. By using this Site, you represent and warrant that you have the right, consent, authority, and legal capacity to enter into this Agreement, submit relevant information to us; and that you are not prohibited or prevented by any applicable law for the time being in force or any order or decree or injunction from any court, tribunal or any such competent authority restraining you from entering into matrimony.</p>
                        <p>You further confirm that, you intent to seek a life partner and that you shall not use this site for casual dating. You also agree to abide by all of the terms and conditions of this Agreement. If at any time Sattonjanam.com is of the opinion (in its sole discretion) or has any reason to believe that you are not eligible to become a member or that you have made any misrepresentation, or acted in violation to this Terms of Use, Sattonjanam.com reserves the right to forthwith terminate your membership and / or your right to use the Service without any refund to you of any of your unutilized subscription fee.</p>
                        <p>By using this Site, you acknowledge that the match mails or the match search results shown to you by the system are based on the partner preference details submitted by you in your profile.</p>

                        <Title level={2} className="titleStyle">Account Security</Title>
                        <p>You are responsible for maintaining the confidentiality of your login credentials, and you are solely responsible for all activities that occur under your account. You agree to immediately notify us of any disclosure or unauthorized use of your account or any other breach of security, and ensure that you log out from your account at the end of each session</p>

                        <Title level={2} className="titleStyle">Terms &Termination</Title>
                        <p>This Agreement will be effective, valid and subsisting as long as you use our Site.</p>
                        <p>You may terminate your membership at any time, for any reason by writing to Sattonjanam.com. In the event you terminate your membership, you will not be entitled to a refund of any unutilized subscription fees, if any, paid by you, except where otherwise agreed in writing.</p>
                        <p>Sattonjanam.com may terminate your access to the Site and/or your membership for any reason including but not limited to breach of the terms of use, using the service for commercial purpose, engaging in prohibited or inappropriate communication or activity, by sending notice to you at the email address as provided by you in your application for membership or such other email address as you may later provide to Sattonjanam.com. If Sattonjanam.com terminates your membership for breach of terms of this Agreement, you will not be entitled to any refund of any Subscription fees, if any, paid by you.</p>
                        <p>Certain provisions of this Agreement including sections 4, 7 and sections 10 to 14, of this Agreement shall remain effective even on termination.</p>
                        <p>Term for the paid Membership would be in accordance with the type of membership undertaken.</p>
                    
                        <Title level={2} className="titleStyle">Privacy</Title>
                        <p>Use of the Sattonjanam.com Site and/or the Sattonjanam.com Service is governed by our Privacy Policy and follow simple guidelines to protect your privacy.</p>
                    
                    </div>


            </div>
            <ConnectWithUs/>
      <Footer/>
    </>
  )
}

export default TermsAndPrivacyPage
