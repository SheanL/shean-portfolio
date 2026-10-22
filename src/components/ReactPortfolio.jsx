import React, { useState } from 'react';

export default function ReactPortfolio() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9', color: '#333', marginTop: '20px' }}>
      <h2>Mijn Eerste React Component in Astro! 🚀</h2>
      <p>Dit stukje van de website wordt gerenderd door React in plaats van HTML/Astro.</p>
      
      <button 
        onClick={() => setLikes(likes + 1)}
        style={{ padding: '10px 15px', cursor: 'pointer', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Likes: {likes}
      </button>
    </div>
  );
}
