import React from 'react'

function Person({current, numCards, name, city, country, employer, title, favoriteMovies}) {
    let fromPlace = `${city}, ${country}`;
  return (
    <>
    <div>
        <h1>{`${current + 1}/${numCards}`}</h1>
        <h1>{`${name.first} ${name.last}`}</h1>
        <br></br>
        <div>
        <h1>From: </h1>
        <p>{fromPlace}</p>        
        </div>
        <div>
        <h1>Job Title: </h1>
        <p>{title}</p>
        </div>
        <div>
        <h1>Employer: </h1>
        <p>{employer}</p>
        </div>
        <br></br>
        <div>
        <h1>Favorite Movies: </h1>
        <ol>
            {favoriteMovies.map(((element, index) => <li key={index}>{element}</li>))}
        </ol>
        </div>
    </div>
    </>
  )
}

export default Person