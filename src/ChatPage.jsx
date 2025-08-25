import React from 'react'


export default function ChatPage() {

  // get user from local storage
  const user = localStorage.getItem('userProfile')

  // nice styling
  return (
  <div className="chat-container">
      {/* Left Sidebar */}
      <div className="chat-sidebar">
        <h2 className="sidebar-title">
          NANDA Agents
        </h2>

	{/* Main Content Area */}
      <div className="chat-main">
        {/* User Profile Section - Top Left */}
        {user && (
          <div className="user-profile">
            <img 
              src={user.picture} 
              alt={user.name}
              className="user-avatar"
            />
            <span className="user-name">
              {user.name}
            </span>
          </div>
        )}

 </div>
      </div>
</div>)}
