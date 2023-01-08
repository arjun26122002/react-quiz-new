import { useState, useEffect, useMemo } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username,setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");


  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "The Central Rice Research Station is situated in?",
      answers: [
        {
          text: "Bangalore",
          correct: false,
        },
        {
          text: "Quilon",
          correct: false,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "cuttack",
          correct: true,
        },
      ],
    },

    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      id: 5,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: " Who among the following wrote Sanskrit grammar?",
      answers: [
        {
          text: "Kalidasa",
          correct: false,
        },
        {
          text: "Charak",
          correct: false,
        },
        {
          text: "Panini",
          correct: true,
        },
        {
          text: "Aryabhatt",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: "The metal whose salts are sensitive to light is?",
      answers: [
        {
          text: " Zinc",
          correct: false,
        },
        {
          text: " Silver",
          correct: true,
        },
        {
          text: "Copper",
          correct: false,
        },
        {
          text: "Aluminum",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question:
        " Which among the following headstreams meets the Ganges in last?",
      answers: [
        {
          text: "Alaknanda",
          correct: false,
        },
        {
          text: "Pindar",
          correct: false,
        },
        {
          text: "Mandakini",
          correct: false,
        },
        {
          text: " Bhagirathi",
          correct: true,
        },
      ],
    },

    {
      id: 9,
      question: " Patanjali is well known for the compilation of -",
      answers: [
        {
          text: "Yoga Sutra",
          correct: true,
        },
        {
          text: " Panchatantra",
          correct: false,
        },
        {
          text: "Brahma Sutra",
          correct: false,
        },
        {
          text: "Ayurveda",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question:
        "  River Luni originates near Pushkar and drains into which one of the following?",
      answers: [
        {
          text: "Rann of Kachchh",
          correct: true,
        },
        {
          text: "Arabian Sea",
          correct: false,
        },
        {
          text: " Lake Sambhar",
          correct: false,
        },
        {
          text: " Gulf of Cambay",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question: " Which type of data can be stored in the database?",
      answers: [
        {
          text: " Image oriented data",
          correct: false,
        },
        {
          text: " Text, files containing data",
          correct: false,
        },
        {
          text: "Data in the form of audio or video",
          correct: false,
        },
        {
          text: " All of the above",
          correct: true,
        },
      ],
    },

    {
      id: 12,
      question: " With which of the following rivers does Chambal river merge?",
      answers: [
        {
          text: "Banas",
          correct: false,
        },
        {
          text: "Ganga",
          correct: false,
        },
        {
          text: "Yamuna",
          correct: true,
        },
        {
          text: "Narmada",
          correct: false,
        },
      ],
    },

    {
      id: 13,
      question: "  Which peninsular river is least seasonal in flow?",
      answers: [
        {
          text: "Narmada",
          correct: false,
        },
        {
          text: " Cauvery",
          correct: false,
        },
        {
          text: "Godavari",
          correct: true,
        },
        {
          text: "Krishna",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: "  Which command is used to remove a relation from an SQL?",
      answers: [
        {
          text: " Drop table",
          correct: true,
        },
        {
          text: "Purge",
          correct: false,
        },
        {
          text: "Remove",
          correct: false,
        },
        {
          text: "Delete",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Grand Central Terminal, Park Avenue, New York is the world’s",
      answers: [
        {
          text: "highest railway station",
          correct: false,
        },
        {
          text: "longest railway station",
          correct: false,
        },
        {
          text: "largest railway station",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "RS: 100" },
        { id: 2, amount: "RS: 200" },
        { id: 3, amount: "RS: 300" },
        { id: 4, amount: "RS: 500" },
        { id: 5, amount: "RS: 750" },
        { id: 6, amount: "RS: 1000" },
        { id: 7, amount: "RS: 2000" },
        { id: 8, amount: "RS: 3000" },
        { id: 9, amount: "RS: 4000" },
        { id: 10, amount: "RS: 5000" },
        { id: 11, amount: "RS: 10,000" },
        { id: 12, amount: "RS: 20,000" },
        { id: 13, amount: "RS: 40,000" },
        { id: 14, amount: "RS: 80,000" },
        { id: 15, amount: "RS: 1,20,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setstop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;