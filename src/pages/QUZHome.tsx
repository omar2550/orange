import { useEffect, useState } from 'react';
import q1 from "../assets/quiz/q1.png";
import q2 from "../assets/quiz/q2.png";
import q3 from "../assets/quiz/q3.png";
import q4 from "../assets/quiz/q4.png";
import q5 from "../assets/quiz/q5.png";
import q6 from "../assets/quiz/q6.png";
import q7 from "../assets/quiz/q7.png";
import q8 from "../assets/quiz/q8.png";
import q9 from "../assets/quiz/q9.jpg";
import q10 from "../assets/quiz/10.jpg";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react';

interface Question {
  question: string;
  image: string;
  options: string[];
  answer: string;
  rationale: string;
}

const quizData: Question[] = [
  {
    question: "If cst line is MSAN and when check agent found his port VDSL and cst said his router is VDSL, max attainable rate should not be less than ?",
    image: "",
    options: ["36", "40", "16", "85"],
    answer: "36",
    rationale: ""
  },
  {
    question: "If cst complaint that the internet unstable and when agent check found: Line is MSAN Port and Router VDSL port up time from 2 hours Max attainable rate 30 SNR 7.5 Bit rate 25 agent should follow : ",
    image: "",
    options: ["Bad line wf", "Line unstable wf", "Line down wf", "Wrong port wf"],
    answer: "Bad line wf",
    rationale: ""
  },
  {
    question: "Max Attainable Rate is 20480 & profile speed is 10240, that means ?",
    image: "",
    options: ["Cst has bitrate mismatch", "Cst doesn't have bit rate mismatch"],
    answer: "Cst has bitrate mismatch",
    rationale: ""
  },
  {
    question: "if cst username was 0255438775-MSAN and we found cst have authentication login failed and his session logs was 0255438775-MSAM that mean cst have ?",
    image: "",
    options: ["Wrong username", "TR069", "Another ISP"],
    answer: "Wrong username",
    rationale: ""
  },
  {
    question: "Noise Margin on online gaming should not be less than",
    image: "",
    options: ["60", "40", "100", "360"],
    answer: "10",
    rationale: ""
  },
  {
    question: "If cst has TE bill he will have redirection no payment ?",
    image: "",
    options: ["True", "False"],
    answer: "False",
    rationale: ""
  },
  {
    question: "If cst complaining about ping and after check agent found his Max is 36, agent should ?",
    image: "",
    options: ["follow online gaming WF", "follow bad line WF", "advise him to change his package to up to 70"],
    answer: "follow bad line WF",
    rationale: ""
  },
  {
    question: "If cst complaining about line unstable, agent should advice him to connect from main without splitter within the call ?",
    image: "",
    options: ["True", "False"],
    answer: "False",
    rationale: ""
  },
  {
    question: "Where agent can found wifi instability wf on pedia ?",
    image: "",
    options: ["Line unstable", "connection unstable", "Slow download"],
    answer: "connection unstable",
    rationale: ""
  },
  {
    question: "Where agent can found Candidate wf on pedia ?",
    image: "",
    options: ["Plans", "How To Complain", "How To Pay", "How To Manage My Account"],
    answer: "Plans",
    rationale: ""
  },
  {
    question: "we can check SNR from tab .......... on assurance?",
    image: "",
    options: ["Get Cpe status", "Get port parameters", "Get port up time", "Get ONU Status"],
    answer: "Get port parameters",
    rationale: ""
  },
  {
    question: "if cst have Data&Voice Suspend that means he should pay ?",
    image: "",
    options: ["TE bill", "Orange bill", "Both of them"],
    answer: "TE bill",
    rationale: ""
  },
  {
    question: "If cst bill renewed 12/12 on home internet 360 and cst upgrade to home internet 1040 on 1/1, his next bill will be ?",
    image: "",
    options: ["1,281.29", "1,120.45", "135.54", "241.29"],
    answer: "1,281.29",
    rationale: "((1040 - 360) / 31) * 11 + 1040 = 1,281.29"
  },
  {
    question: "Agent should verify with cst (The line is under reseller) if he request to add static ip, by asking him about ?",
    image: "",
    options: ["Name and mobile number on siebel", "Name and mobile number and one of the last 2 bills paid when and from where", "Only full name on siebel", "one of the last 2 bills paid when and from where"],
    answer: "Name and mobile number on siebel",
    rationale: ""
  },
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
  },
  {
    question: "A customer wants a technical visit to check 3 separate PCs. How much will be the total charge on their next bill?",
    image: "",
    options: ["77.73 EGP", "155.46 EGP", "233.19 EGP", "Free of charge"],
    answer: "233.19 EGP",
    rationale: "The first PC check costs 77.73 EGP, and each additional PC costs an extra 77.73 EGP. (77.73 x 3 = 233.19)."
  },
  {
    question: "What is the fee for a 'Voluntary Suspension' request per month (Tax Exclusive)?",
    image: "",
    options: ["Free", "10 EGP", "30 EGP", "50 EGP"],
    answer: "30 EGP",
    rationale: "Voluntary suspension costs 30 EGP per month (Excl. VAT) for a maximum of 2 months per year."
  },
  {
    "question": "What is the Service Level Agreement (SLA) for a 'New Assign Home Visit Request' in Cairo and Alex?",
    image: "",
    "options": ["3 working days", "24 working hours", "2 working days", "5 working days"],
    "answer": "2 working days",
    "rationale": "The training material specifies that home visits for new assignments in Cairo and Alex should be completed within 2 working days."
  },
  {
    "question": "What is the procedure if a customer received a router but it is not reflected on the system?",
    image: q9,
    "options": [
      "Ask the customer to return it",
      "Create a modification request to add/sync the router info",
      "Ignore it until the next invoice",
      "Charge the customer for a new router"
    ],
    "answer": "Create a modification request to add/sync the router info",
    "rationale": "The instructions for router delivery issues require a modification request to ensure the system reflects the actual delivery."
  },
  {
    "question": "What can a customer with a 'New Subscription' modify on their line?",
    image: q10,
    "options": [
      "Only the static IP",
      "Nothing until the first month passes",
      "Anything related to the line (packages, offers, IP)",
      "Only the router type"
    ],
    "answer": "Anything related to the line (packages, offers, IP)",
    "rationale": "The notes explicitly state that for new subscriptions, the customer has the flexibility to modify any aspect of their line."
  },
  {
    "question": "What is the SLA for a 'New Assign Home Visit Request' in governorates other than Cairo and Alex?",
    image: "",
    "options": ["2 working days", "3 working days", "4 working days", "7 working days"],
    "answer": "3 working days",
    "rationale": "While Cairo and Alex have a 2-day SLA, other governorates are allocated 3 working days for home visits."
  }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // 1. إضافة State للتايمر (مثلاً 30 ثانية)
  const [timeLeft, setTimeLeft] = useState<number>(30);

  // 2. تأثير التايمر
  useEffect(() => {
    // إذا ظهرت النتيجة النهائية أو اختار المستخدم إجابة بالفعل، نتوقف عن العد
    if (showScore || selectedOption !== null) return;

    // إذا انتهى الوقت
    if (timeLeft === 0) {
      handleAnswerClick(""); // نرسل إجابة فارغة لاعتبارها خطأ
      return;
    }

    // نقص ثانية كل 1000 مللي ثانية
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // تنظيف التايمر لتجنب Memory Leaks
  }, [timeLeft, selectedOption, showScore]);

  const handleAnswerClick = (option: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);

    const correct = option === quizData[currentQuestion].answer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const handleNextQuestionLogic = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setTimeLeft(30); // 3. إعادة تعيين التايمر للسؤال الجديد

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  // تعديل وظائف التنقل لتشمل ريست التايمر
  const handleNext = () => {
    if (selectedOption !== null) handleNextQuestionLogic();
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setSelectedOption(null);
      setIsCorrect(null);
      setTimeLeft(30);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 antialiased" dir="ltr">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden text-left">
        {showScore ? (
          <div className="p-10 text-center">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Quiz Completed!</h2>
            <div className="text-6xl font-black text-slate-800 mb-6">{score} / {quizData.length}</div>
            <button onClick={() => window.location.reload()} className="px-8 py-3 bg-orange-600 text-white font-bold rounded-lg">Restart</button>
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Progress Bar */}
            <div className="h-2 bg-slate-200 flex">
              <div
                className={`h-full transition-all duration-1000 ${timeLeft < 10 ? 'bg-red-500' : 'bg-orange-500'}`}
                style={{ width: `${(timeLeft / 30) * 100}%` }}
              ></div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
                  Question {currentQuestion + 1} of {quizData.length}
                </span>

                {/* Timer UI */}
                <div className={`flex items-center gap-2 font-mono font-bold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-slate-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {timeLeft}s
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6 leading-tight">
                {quizData[currentQuestion].question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {quizData[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    disabled={selectedOption !== null}
                    onClick={() => handleAnswerClick(option)}
                    className={`p-4 text-left rounded-xl border-2 transition-all duration-200 text-sm font-medium
                      ${selectedOption === null ? 'border-slate-200 hover:border-orange-300' : 'cursor-default'}
                      ${selectedOption === option ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'opacity-60'}
                      ${selectedOption !== null && option === quizData[currentQuestion].answer ? 'border-green-500 bg-green-100 opacity-100' : ''}
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {selectedOption !== null && (
                <div className={`p-5 rounded-xl border-l-4 mb-6 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                  <p className="text-sm text-slate-700 italic">
                    <span className="font-bold">Why? </span> {quizData[currentQuestion].rationale}
                  </p>
                  <button
                    onClick={handleNextQuestionLogic}
                    className="mt-4 w-full py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 shadow-md"
                  >
                    {currentQuestion + 1 === quizData.length ? "Finish Quiz" : "Next Question"}
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