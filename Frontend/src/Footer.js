
import './App.css';

function Footer() {
  return (
    <div className="footer">
    <div className="container">
        <div className="w3_footer_grids">
            <div className="col-md-3 w3_footer_grid">
                <h3>Contact</h3>
                <p>Please reach out to our headquater for more information. </p>
                <ul className="address">
                    <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>1234k Avenue, 4th block, <span>New York City.</span></li>
                    <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
                    <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 567</li>
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                <h3>Information</h3>
                <ul className="info"> 
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="mail.html">Contact Us</a></li>
                    <li><a href="codes.html">Short Codes</a></li>
                    <li><a href="faq.html">FAQ's</a></li>
                    <li><a href="products.html">Special Products</a></li>
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                <h3>Category</h3>
                <ul className="info"> 
                    <li><a href="products.html">Milk</a></li>
                    <li><a href="products1.html">Curd</a></li>
                    <li><a href="products.html">Ghee</a></li>
                    <li><a href="products1.html">Sweets</a></li>
                    <li><a href="products2.html">Ice Cream</a></li>
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                <h3>Profile</h3>
                <ul className="info"> 
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html">Today's Deals</a></li>
                </ul>
                <h4>Follow Us</h4>
                <div className="agileits_social_button">
                    <ul>
                        <li><a href="#" className="facebook"> </a></li>
                        <li><a href="#" className="twitter"> </a></li>
                        <li><a href="#" className="google"> </a></li>
                        <li><a href="#" className="pinterest"> </a></li>
                    </ul>
                </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
    <div className="footer-copy">
        <div className="footer-copy1">
            <div className="footer-copy-pos">
                <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
            </div>
        </div>
        <div className="container">
            <p>&copy; 2023 Dairy Delight. All rights reserved </p>
        </div>
    </div>
</div>
  )
}
export default Footer;