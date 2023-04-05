import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

import { questions } from './database/questions'
import { useState } from 'react';
import Quiz from './pages/Quiz';

function App() {

  const [ questionList, setQuestionList ] = useState(questions)
  const [ selectedQuestions, setSelectedQuestions ] = useState([]);
  const [ btnActive, setBtnActive ] = useState(false);
  const [ btnText, setBtnText ] = useState('Sınava Başla');
  const [ activeQuestion, setActiveQuestion ] = useState(0);
  const [ trueCount, setTrueCount ] = useState(0);
  const [ falseCount, setFalseCount ] = useState(0);

  const selectQuestion = (item) => {
    const arr = selectedQuestions.some(function(question){
      return question === item
    });

    if(!arr === true){
      setSelectedQuestions(prevList => [...prevList, item]);
      setQuestionList(prevList => prevList.filter(question => question !== item));
    }

    if(selectedQuestions.length > 3){
      setBtnActive(true)
    }
  }

  const removeQuestion = (item) => {
    setQuestionList(prevList => [...prevList, item]);
    setSelectedQuestions(prevList => prevList.filter(question => question !== item));
    setSelectedQuestions(prevList => prevList.map((item2) => {
        return { ...item2, answered: false };
    }));
    setBtnActive(false);
    if(btnText !== 'Sınava Başla'){
      setBtnText('Sınava Yeniden Başla')
    }
    setTrueCount(0);
    setFalseCount(0);
    setActiveQuestion(0);
  }

  const addAnswer = (answer, item, answerIndex) => {
    setActiveQuestion(prev => prev + 1);
    item.selectAnswer = answer;
    setSelectedQuestions(prevList => prevList.map((item2) => {
      if (item2.question === item.question) {
        return { ...item2, answered: true };
      } else {
        return item2
      }
    }));
    if(item.trueAnswer === answer){
      setTrueCount(prev => prev += 1)
    } else {
      setFalseCount(prev => prev += 1)
    }
  }

  const clickButton = () => {
    setBtnText('Sınava Devam Et')
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {index: true, element: <Home sorular={questionList} secilenSorular={selectedQuestions} soruSec={selectQuestion} soruSil={removeQuestion} butonStatu={btnActive} butonText={btnText} butonTikla={clickButton}/>},
        {path: 'home', element: <Home />},
        {path: 'quiz', element: <Quiz secilenSorular={selectedQuestions} cevapEkle={addAnswer} aktifSoru={activeQuestion} dCevapSayisi={trueCount} yCevapSayisi={falseCount} />}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;