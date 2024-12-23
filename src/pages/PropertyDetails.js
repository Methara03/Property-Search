import { useParams } from 'react-router-dom';
import properties from '../data/properties.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function PropertyDetails() {
  const { id } = useParams();  // Get the property id from the URL
  const allProperties = properties.properties;
  
  // Find the property with the matching id
  const property = allProperties.find(prop => prop.id === id);
  
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h1>Property Details</h1>
      <h2>{property.location}</h2>
      
      {/* Carousel for property images */}
      <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        emulateTouch={true} 
        dynamicHeight={true}
      >
        {property.pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} alt={`Property ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <div className="property-details">
        <p><strong>Type:</strong> {property.type}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
        <p><strong>Tenure:</strong> {property.tenure}</p>
        <p><strong>Description:</strong> {property.description}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Added:</strong> {property.added.month} {property.added.day}, {property.added.year}</p>
      </div>
    </div>
  );
}
