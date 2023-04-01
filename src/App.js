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
    setBtnActive(false)
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {index: true, element: <Home sorular={questionList} secilenSorular={selectedQuestions} soruSec={selectQuestion} soruSil={removeQuestion} butonStatu={btnActive}/>},
        {path: 'home', element: <Home />},
        {path: 'quiz', element: <Quiz secilenSorular={selectedQuestions} />}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;