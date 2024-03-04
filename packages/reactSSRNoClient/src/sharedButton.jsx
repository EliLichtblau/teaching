const {useState} = require("react")
const React = require("react")

function Button() {
    const [count, setCount] = useState(0)

    return <div>
        <p>
            Notice how clicking the button below doesn't work. <br />
            This is because if we do not "hydrate" - the client doesn't get <br />
            javascript to run with our code - just the initial state coming from
            the server
        </p>

        <button onClick={()=>setCount(count=>count+1)}>Click me to increase count {count}</button>
        
        

    </div>
}

module.exports = {
    Button
}