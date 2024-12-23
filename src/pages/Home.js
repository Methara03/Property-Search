import React from 'react';
import PropertyItem from '../components/PropertyItem';
import properties from '../data/properties.json';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const allProperties = properties.properties;
  const navigate = useNavigate();
  return (
    <div>
      <h1>Property Listings</h1>
      {allProperties.map((property) => (
        <div onClick={()=>{navigate(property.id)}}>
        <PropertyItem key={property.id} property={property} />
        </div>
      ))}
    </div>
  );
}
