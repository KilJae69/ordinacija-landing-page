import React, { ReactNode } from 'react';

const FAQBackground = ({ children }:{children:ReactNode}) => {
  return (
    <div className="backgroundWrapper">
      <div className="questionMarkContainer">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={`questionMark qm-${index + 1}`}>
            ?
          </span>
        ))}
      </div>
      <div className="content">{children}</div>

      <style jsx>{`
        .backgroundWrapper {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: white;
          overflow: hidden;
        }
        .questionMarkContainer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .questionMark {
          position: absolute;
          font-size: 3rem;
          color: #24ae7c;
          animation: float 5s ease-in-out infinite;
        }
        /* Positioning and staggered animation delays */
        .qm-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        .qm-2 {
          top: 50%;
          left: 80%;
          animation-delay: 1s;
        }
        .qm-3 {
          top: 70%;
          left: 50%;
          animation-delay: 2s;
        }
        .qm-4 {
          top: 10%;
          left: 90%;
          animation-delay: 3s;
        }
        .qm-5 {
          top: 40%;
          left: 20%;
          animation-delay: 4s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .content {
          position: relative;
          z-index: 1;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default FAQBackground;
