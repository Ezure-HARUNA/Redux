import React from 'react'

function Button({handleClick, childlen}) {
    console.log(`Button component -`, childlen);
    return (
        <button onClick={handleClick}>
            {childlen}
        </button>
    )
}

export default React.memo(Button)
