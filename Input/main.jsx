import  React from 'react';

function Time() {

    let textInput = React.createRef()
    let valueInput = React.createRef()

    function  ButtonClick() {
        console.log('hello')
  };

  function whatInput(event) {
        // console.log(event.target.value)
        console.log(valueInput.current.value)
        textInput.current.innerHTML =   valueInput.current.value          
  }

    return(
        <>        
        <h1>События</h1>
        <section>
            <h1>Button</h1>
            <button onClick={ButtonClick}>push</button>
        </section>
        <section>
            <h1>Double click + mouse move</h1>
            <div className='test'></div>
        </section>
        <section>
            <h1>Input</h1>
            <input ref={valueInput} type='text' onInput={whatInput}/>
            <p ref={textInput}></p>
        </section>
        </>
    )
};

export default Time;
