import React, { useState } from 'react'
import data from '../data'
import DeleteBtn from './DeleteBtn';
import Person from './Person';

function Card() {
    const [current, setCurrent] = useState(0);
    const [myData, setMyData] = useState(data);
    let {name, city, country, employer, title, favoriteMovies} = myData[current];
    let numCards = myData.length;

    function previousBtn(){
        if(current > 0){
            setCurrent(current - 1)
        } else {
            setCurrent(numCards - 1)
        }
    }

    function nextBtn(){
        if(current === numCards - 1){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

  return (
    <>
    <Person current={current} numCards={numCards} name={name} city={city} country={country} employer={employer} title={title} favoriteMovies={favoriteMovies}/>
    <section>
        <button onClick={() => previousBtn()}>Previous</button>
        <DeleteBtn current={current} setCurrent={setCurrent} setMyData={setMyData} myData={myData}/>
        <button>Edit Card</button>
        <button>New Card</button>
        <button onClick={() => nextBtn()}>Next</button>
    </section>
    </>
  )
}

export default Card