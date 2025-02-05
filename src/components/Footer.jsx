const Footer = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <footer className=" border-t py-10 border-primaryDark">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-md font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href=""
                    className="text-primaryDark hover:text-primaryMain"
                  >
                    Book a Demo
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@sandalsdisciple.com"
                    target="_blank"
                    className="text-primaryDark hover:text-primaryMain"
                  >
                    Email us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">More Information</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href=""
                    target="_blank"
                    className="text-primaryDark hover:text-primaryMain"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    className="text-primaryDark hover:text-primaryMain"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
