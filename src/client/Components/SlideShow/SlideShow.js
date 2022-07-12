// https://docs.google.com/document/d/12TWTztGzbQ4gC7pGYznLwjigbvrawfn44HkOZDJ3rvc/edit#heading=h.vyy1vbzbm6r
// Steps:
// 1. Change something and save the file.
// 2. Share the url from the url bar (URL changes after you save changes).
// 3. Share your screen.

import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const SlideShow = () => {
    const [inputSearch, setInputSearch] = useState("moon");
    const [resultSet, setResultSet] = useState([]);
    const [imgData, setImgData] = useState([]);
    const [imgIndex, setImgIndex] = useState(0);

    const url = "https://images-api.nasa.gov/search?q=";

    const imageChange = (num) => {
        const val = imgIndex + num;
        if (val >= 0 && val < imgData.length) {
            setImgIndex(val);
        }
    };

    const debounce = (func, timeout = 300) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(args);
            }, timeout);
        };
    };

    const apiCall = (inputSearch) => {
        if (inputSearch.length) {
            fetch(`${url}${inputSearch}`)
                .then((res) => {
                    return res.json();
                })
                .then((re) => {
                    const data = re?.collection;
                    const { items = [] } = data;
                    setResultSet(items);
                    setImgIndex(0);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const parserImageContainer = (resultSet = []) => {
        let _imgData = [];
        resultSet.forEach((item) => {
            const { links = [] } = item;
            const href = links[0]?.href;
            _imgData.push(href);
        });
        setImgData(_imgData);
    };

    const delay = 200;
    const [slideShowIndex, setSlideShowIndex] = useState(0);
    const timeoutRef = useRef(0);
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setSlideShowIndex((prevIndex) =>
                    prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [slideShowIndex, imgData]);

    useEffect(() => {
        debounce(apiCall(inputSearch));
    }, [inputSearch]);

    useEffect(() => {
        parserImageContainer(resultSet);
    }, [resultSet]);

    return (<>
        <div className="App">
            <div>
                <h2>Search </h2>
                <input
                    type="text"
                    value={inputSearch}
                    onChange={(e) => {
                        const val = e.target.value;
                        setInputSearch(val);
                    }}
                />
            </div>
            {imgData && imgData.length ? <>
                <div className="flexCenter">
                    <img
                        className="ImageBox"
                        src={imgData[imgIndex]}
                        alt="preview"
                        height="150"
                        width="150"
                    />
                </div>
                <p>Image Number: {imgIndex}</p>
                <div className="flexCenter">
                    <div className="flex">
                        <span onClick={(e) => imageChange(-1)}>Pev</span>
                        <span onClick={(e) => imageChange(1)}>Next</span>
                    </div>
                </div>
                <div className="flexCenter">
                    <div className="flex">
                        <span onClick={(e) => imageChange(-5)}>&#60;&#60; Back 5 </span>
                        <span onClick={(e) => imageChange(5)}>Next 5 &#62;&#62;</span>
                    </div>
                </div>
                <div>
                    <h2>SlideShow</h2>
                    <div className="flexCenter">
                        <img
                            className="ImageBox"
                            src={imgData[slideShowIndex]}
                            alt="preview"
                            height="150"
                            width="150"
                        />
                    </div>
                </div>
            </> : <></>}
        </div>
    </>
    );
}

export default SlideShow;
