import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              KAISEZLE
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#software" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Software</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Consumer Goods</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-md">
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#software" className="block text-gray-700 hover:text-blue-600 font-medium">Software</a>
            <a href="#products" className="block text-gray-700 hover:text-blue-600 font-medium">Consumer Goods</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#contact" className="block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
