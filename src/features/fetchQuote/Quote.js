import React from 'react';

export const Quote = ({ fetchedQuote }) => {
    return (
        <div>
            {!fetchedQuote ? <p>Loading...</p> : <div><h4>Get Motivated!</h4><p>{`${fetchedQuote.contents.quotes[0].quote} - ${fetchedQuote.contents.quotes[0].author}`}</p></div>}
        </div>
    )
}