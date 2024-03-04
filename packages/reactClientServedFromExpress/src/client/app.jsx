import React, { useEffect, useState } from "react"
// I kinda expect everyone knows how this works
export function App() {
    const [fetchedText, setFetchedText] = useState("")
    useEffect(()=>{
        fetch("/api/proxiedExample", {
            method: "POST"
        }).then(x=>{
            x.json().then(x=>{
                setFetchedText(text=>JSON.stringify(x))
            })
        })

    }, [])
    return <div>
        Fetched content
        <p>
            {fetchedText}
        </p>
    </div>
}