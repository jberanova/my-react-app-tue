import { useState, useEffect } from "react"

//useState - vytvari promenou ktera ma svuj vlastni setter - metody ktera prenastavi hodnotu promene 
//useState(0) - 0 - hodnota ktera se nastavi pocatecne do cookies

export default function Clicker() {
    const [cookies, setCookies] = useState(0);

    const increaseCookies = () => {
        setCookies(cookies + 1);
    };

    //useEffect - => fce se zavola kdyz se jakakoliv hodnota v [] zmeni - pro nas hodnotu cookies 
    // [] lze napsat viceri promrnyh - [cookies, a, b, c] atd. 

    useEffect(() => {}, [document.title = cookies])

    //pokud do [] nic ned8me, tak se () => zavolaji jen pri spusteni stranky
    // z praxe: nacte se mi stranka a budeme vypsat data z databebe

    return(
        <>
        <button onClick={increaseCookies}>click me</button>
        <p>cookies: {cookies}</p>
        </>
    )
}