import React, { useState, useEffect } from "react";

const ShareLink = ({ quizData }) => {
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {
    if (quizData) {
      const encodedQuizData = encodeURIComponent(JSON.stringify(quizData));
      setShareLink(`${window.location.origin}/quiz?data=${encodedQuizData}`);
    }
  }, [quizData]);

  return (
    <div className="share-link">
      <h2>Share Your Quiz!</h2>
      <p>
        Share this link:{" "}
        <a href={shareLink} target="_blank" rel="noopener noreferrer">
          {shareLink}
        </a>
      </p>
    </div>
  );
};

export default ShareLink;
