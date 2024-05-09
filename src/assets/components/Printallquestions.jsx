import React, { useState } from 'react';

export function Printallquestions({ questions }) {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {questions.map((question, index) => (
        <div key={index} className="text-2xl p-2  ">
          <div className=" mb-4 flex  justify-between" onClick={() => toggleQuestion(index)}>
            <div className='text-start text-questioncolor'>{question.title}</div>
            <div className='mr-6'>{openIndex === index ? '-' : '+'}</div>
          </div>
          {openIndex === index && (
            <div className="question-content">
              <p className='font-manrope text-sm text-answercolor text-start mb-2'>{question.answer}</p>
            </div>
          )}
          <hr className='border-2 border-t border-bordercolor'/>
        </div>
      ))}
    </div>
  );
};


