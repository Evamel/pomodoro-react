import React from 'react'


export default function StartStop() {

    function stopCount()
{
clearTimeout(t);
timer_is_on=0;
}

    return (
        <div>
            <button className="startBtn">Start/Stop</button>
        </div>
    )
}
