import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, serUsersAnswers] = useState([]);

  return (
    <div>
      <p>Currently active Question</p>
    </div>
  );
}
