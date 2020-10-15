import React, { useEffect, useState } from 'react';

const ClientFeedback = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://protected-spire-97265.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="container">
            <h4 className="text-center mt-4 mb-5 pt-4 pb-5">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h4>
            <div className="row justify-content-center">
                {
                    review.map(review => <div className="col-md-3 m-2 col-sm-12" key={review._id}>
                        <div className="row shadow d-flex align-items-center">
                            <div className="m-5">
                                <h5>{review.name}</h5>
                                <p>{review.company}</p>
                                <small>{review.description}</small>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;