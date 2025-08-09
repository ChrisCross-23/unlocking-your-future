import React from 'react';
import { useParams } from 'react-router-dom';

function Subject() {
  const { name } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{decodeURIComponent(name)}</h2>
      <p>This section will eventually display questions and resources for {decodeURIComponent(name)}.</p>
    </div>
  );
}

export default Subject;
