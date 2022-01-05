import React from 'react'

const CardFooter = (props) => {
    console.log(props)
    const input = props.input;
    let criteria;

    if (!input) {
        criteria = {
            title: '---',
            backgroundColor: '#d3d8e2',
        };
    } else if (input < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#ee362d',
        };
    } else if (input < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: '#1b82f1',
        };
    } else if (input >= 40) {
        criteria = {
            title: 'FAST',
            backgroundColor: '#13d569',
        };
    }


return (
    <div className="card-footer" style={{ backgroundColor: criteria.backgroundColor }}>{criteria.title}</div>
)
}

export default CardFooter
