import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../store/PostsSlice';
import RikMortiCards from "./RikMortiCards";
import './posts.css';

const musicURL = require('../../music/rik_i_morti_-_main_theme_absrdst_remix_(z3.fm).mp3');

const PostsPage = () => {
    const [data, setData] = useState([]);
    const { posts } = useSelector(state => state.postsReducer);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(musicURL));

    const decreasePage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const increasePage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(prevState => !prevState);
    };

    const constructURL = () => {
        return `https://rickandmortyapi.com/api/character?page=${currentPage}`;
    };

    useEffect(() => {
        const asyncData = async () => {
            try {
                const response = await fetch(constructURL());
                const jsonData = await response.json();
                setData(jsonData.results);
            } catch (e) {
                console.error(e);
            }
        };
        asyncData();
    }, [currentPage]);

    return (
        <div>
            <header className='header'>
                <button onClick={decreasePage}>Назад</button>
                <p>Номер страницы: {currentPage}</p>
                <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={increasePage}>Вперед</button>
            </header>
            <RikMortiCards data={data} />
        </div>
    );
};

export default PostsPage;
