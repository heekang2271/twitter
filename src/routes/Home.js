import { dbService } from "myBase";
import React, { useState, useEffect } from "react";
import Hweet from "components/Hweet";

export default ({userObj}) => {
    const [hweet, setHweet] = useState("");
    const [hweets, setHweets] = useState([]);
    
    useEffect(() => {
        dbService.collection("hweets").onSnapshot(snapshot => {
            const nweetArr = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setHweets(nweetArr);
        });
        
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("hweets").add({
            text: hweet,
            creatorId: userObj.uid
        });
        setHweet("");
    };

    const onChange = (event) => {
        const {
            target: { value }
        } = event;

        setHweet(value);
    }
    return (
        <div>
            <form onSubmit={ onSubmit }>
                <input type="text" placeholder="What's on your mind?" maxLength={120} onChange={onChange} value={ hweet }/>
                <input type="submit" value="Hweet" />
            </form>

            <div>
                {hweets.map(hweet => <Hweet key={hweet.id} hweetObj={hweet} isOwner={hweet.creatorId === userObj.uid} />)}
            </div>
        </div>
    )
}