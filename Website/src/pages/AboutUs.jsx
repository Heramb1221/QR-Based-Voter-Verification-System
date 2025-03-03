import React, { useState } from 'react';

const AboutUs = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <div className="bg-gray-50 text-dark">
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Organization Overview */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">About QRVotify</h1>
          <p className="text-lg text-gray-700">
            QRVotify is a secure and reliable QR-based voter verification system designed to ensure transparency and fairness in elections.
            Our mission is to simplify voter registration and verification, making the process accessible and secure for everyone.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Founded with a vision to revolutionize the voting process, QRVotify has grown into a trusted platform that
            combines cutting-edge technology with government protocols for a transparent electoral process.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: '', role: '', img: '' },
              { name: '', role: '', img: '' },
              { name: '', role: '', img: '' }
            ].map((member, index) => (
              <div key={index} className="text-center p-4 border rounded-lg shadow-md bg-white">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Our Achievements</h2>
          <div className="space-y-4">
            {[
              { title: 'Milestone 1', description: 'Successfully registered over 1 million voters.' },
              { title: 'Milestone 2', description: 'Streamlined the voter verification process with 99.9% accuracy.' },
              { title: 'Milestone 3', description: 'Awarded for innovation in electoral process technology.' }
            ].map((achievement, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">We Value Your Feedback</h2>
          {!submitted ? (
            <form onSubmit={handleFeedbackSubmit} className="max-w-lg mx-auto">
              <textarea
                name="feedback"
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Share your thoughts, suggestions, or concerns..."
                className="w-full p-4 border rounded-lg mb-4"
                required
                rows={4}
              ></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
                Submit Feedback
              </button>
            </form>
          ) : (
            <p className="text-center text-green-600 font-semibold">Thank you for your feedback!</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
