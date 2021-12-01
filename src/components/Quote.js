import React from 'react'

const Quote = ({quote}) => {
    return (
        <p className="Quote-text">
            {quote.text}<br/>
            <span className="Quote-author">
            {quote.author}
            </span>
        </p>
    )
}

export default Quote
