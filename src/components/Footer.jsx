import React from 'react'

function Footer() {
  return (
       <>
       <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">
              123 Main Street<br />
              City, State 12345<br />
              Email: info@example.com<br />
              Phone: (123) 456-7890
            </p>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
       </>
  
  )
}

export default Footer