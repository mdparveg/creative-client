import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://protected-spire-97265.herokuapp.com/placeReview',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your review is placed')
            }
        })
    };

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5">
                <h1 className="mt-3 pb-5">This is review</h1>
                <form style={{ width: "50%" }} onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" placeholder="Your name" name="name" type="text" ref={register} />
                    <br/>
                    <input className="form-control" placeholder="Company’s name, Designation" name="company"  ref={register} />
                    <br/>
                    <input className="form-control" placeholder="Description" name="description" ref={register} />
                    <br/>
                    <input className="btn-brand btn text-white px-5" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Review;