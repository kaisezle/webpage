export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">KAISEZLE</h3>
            <p className="text-sm leading-relaxed">
              Innovating tomorrow's solutions today through cutting-edge software and premium consumer goods.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Software</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home & Living</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Lifestyle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex justify-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} KAISEZLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
