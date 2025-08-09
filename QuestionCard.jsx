// src/components/QuestionCard.jsx
import React from "react";

export default function QuestionCard({ question }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md dark:bg-gray-800">
      <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
        {question.prompt}
      </h2>
      <ul className="mt-3 space-y-2">
        {question.options.map((opt, index) => (
          <li
            key={index}
            className="p-2 bg-gray-200 rounded-md dark:bg-gray-700"
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}
