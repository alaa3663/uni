import { useState } from 'react';
import SideBar from '../../components/sideBar/SideBar';
import "./AbsencesPage.css"

export default function Absences() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="absences-page">
      <SideBar />
      <div className="absences-content">
        <div className="page-header">
          <h1 className="page-title">Absences Page</h1>
          <p className="page-description">Manage absence justifications and track elimination status</p>
          <button className="admin-button">Show Admin Panel</button>
        </div>
        
        <div className="absences-tabs">
          <div className="tab-buttons">
            <button 
              className={activeTab === 'all' ? 'tab-button tab-active' : 'tab-button'}
              onClick={() => setActiveTab('all')}
            >
              All Absences <span className="tab-badge">0</span>
            </button>
            <button 
              className={activeTab === 'pending' ? 'tab-button tab-active' : 'tab-button'}
              onClick={() => setActiveTab('pending')}
            >
              Pending Review <span className="tab-badge">0</span>
            </button>
            <button 
              className={activeTab === 'justified' ? 'tab-button tab-active' : 'tab-button'}
              onClick={() => setActiveTab('justified')}
            >
              Justified <span className="tab-badge">0</span>
            </button>
            <button 
              className={activeTab === 'unjustified' ? 'tab-button tab-active' : 'tab-button'}
              onClick={() => setActiveTab('unjustified')}
            >
              Unjustified <span className="tab-badge">0</span>
            </button>
            
          </div>
          <div className="content-area">
            <p> i m here </p>
        </div>
        </div>
  
      </div>
      
    </div>
  );
}