import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import BusinessImpactPage from './components/bia/BusinessImpactPage';

function App() {
  // Simple routing based on hash
  const [currentPath, setCurrentPath] = React.useState(window.location.hash || '#/');

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#/bia':
        return <BusinessImpactPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {renderContent()}
    </div>
  );
}

export default App;