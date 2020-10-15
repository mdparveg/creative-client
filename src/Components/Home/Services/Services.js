import React, { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const {service, setService} = useContext(UserContext);
    useEffect(() => {
        fetch('https://protected-spire-97265.herokuapp.com/showServices')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section className="service">
            <div className="container">
                <h4 className="mt-5 text-center">Provide awesome <span style={{ color: '#7AB259' }}>Services</span></h4>
                <div className="row">
                    {
                        service.map(service => <ShowServices key={service._id} service={service}></ShowServices>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;