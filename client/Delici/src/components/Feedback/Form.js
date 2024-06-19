import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'; 

function Feedbackbanner(){
    // States for each input field
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setFavoriteDish] = useState('');
    const [question5, setFavoriteDrink] = useState('');
    const [question6, setServiceRating] = useState('');
    const [question7, setTimeDelivery] = useState('');
    const [question8, setStaffInteraction] = useState('');
    const [question9, setFacilitiesRating] = useState('');
    const [question10, setOverallFavorite] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const history = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10
    };
    console.log("Submitting form data:", formData);

    try {
        const response = await fetch('https://no3lounge-9eeef24429d5.herokuapp.com/api/feedback', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
          alert('Your feedback has been submitted. Thank you!');
            setTimeout(() => {
                history('/'); // Redirect to the homepage after 10 seconds
            }, 10000);
        } else {
            const errorText = await response.text();  // Assuming the server sends a plain text error message
    throw new Error('Failed to submit feedback: ' + errorText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
    
  };
  return (
    <div className="feedback-container">
    <form onSubmit={handleSubmit} className="feedback-form" style={{ backgroundColor: '#000000', color: '#ffffff', padding: '20px' }}>
      {/* Question 1 */}
      <label>
      <legend>Question 1: Did you enjoy your visit overall?</legend>
        <select value={question1} onChange={e => setQuestion1(e.target.value)}>
          <option value="">Select an option</option>
          <option value="option1(Yes)">Yes</option>
          <option value="option2(No)">No</option>
        </select>
      </label>
      
      <p></p>

      {/* Question 2 */}
      <label>
        <legend>Question 2: How did you hear about the NO.3 Lounge?</legend>
        <select value={question2} onChange={e => setQuestion2(e.target.value)}>
          <option value="">Select an option</option>
          <option value="option1(Social Media)">Social Media</option>
          <option value="option2(Referral)">Referral</option>
          <option value="option3(Google)">Google</option>
        </select>
      </label>

      {/* Question 3 */}
      <fieldset>
        <legend>Question 3: Are you satisfied with our menu </legend>
        <label>
          <input
            type="radio"
            name="question3"
            value="Yes"
            checked={question3 === "Yes"}
            onChange={e => setQuestion3(e.target.value)}
          /> Yes
        </label>
        <p></p>
        <label>
          <input
            type="radio"
            name="question3"
            value="No"
            checked={question3 === "No"}
            onChange={e => setQuestion3(e.target.value)}
          /> No
        </label>
      </fieldset>
      <label>
                <legend>Question 4: What is your favorite dish?</legend>
                <input
                    type="text"
                    value={question4}
                    onChange={e => setFavoriteDish(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
            </label>
      
            <label>
                <legend>Question 5: What is your best drink?</legend>
                <input
                    type="text"
                    value={question5}
                    onChange={e => setFavoriteDrink(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
            </label>
            <label>
                <legend>Question 6: How would you rate the quality of our services?</legend>
                <select value={question6} onChange={e => setServiceRating(e.target.value)}>
          <option value="">Select an option</option>
          <option value="option1(Very Good)">5 - Very Good</option>
          <option value="option2(Good)">4 - Good</option>
          <option value="option3(Okay)">3 - Okay</option>
          <option value="option4(Bad)">2 - Bad</option>
          <option value="option5(Very Bad)">1 - Very Bad</option>
        </select>
            </label>
            <label>
                <legend>Question 7: Was your order delivered on time?</legend>
                <label>
          <input
            type="radio"
            name="question7"
            value="Yes"
            checked={question7 === "Yes"}
            onChange={e => setTimeDelivery(e.target.value)}
          /> Yes
        </label>
        <p></p>
        <label>
          <input
            type="radio"
            name="question7"
            value="No"
            checked={question7 === "No"}
            onChange={e => setTimeDelivery(e.target.value)}
          /> No
        </label>
            </label>
            <label>
                <legend>Question 8: Was your server attentive & friendly?</legend>
                <label>
          <input
            type="radio"
            name="question8"
            value="Yes"
            checked={question8 === "Yes"}
            onChange={e => setStaffInteraction(e.target.value)}
          /> Yes
        </label>
        <p></p>
        <label>
          <input
            type="radio"
            name="question8"
            value="No"
            checked={question8 === "No"}
            onChange={e => setStaffInteraction(e.target.value)}
          /> No
        </label>
            </label>
            <label>
                <legend>Question 9: Were our restroom facilities clean and well-stocked?</legend>
                <label>
          <input
            type="radio"
            name="question9"
            value="Yes"
            checked={question9 === "Yes"}
            onChange={e => setFacilitiesRating(e.target.value)}
          /> Yes
        </label>
        <p></p>
        <label>
          <input
            type="radio"
            name="question9"
            value="No"
            checked={question9 === "No"}
            onChange={e => setFacilitiesRating(e.target.value)}
          /> No
        </label>
            </label>
            <label>
                <legend>Question 10: What do you like the best about the NO.3 Lounge? and is there anything you would like us to improve?</legend>
                <textarea
        value={question10}
        onChange={e => setOverallFavorite(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', minHeight: '100px' }}
    />
            </label>
            <p></p>
      <button type="submit" style={{ backgroundColor: '#ffffff', color: '#000000', padding: '10px 20px' }}>Submit Feedback</button>
    </form>
    {successMessage && <div style={{ fontSize: '24px', color: 'green', marginTop: '20px' }}>{successMessage}</div>}
    </div>
  );
}

export default Feedbackbanner;