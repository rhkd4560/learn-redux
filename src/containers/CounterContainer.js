import React from 'react';
import Counter from '../components/Counter'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter'

function CounterContainer(){
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff : state.counter. diff
    // }));
    // 최적화 1
    // const number = useSelector(state => state.counter.number);
    // const diff = useSelector(state => state.counter.diff);
    // 최적화 2
    const { number, diff } = useSelector(state => ({        //equlityFn는 left와 right를 가져와서 비교
            number: state.counter.number,
            diff : state.counter. diff
        }), 
        shallowEqual        // left, right 비교를 해주는 함수 얕게 비교를함 주의해야함
        );
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return(
        <Counter
            number = {number}
            diff = {diff}
            onIncrease = {onIncrease}
            onDecrease = {onDecrease}
            onSetDiff = {onSetDiff}
        />
    );
}

export default CounterContainer;