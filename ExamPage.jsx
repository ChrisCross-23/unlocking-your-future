// src/pages/ExamPage.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import QuestionCard from "../components/QuestionCard";

export default function ExamPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "apQuestions"));
      const qList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setQuestions(qList);
    };
    fetchQuestions();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        AP Practice Questions
      </h1>
      <div className="grid gap-4">
        {questions.map(q => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}
