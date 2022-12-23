import React from 'react';

export const Quote = ({ fetchedQuote }) => {
    return (
        <div>
            {!fetchedQuote ? <p>Loading...</p> : <p>{`${fetchedQuote.contents.quotes[0].quote} - ${fetchedQuote.contents.quotes[0].author}`}</p>}
        </div>
    )
}