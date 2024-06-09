import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Application() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);

    const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
    const displayKeys = ['job', 'first_name', 'last_name', 'email', 'phone', 'previous_role', 'years_worked', 'work_summary'];

    useEffect(() => {
        setLoading(true);
        axios.get(`${baseURL}/api/applications`)
            .then(response => {
                setApplications(response.data);
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
                        {applications.map((feedback, index) => (
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

export default Application;
