import React from 'react';

// Humein Note ka title aur content props mein milega
const NoteCard = ({ title, content }) => {
  // Content ka preview chota rakhne ke liye
  const truncatedContent = content.substring(0, 50) + (content.length > 50 ? '...' : '');

  return (
    <div className="note-card">
      <h3 className="note-card-title">{title}</h3>
      <p className="note-card-content">{truncatedContent}</p>
      <small className="note-card-date">
      
        Last Modified: 2 hours ago
      </small>
    </div>
  );
};

export default NoteCard;