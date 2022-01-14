import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const SendMeetLink = () => {

    const [meetLink, setMeetLink] = useState({})
    const { meetingLink } = meetLink;

    const { meetingId } = useParams();

    useEffect(() => {
        const url = `https://homedocto.herokuapp.com/meeting/${meetingId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeetLink(data))
    }, [meetingId])

    const handleLinkChange = e => {
        const updateLink = e.target.value;
        const updatedLink = { ...meetLink };
        updatedLink.meetingLink = updateLink;
        setMeetLink(updatedLink);
    }

    const handleLinkSubmit = e => {
        e.preventDefault();
        const url = `https://homedocto.herokuapp.com/meeting/${meetingId}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(meetLink)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Send SuccessFull')
                    setMeetLink({})
                }
            })


    };



    return (
        <div>
            <div className="form-box">
                <h1>Send Meeting Link</h1>

                <form className='mt-5' onSubmit={handleLinkSubmit}>
                    <div className="form-group">
                        <label>Link</label>
                        <input

                            onChange={handleLinkChange}
                            value={meetingLink || ''}
                            type="text" required
                            placeholder="Enter Meeting Link"
                            className="form-control" />
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default SendMeetLink;