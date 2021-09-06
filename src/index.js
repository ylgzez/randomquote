import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {FaQuoteLeft, FaTwitterSquare, FaTumblrSquare} from 'react-icons/fa'
import './index.css';

const quotes = [
  {
    id: 1,
    quote: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale',
    color1: '#1a1aff',
    color2: '#3333ff'
  },
  {
    id: 2,
    quote: 'It is never too late to be what you might have been.',
    author: 'George Eliot',
    color1: '#009900',
    color2: '#00b300'
  },
  {
    id: 3,
    quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    author: 'Maya Angelou',
    color1: '#b3b3ff',
    color2: '#ccccff'
  },
  {
    id: 4,
    quote: 'Dream big and dare to fail.',
    author: 'Norman Vaughan',
    color1: '#80bfff',
    color2: '#99ccff'
  },
  {
    id: 5,
    quote: 'Happiness is not something readymade. It comes from your own actions.',
    author: 'Dalai Lama',
    color1: '#994d00',
    color2: '#b35900'
  },
  {
    id: 6,
    quote: 'Life is what we make it, always has been, always will be.',
    author: 'Grandma Moses',
    color1: '#ff8533',
    color2: '#ff944d'
  },
  {
    id: 7,
    quote: 'Everything has beauty, but not everyone can see.',
    author: 'Confucius',
    color1: '#ffb366',
    color2: '#ffbf80'
  }
]

const initial = Math.floor(Math.random() * quotes.length)
const Quote = () => {
  const [index, setIndex] = useState(initial)
  const randomQuote = () => {
    setIndex(Math.floor(Math.random() * quotes.length))
  }

  const changeBackground = (e) => {
    e.target.style.background = quotes[index].color2
  }

  const restoreBackground = (e) => {
    e.target.style.background = quotes[index].color1
  }

  return (
    <main style={{background: quotes[index].color1}}>
      <div id='quote-box' style={{background: 'white'}}>
        <div id='text' style={{color: quotes[index].color1}}>
          <FaQuoteLeft/>{quotes[index].quote}
        </div>
        <div id='author' style={{color: quotes[index].color1}}>{`- ${quotes[index].author}`}</div>
        <div className='tweet'>
          <div class='social-icons'>  
            <a id='tweet-quote' href="twitter.com/intent/tweet" target="_blank"><FaTwitterSquare color={`${quotes[index].color1}`}/></a>
            <a href="https://www.tumblr.com" target="_blank"><FaTumblrSquare color={`${quotes[index].color1}`}/></a>
          </div>
          <button 
            id='new-quote' type='button' onClick={randomQuote}
            onMouseEnter={changeBackground} onMouseLeave={restoreBackground}
            style={{background: `${quotes[index].color1}`, color: 'white'}}
          >
            New quote
          </button>
        </div>       
      </div>
    </main>
  )
}

ReactDOM.render(<Quote />, document.getElementById('root'));
