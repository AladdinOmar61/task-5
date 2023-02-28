import { useReducer } from 'react';

function Counter() {
  const initialState = {
  count: 0,
  number: 0
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'number':  
        return {
          ...state,
          number: action.value
        }
      case 'count':
        return {
          ...state,
          count: action.count
        }
    }
    return state;
  }

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
      const { count, number } = state;
      dispatch({type: 'count', count: parseInt(count,10) + parseInt(number, 10)})
      console.log(state.count);
    }
    
    const decrement = () => {
      const { count, number } = state;
      dispatch({type: 'count', count: parseInt(count,10) - parseInt(number, 10)})

    }

    const updateField = (e) => {
      dispatch({type: e.target.name, value: e.target.value});
    }

    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" name="increment" value={state.increment} onClick={increment}><span className="huge">+</span>Increment by {state.number}</button>
        <button className="button-box" name="decrement" value={state.decrement} onClick={decrement}><span className="huge">-</span>Decrement by {state.number}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={updateField} type="number" value={state.number} name="number" id="number" /></p>
  </div>);
}

export default Counter;