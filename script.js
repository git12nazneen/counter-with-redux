// dom elements select
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// action identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creator
const increment = (value) =>{
  return { type: INCREMENT,
    payload: value,}
}

const decrement = (value) =>{
   return{ type: DECREMENT,
    payload: value,}
}

// 1.// intial state
const initialState = {
    value: 0,
}



// 2.// create reducer
function counterReducer(state = initialState, action){
    if(action.type === INCREMENT){
        return {
            ...state,
            value: state.value + action.payload,
        }
    } else if(action.type === DECREMENT){
        return{
            ...state,
            value: state.value - action.payload,
        }
    }else {
        return state;
    }
}

// 3// create store
const store = Redux.createStore(counterReducer);
// ui te update korte hole ui manually update korbo tai store e subscribe call korte hobe and function dite hobe update er jonno , 

const render = () =>{
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}

// update ui initially
render()

store.subscribe(render);


// 4// button click listener
incrementEl.addEventListener('click',()=>{
    store.dispatch(increment(5))
})

decrementEl.addEventListener('click',()=>{
    store.dispatch(decrement(2))
})


