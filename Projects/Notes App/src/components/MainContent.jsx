import React from 'react';
import NoteCard from './NoteCard'; 

// Dummy Notes Data 
const dummyNotes = [
  { id: 1, title: "React Day 1 Summary", content: "Completed the basic layout: Header, Sidebar, and Main Content wrapper using CSS Grid/Flexbox and functional components." },
  { id: 2, title: "Shopping List", content: "Milk, Bread, Eggs, and remember to buy vegetables from the weekly market." },
  { id: 3, title: "Project Idea:.........", content: "Need to start planning the backend architecture for DealDrishti. Focus on user authentication first." }
];

const MainContent = () => {
  return (
    <main className="main-content">
      <h2>Your Notes</h2>
      
      <div className="notes-list">
        {/* Dummy Notes ko map karke NoteCard component render kar rahe hain */}
        {dummyNotes.map(note => (
          <NoteCard 
            key={note.id} // Har item ke liye unique key zaroori hai
            title={note.title}
            content={note.content}
          />
        ))} 
        
      </div>
      
      {/* Agar koi note nahi hai toh yeh dikhega: */}
      {dummyNotes.length === 0 && <p>Select a category or start a new note.</p>}

    </main>
  );
};

export default MainContent;