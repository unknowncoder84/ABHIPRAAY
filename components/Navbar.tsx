'use client';

import { useState, useEffect } from 'react';
import { useNavbarBlur } from '@/utils/hooks';
import { NAV_MENU_ITEMS } from '@/utils/constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const isScrolled = useNavbarBlur(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navbarClass = isScrolled
    ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm'
    : 'bg-white/70 backdrop-blur-sm';

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-poppins font-bold text-xl md:text-2xl bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            ABHIPRAAY
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {NAV_MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 lg:px-4 py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 relative group font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-poppins font-bold text-xl bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                    ABHIPRAAY
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="space-y-2">
                  {NAV_MENU_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
