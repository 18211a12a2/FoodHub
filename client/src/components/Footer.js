import '../styles/Footer.css'

const Footer = () =>{
    return (
        <div className="footer">
            <div className="footer_main">
                <div className="footer_container">
                    <div className="footer_parts">
                        <div className="footer_part_header">Company</div>
                        <ul className="footer_ul">
                            <li className="footer_li"><span className="footer_li_span" >About us</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Team</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Careers</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Food Blog</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Bug Bounty</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Food One</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Food Corporate</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Food Instamart</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Food Genie</span></li>
                        </ul>
                    </div>
                    <div className="footer_parts">
                        <div className="footer_part_header">Contact</div>
                        <ul className="footer_ul">
                            <li className="footer_li"><span className="footer_li_span" >Help &amp; Support</span></li>
                            <li className="footer_li"><span className="footer_li_span">Partner with us</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Ride with us</span></li>
                        </ul>
                    </div>
                    <div className="footer_parts">
                        <div className="footer_part_header">Legal</div>
                        <ul className="footer_ul">
                            <li className="footer_li"><span className="footer_li_span" >Terms &amp; Conditions</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Refund &amp; Cancellation</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Privacy Policy</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Cookie Policy</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Offer Terms</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Phishing &amp; Fraud</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Corporate – Food Money Codes Terms and Conditions</span></li>
                            <li className="footer_li"><span className="footer_li_span" >Corporate - Food Discount Voucher Terms and Conditions</span></li>
                        </ul>
                        </div>
                    <div className="footer_app_icons">
                        <span>
                            <img alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"/>
                        </span>
                        <span>
                            <img alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;