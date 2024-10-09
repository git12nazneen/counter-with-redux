// dom elements select
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// 1.// intial state
const initialState = {
    value: 0,
}


// 2.// create reducer
function counterReducer(state = initialState, action){
    if(action.type === 'increment'){
        return {
            ...state,
            value: action.payload,
        }
    } else if(action.type === 'decrement'){
        return{
            ...state,
            value: action.payload,
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
    store.dispatch({
        type: 'increment',
        payload: 5,
    })
})

decrementEl.addEventListener('click',()=>{
    store.dispatch({
        type: 'decrement',
        payload: 2,
    })
})


