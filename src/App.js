import React from 'react';

const sayHello= ()=> {
    console.log("Hello visitor")
}

const Header= ()=>{
    return <h1>Click the button !</h1>
};

class Button extends React.Component{
    render(){
        return <button onClick={sayHello}> click me !!</button>
    }
}

const App = () => {
    return (
        <div>
            <Header/>
            <Button/>
        </div>
        
    );
};
export default App;