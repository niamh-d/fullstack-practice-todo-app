import React from "react";

const StatsMessage = ({ pcCompleted }) => {
  console.log(pcCompleted);
  let message;

  if (pcCompleted === 100) message = "You've done it! Amazing! 🏅";
  else if (pcCompleted > 79) message = "You're almost there! Way to go you! 🤩";
  else if (pcCompleted > 50)
    message = "You're more than half way there! Keep going! 🚀";
  else if (pcCompleted > 24) message = "You're on your way! Keep going! ✨";
  else message = "Pour yourself some coffee ☕️ and get to work! 💪";

  return (
    <div className="flex bg-base-200 p-4 border-solid rounded-lg">
      <p className="text-xl self-center">{message}</p>
    </div>
  );
};

export default StatsMessage;
