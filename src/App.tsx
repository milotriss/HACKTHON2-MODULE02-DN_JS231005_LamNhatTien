import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import {Review} from './components/interfaces/interfaces'

function App() {
  const [review, setReview] = useState<Review[]>([])

  
  
  const addReview = (review:Review):void => {
    setReview((prev:Review[]) => [...prev, review])
  }
   const deleteReview = (id:number):void => {
    let newReview:Review[] = review.filter((item:Review) => item.id !== id)
    setReview(newReview)
   }
  return (
    <div className="App">
      <Header/>
      <Main 
      review={review} 
      addReview={addReview}
      deleteReview={deleteReview}
      />
    </div>
  );
}

export default App;
