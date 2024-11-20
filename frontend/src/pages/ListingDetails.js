import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchListingById } from '../services/api';

function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetchListingById(id)
      .then((response) => setListing(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!listing) return <div>Loading...</div>;

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      <p>Rent: ${listing.rent}</p>
    </div>
  );
}

export default ListingDetails;
