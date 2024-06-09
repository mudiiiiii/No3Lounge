import React, { useEffect, useState } from 'react';
import axios from 'axios';
 // Import your CSS for styling

function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(false);
    const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
    const displayKeys = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];

    useEffect(() => {
        setLoading(true);
        axios.get(`${baseURL}/api/feedbacks`)
            .then(response => {
                setFeedbacks(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching feedbacks: ", error);
                setLoading(false);
            });
    }, [baseURL]);

    return (
        <div>
            {loading ? <p>Loading...</p> : (
                <table>
                    <thead>
                        <tr>
                            {displayKeys.map(key => <th key={key}>{key}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((feedback, index) => (
                            <tr key={index}>
                                {displayKeys.map(key => <td key={key}>{feedback[key]}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Feedback;
