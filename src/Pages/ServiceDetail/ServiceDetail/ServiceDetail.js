import React from 'react';
import { useParams } from 'react-router';


const ServiceDetail = () => {
    const { serviceDetailsId } = useParams();
    // const [services, setServices] = useState([])

    // useEffect( () => {
    //     fetch('services.JSON')
    //     .then(res => res.json())
    //     .then(data => setServices(data.service))
    // }, [])

   
    return (
        <div>
            <h2>this is serviceDetailsPage {serviceDetailsId}</h2>
            
        </div>
    );
};

export default ServiceDetail;