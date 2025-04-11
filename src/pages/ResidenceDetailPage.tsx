import React from 'react';
import { useParams } from 'react-router-dom';

const ResidenceDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-6">Residence Details</h1>
      <p className="text-gray-600">Details for residence {id}</p>
    </div>
  );
};

export default ResidenceDetailPage;