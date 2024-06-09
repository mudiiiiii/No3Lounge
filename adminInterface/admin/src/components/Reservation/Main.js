import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Reservation() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);

    const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
    const displayKeys = ['numberOfPeople', 'date', 'time', 'name', 'emailAddress', 'phoneNumber'];

    useEffect(() => {
        setLoading(true);
        axios.get(`${baseURL}/api/reservations`)
            .then(response => {
                setReservations(response.data);
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
                        {reservations.map((feedback, index) => (
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

export default Reservation;
