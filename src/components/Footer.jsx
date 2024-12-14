import footerLogo from "../assets/logo/cygnus_footer.png";

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/*----------- First Section (Logo and About) -----------*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-white">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img className="mb-5 w-40" src={footerLogo} alt="Cygnus Logo" />
            <p className="leading-6 text-white">
              Cygnus was founded in 2000 with a mission to provide
              mission-critical IT solutions that integrate advanced technologies
              to meet market demands and exceed customer expectations.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xl font-medium text-white mb-4">COMPANY</p>
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>Solutions</li>
              <li>Industries</li>
              <li>Case Studies</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <p className="text-xl font-medium text-white mb-4">RESOURCES</p>
            <ul className="flex flex-col gap-2">
              <li>Careers</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-xl font-medium text-white mb-4">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2">
              <li>sales@cygnussolutions.co.in</li>
              <li>+91-022-49636820</li>
              <li>Fonts for apps</li>
            </ul>
          </div>
        </div>

        {/*----------- Footer Bottom Section (Copyright) -----------*/}
        <div className="py-5">
          <p className="text-sm text-center text-white">
            Copyright 2024 @ Cygnus - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
