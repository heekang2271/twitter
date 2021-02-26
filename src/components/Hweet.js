import { dbService } from "myBase";
import React, { useState } from "react";

const Hweet = ({ hweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newHweet, setNewHweet] = useState(hweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this hweet?");
        console.log(ok);
        if (ok) {
            await dbService.doc(`hweets/${hweetObj.id}`).delete();
        }
    }

    const toggleEditing = () => setEditing((prev) => !prev);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;

        setNewHweet(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`hweets/${hweetObj.id}`).update({
            text: newHweet
        });
        setEditing(false);
    }
    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder="Edit your hweet" value={newHweet} required onChange={onChange} />
                        <input type="submit" value="Update Hweet" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
                ) : (
                    <>
                        <h4>{hweetObj.text}</h4>
                        {isOwner && (
                            <>
                                <button onClick={onDeleteClick}>Delete hweet</button>
                                <button onClick={toggleEditing}>edit hweet</button>
                            </>
                        )}
                    </>
                )}
        </div>
    )
}

export default Hweet;