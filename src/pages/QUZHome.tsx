import { useState } from 'react';
import q1 from "../assets/quiz/q1.png";
import q2 from "../assets/quiz/q2.png";
import q3 from "../assets/quiz/q3.png";
import q4 from "../assets/quiz/q4.png";
import q5 from "../assets/quiz/q5.png";
import q6 from "../assets/quiz/q6.png";
import q7 from "../assets/quiz/q7.png";
import q8 from "../assets/quiz/q8.png";

interface Question {
  question: string;
  image: string;
  options: string[];
  answer: string;
  rationale: string;
}

const quizData = [
  {
    question: "How many extra quota extensions can a customer add during a single bill cycle through all channels?",
    image: q1,
    options: ["5 extensions", "10 extensions", "15 extensions", "Unlimited"],
    answer: "10 extensions",
    rationale: "According to guidelines, customers can add a maximum of 10 extensions per cycle. The 11th request should be rejected through frontliners."
  },
  {
    question: "What is the monthly rental fee and contract duration for a 'High End' VDSL router (e.g., ZTE H188A)?",
    image: q2,
    options: ["50 EGP for 15 months", "57 EGP for 30 months", "50 EGP for 30 months", "57 EGP for 15 months"],
    answer: "57 EGP for 30 months",
    rationale: "High-end routers cost 57 EGP monthly for 30 months, while low-end routers cost 50 EGP for 15 months."
  },
  {
    question: "If a customer is calling from a registered mobile number on Siebel, what is the verification requirement?",
    image: q3,
    options: ["Full DSL subscriber name", "Last two bills amount", "No need for verification", "Ask for mobile number only"],
    answer: "Full DSL subscriber name",
    rationale: "If calling from a registered mobile number, the agent only needs to ask for the DSL subscriber name."
  },
  {
    question: "What is the grace period for bill payment starting from the issuance date?",
    image: q4,
    options: ["3 days", "5 days", "7 days", "10 days"],
    answer: "7 days",
    rationale: "The grace period is 7 days. Suspension (8/10) starts on the 8th day if no payment is made."
  },
  {
    question: "For a 'Promise to Pay' request, how many days will the service be activated for?",
    image: q5,
    options: ["1 day", "2 days", "5 days", "7 days"],
    answer: "2 days",
    rationale: "Promise to Pay restores service for 2 days only and must be requested within 5 days of disconnection."
  },
  {
    question: "A customer wants to downgrade their package to a lower speed. When will the downgrade be implemented?",
    image: q6,
    options: ["Immediately", "After 24 hours", "On the next bill cycle", "On the spot"],
    answer: "On the next bill cycle",
    rationale: "Standard downgrades are always implemented starting from the next bill cycle."
  },
  // {
  //   question: "Which channel is NOT available for an 'Indirect Customer' (Reseller) to perform a Package Upgrade?",
  //   image: "https://img.freepik.com/free-vector/wireless-router-electronic-device_107791-301.jpg",
  //   options: ["My Orange App", "16333 Call Center", "Orange Portal", "Resellers"],
  //   answer: "Resellers",
  //   rationale: "Indirect customers cannot upgrade their package through Reseller channels; they must use Orange direct channels."
  // },
  {
    question: "How many SMS notifications does a customer receive during the dunning process until the 5th day of suspension?",
    image: q7,
    options: ["3 SMS", "5 SMS", "8 SMS", "10 SMS"],
    answer: "8 SMS",
    rationale: "Customers receive 8 dunning notifications from the bill issuance date until the 5th day after suspension."
  },
  {
    question: "If a new customer downgrades their package before paying 12 bills, what is the violation fee?",
    image: q8,
    options: ["50 EGP", "100 EGP", "226.86 EGP", "No fee applies"],
    answer: "226.86 EGP",
    rationale: "New customers (except Double Quota) must pay 12 bills. Otherwise, a violation fee of 226.86 EGP applies."
  },
  {
    question: "An extension (Extra Quota) was added today. How long is its validity?",
    image: "",
    options: ["15 days", "30 days", "Until the end of the current cycle", "1 year"],
    answer: "30 days",
    rationale: "Extension (Extra Quota) validity is 30 days from the addition date."
  },
  {
    question: "What is the SLA for a 'Package Upgrade' to 70, 100, or 200 Mbps for a 'Ready Cabinet'?",
    image: "",
    options: ["On the spot", "24 Hours", "1 Working Day", "3-5 Working Days"],
    answer: "1 Working Day",
    rationale: "High-speed upgrades (VDSL) take 1 working day for Ready Cabinets and 3-5 days for Not Ready Cabinets."
  },
  // {
  //   question: "What should an agent do if a suspended customer asks to add an extra quota?",
  //   image: "https://img.freepik.com/free-vector/wireless-router-electronic-device_107791-301.jpg",
  //   options: ["Add it immediately", "Reject the request", "Add it but inform them it will only work after paying the due bill", "Give it for free"],
  //   answer: "Add it but inform them it will only work after paying the due bill",
  //   rationale: "Quota can be added through digital channels, but service won't work until the due amount is settled."
  // },
  {
    question: "For the 'Extension Upselling Offer', if a customer buys an extension via Click to Chat, how long is the 'Free GBs' validity?",
    image: "",
    options: ["1 week", "1 month from addition date", "Until the next bill", "Does not expire"],
    answer: "1 month from addition date",
    rationale: "Free GBs provided as an upselling offer are valid for 1 month from the addition date."
  },
  {
    question: "A customer is complaining about an added extension they claim they didn't request. What is the SLA for the 'Extension Offer Adjustment' SR?",
    image: "",
    options: ["24 Hours", "48 Hours", "72 Hours", "1 week"],
    answer: "48 Hours",
    rationale: "SR 'Extension Offer Adjustment' (Short code 5048) has an SLA of 48 working hours."
  }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerClick = (option: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);
    const correct = option === quizData[currentQuestion].answer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 antialiased" dir="ltr">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden text-left">
        {showScore ? (
          <div className="p-10 text-center">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Quiz Completed!</h2>
            <div className="text-6xl font-black text-slate-800 mb-6">{score} / {quizData.length}</div>
            <p className="text-slate-500 mb-8 text-lg">Great effort! Review guidelines to stay sharp.</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              Restart Training
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Progress Bar */}
            <div className="h-2 bg-slate-200">
              <div
                className="h-full bg-orange-500 transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
              ></div>
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                Question {currentQuestion + 1} of {quizData.length}
              </span>

              <h3 className="text-xl font-bold text-slate-800 mt-2 mb-6 leading-tight uppercase">
                {quizData[currentQuestion].question}
              </h3>

              {/* Image Section */}
              {quizData[currentQuestion].image && (
                <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex justify-center">
                  <img
                    src={quizData[currentQuestion].image}
                    // alt="Question context"
                    className="w-auto object-contain p-2"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {quizData[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(option)}
                    className={`p-4 text-left rounded-xl border-2 transition-all duration-200 text-sm font-medium
                      ${selectedOption === null ? 'border-slate-200 hover:border-orange-300 hover:bg-orange-50' : ''}
                      ${selectedOption === option ? (isCorrect ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') : 'border-slate-100 opacity-60'}
                      ${selectedOption !== null && option === quizData[currentQuestion].answer ? 'border-green-500 bg-green-100 text-green-800 opacity-100' : ''}
                    `}
                  >
                    <span className="inline-block w-6 h-6 rounded-full border border-current text-center mr-2 leading-5 text-xs">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>

              {/* Feedback Section */}
              {selectedOption && (
                <div className={`p-5 rounded-xl border-l-4 mb-6 transition-all animate-in fade-in slide-in-from-top-4
                  ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}
                `}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold">{isCorrect ? '✓ Well Done!' : '✗ Keep Learning!'}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    <span className="font-bold">Why? </span> {quizData[currentQuestion].rationale}
                  </p>
                  <button
                    onClick={handleNext}
                    className="mt-4 w-full py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 shadow-md"
                  >
                    Next Question
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;