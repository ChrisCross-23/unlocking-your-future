import React from 'react';
import { Link } from 'react-router-dom';

const subjects = [
  'AP World History',
  'AP U.S. History',
  'AP Physics C: Mechanics',
  'AP Physics C: E&M',
  'Calculus 1',
  'Calculus 2',
  'Calculus 3',
  'Linear Algebra',
  'Differential Equations',
  'College Physics',
];

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Subjects</h2>
      <ul className="space-y-2">
        {subjects.map((subject) => (
          <li key={subject}>
            <Link
              to={`/subject/${encodeURIComponent(subject)}`}
              className="text-blue-600 hover:underline"
            >
              {subject}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
