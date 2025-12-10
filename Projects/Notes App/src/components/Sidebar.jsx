import React from 'react';

const Sidebar = () => {
  return (
    // className use kiya
    <aside className="sidebar"> 
      <h2>Note Categories</h2>
      <ul>
        <li>All Notes</li>
        <li>Work</li>
        <li>Personal</li>
      </ul>
    </aside>
  );
};

export default Sidebar;