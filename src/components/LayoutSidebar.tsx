import React from 'react';
import Sidebar from './Sidebar';

interface LayoutSidebarProps {
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
}

const LayoutSidebar: React.FC<LayoutSidebarProps> = ({ selectedCompany, setSelectedCompany }) => {
  return (
    <aside>
      <Sidebar selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
    </aside>
  );
};

export default LayoutSidebar;
