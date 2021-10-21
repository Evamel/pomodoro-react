import React, {useState} from 'react';


export default function Timer() {


        const [counter, setCounter] = React.useState(1500);
        let minutes = parseInt(counter / 60, 10);
        let secondes = parseInt(counter % 60, 10);

        minutes = minutes < 20 ? + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes
      
        
        React.useEffect(() => {
          const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
          return () => clearInterval(timer);
        }, [counter]);

        if(timer < 0){
          return alert("Take a break")
        };
      
    return (
        <div className="Timer">
        <div>{minutes} : {secondes}</div>
        </div>
        );

}