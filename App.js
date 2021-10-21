import React from 'react'
import Timer from './components/Timer'
import Btn from './components/Btn'
import StartStop from './components/StartStop'
import Reset from './components/Reset'

export default function App() {
    return (
        <>
        <Timer />
        <Btn />
        <StartStop />
        <Reset />
        </>
    )
}