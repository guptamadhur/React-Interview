import React, { useEffect, useState } from "react";
import './styles.css';
import data from "./messages.json";

const Message = props => {
    return (
        <div className="message-container" onClick={() => props.onClick()}>
            <p>"{props.text}"</p>
            <div className="details-container">
                <small>
                    Sent by <b>{props.sentBy}</b>
                </small>
            </div>
        </div>
    );
};

const MessageCard = () => {
    const [currCardIndex, setCardIndex] = useState(0)
    const [messgageList, setMessageList] = useState(data.messages);
    const [shuffleCard, toggleShuffle] = useState(false);

    useEffect(() => {
        if (shuffleCard) {
            let getShuffledData = shuffle([...data.messages])
            setMessageList(getShuffledData);
            toggleShuffle(false);
        }
    }, [shuffleCard]);

    const onCardClick = () => {
        const displayCard = currCardIndex + 1 < messgageList.length ? currCardIndex + 1 : 0
        setCardIndex(displayCard);
    }

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    return (
        <div className="color-container">
            <h2>Message List</h2>

            <input type="button" onClick={() => toggleShuffle(true)} value="Random" />

            <Message
                key={`message-0`}
                text={messgageList[currCardIndex].text}
                sentBy={messgageList[currCardIndex].sentBy}
                onClick={onCardClick}
            />

            {/* {data.messages.map((message, i) => (
                <Message
                key={`message-${i}`}
                text={message.text}
                sentBy={message.sentBy}
                />
            ))} */}
        </div>
    );
};

export default MessageCard;
