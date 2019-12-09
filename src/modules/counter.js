const SET_DIFF = 'counter/SET_DIFF';        //counter/ 다른 모듈과 이름이 중복되지 않게 하기 때문
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = diff => ({ type: SET_DIFF, diff});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
    number: 0,
    diff: 1
};

//reducer

export default function counter(state = initialState, action){
    switch (action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            };
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return{
                ...state,
                number: state.number - state.diff
            };
        default:
            return state;
    }
}