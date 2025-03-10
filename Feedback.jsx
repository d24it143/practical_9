import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }
    setError("");
    const newFeedback = { id: Date.now(), name, email, message };
    setFeedbacks([...feedbacks, newFeedback]);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Feedback Form</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Feedback Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {feedbacks.length > 0 && (
        <div className="w-full max-w-md mt-6 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-center mb-2">Submitted Feedback</h3>
          <ul className="space-y-2">
            {feedbacks.map((feedback) => (
              <li key={feedback.id} className="p-2 border border-gray-300 rounded">
                <p className="font-bold">{feedback.name} ({feedback.email})</p>
                <p>{feedback.message}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
