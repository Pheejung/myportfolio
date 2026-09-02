import React from 'react';
import Sidebar from './Sidebar';

interface LayoutSidebarProps {
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
}

const LayoutSidebar: React.FC<LayoutSidebarProps> = ({ selectedCompany, setSelectedCompany }) => {
  return <Sidebar selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />;
};

export default LayoutSidebar;
