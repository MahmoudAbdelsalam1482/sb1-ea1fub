import React from 'react';
import {
  Menu,
  BarChart2,
  AlertTriangle,
  Shield,
  Activity,
  Building,
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: 'Risk Register', icon: BarChart2, path: '/risks' },
    { name: 'Controls Assessment', icon: Shield, path: '/controls' },
    { name: 'Incidents', icon: AlertTriangle, path: '/incidents' },
    { name: 'KRIs', icon: Activity, path: '/kris' },
    { name: 'Business Impact', icon: Building, path: '/#/bia' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <Logo />
              <div className="h-6 w-px bg-gray-200" />
              <h1 className="text-gray-900 font-medium text-sm">
                Consolidated Operational Risk System
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
