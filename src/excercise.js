import { createStore } from 'redux';

const initialState = {
    counter: 0,
    text: '',
    list: []
};

//type의 경우 대문자
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//action 함수의 경우 소문자
const increase = () => ({
    type: INCREASE,
});

const decrease = () => ({
    type: DECREASE,
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToLIst = item => ({
    type:ADD_TO_LIST,
    item
});

//reducer
function reducer(state = initialState, action){     //state가 undefined일 경우를 대비해 initialState를 state기본 값으로 설정
    switch (action.type){
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return{
                ...state,
                counter: state.counter - 1,
            }
        case CHANGE_TEXT:
            return{
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return{
                ...state,
                list: state.list.concat(action.item)
            }
        default:
                return state;
    }
}

//store 생성

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe();  //구독 취소 하고 싶을 때 사용

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToLIst({ id : 1, text: '와우'}));

window.store = store;
window.unsubscribe = unsubscribe;