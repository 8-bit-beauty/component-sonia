import React from 'react';
import styles from './main.css';

// function generates stars for ratings out of 5
const starMaker = (numOfStars) => {
  const productRating = 5 - numOfStars;
  const litStars = [];
  const dimStars = [];
  for (let i = 0; i < productRating; i++) {
    litStars.push(<img alt="lit star" width="18" height="18" src="https://files.slack.com/files-pri/TBV9WH1HR-FCPN3R8TV/fullstar.png" />,);
  }
  for (let i = 0; i < productRating; i++) {
    dimStars.push(<img alt="dim star" width="18" height="18" src="https://files.slack.com/files-pri/TBV9WH1HR-FCP48N60G/emptystar.png" />,);
  }
  return litStars.concat(dimStars);
};

// ==================================================

// function creates isPrime :

const isPrime = (booleanNum) => {
  if (booleanNum === 1) {
    return <img alt="isPrime" src="prime.png" width="54" height="15" />;
  }
};

//= =============================================

// function shortens product discription:

const lessWord = (str) => {
  if (str.length > 50) {
    const newStr = str.split('').slice(0, 50).join('');
    return newStr;
  }
};

//= =============================================


const PzElement = props => (
  <div className={styles.child}>
    <img alt="product" width="160 vmin" height="160 vmin" className={styles.element} src={props.element.imageURL} />
    <div className={styles.text}>{lessWord(props.element.productDescription)}</div>
    <div className={styles.star}>{starMaker(props.element.rating)}</div>
    <span className={styles.review}>{' '}
    {props.element.reviewNumber}</span>
    <div>
        <span className={styles.price}>${props.element.price}.00</span>
        <span>{isPrime(props.element.isPrime)}</span>
      </div>
  </div>
 );
 

export default PzElement;
