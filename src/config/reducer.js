const INITIAL_STATE = [
    {
      question:"HTML stands for :",
      options:['hypertext markup language','wrong','wrong','wrong'],
      correct:'hypertext markup language'
    },
    {
      question:"CSS stands for :",
      options:['wrong','wrong','cascading style sheet','wrong'],
      correct:'cascading style sheet'
    },
    {
      question:"JS stands for :",
      options:['wrong','wrong','wrong','javaScript'],
      correct:'hypertext markup language'
    },
    {
      question:"HTML stands for :",
      options:['hypertext markup language','wrong','wrong','wrong'],
      correct:'hypertext markup language'
    },
    {
      question:"HTML stands for :",
      options:['hypertext markup language','wrong','wrong','wrong'],
      correct:'hypertext markup language'
    },
    {
      question:"HTML stands for :",
      options:['hypertext markup language','wrong','wrong','wrong'],
      correct:'hypertext markup language'
    },{
     question: "How many days are there in a week",
        options: [7, 6, 8, 5],
        correctAnswers: 7,
      },
      {
        question: "How many months are there in a year",
        options: [9, 11, 12, 10],
        correctAnswers: 12,
      },
      {
        question: "How many days are there in the month of february",
        options: [32, 28, 30, 31],
        correctAnswers: 28,
      },
      {
        question: "How many days are there in the month of june",
        options: [30, 31, 32, 28],
        correctAnswers: 30,
      },
      {
        question: "How many provinces of Pakistan are there",
        options: [4, 5, 6, 7],
        correctAnswers: 4,
      },
      {
        question: "How many festivals do Muslims have?",
        options: [1, 2, 3, 4],
        correctAnswers: 2,
      }
]
const reducer = (state = INITIAL_STATE) => state;

export default reducer;