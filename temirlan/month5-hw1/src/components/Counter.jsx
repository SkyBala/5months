import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../action/CounterAction';
import classes from './counter.module.css';
import myVideo from '../videos/myVideo.mp4';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleCounterClick = () => {
        if (!isVideoPlaying) {
            setIsVideoPlaying(true);
        }
    };

    return (
        <div className={classes.counter} onClick={handleCounterClick}>
            {isVideoPlaying && (
                <video autoPlay loop controls className={classes.video}>
                    <source src={myVideo} type="video/mp4" />
                </video>
            )}
            <button className={classes.btn} onClick={() => dispatch(increment())}>
                +
            </button>
            <span className={classes.result}>{count}</span>
            <button className={classes.btn} onClick={() => dispatch(decrement())}>
                -
            </button>
        </div>
    );
};

export default Counter;
