import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceDetailsId } = useParams();
    const [service, setService] = useState([])

    useEffect( () => {
        fetch('services.JSON')
        .then(res => res.json())
        .then(data => setService(data.service))
    }, [])

    useEffect(() => {
        const detail = service.find(details => details.serviceDetailsId === serviceDetailsId)
        console.log(detail);
    },[])
    return (
        <div>
            <h2>this is serviceDetailsPage {serviceDetailsId}</h2>
        </div>
    );
};

export default ServiceDetail;