import React, { useState, useMemo } from 'react';
import './index.css';

const HooksDemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const slowFunction = (number) => {
        for (let i = 0; i < 1000000000; i++) { }
        return number * 2

    }
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    const theme = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark])
    return (
        <>
            <center>
                <input type="number"
                    onChange={(e) => setNumber(Number(e.target.value))}
                    value={number}
                />
                <br />
                <button onClick={() => setDark(!dark)}>Change Theme</button>
                <h3 style={theme}>Number: {doubleNumber}</h3>
            </center>
        </>
    )
}

export default HooksDemo