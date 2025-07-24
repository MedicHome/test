import { useState } from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: '首页', href: '/' },
    { name: '产品中心', href: '#products' },
    { name: '关于我们', href: '#about' },
    { name: '联系我们', href: '#contact' },
  ];
  
  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              <i className="fa-solid fa-pills mr-2"></i>SupraDrug
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-blue-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-5 duration-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}