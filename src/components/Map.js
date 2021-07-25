import React, { useContext, useState } from 'react';

import GoogleMapReact from 'google-map-react';
import { Dialog } from '@reach/dialog';

import { SearchResultsContext } from '../context/SearchResults';

import Pin from './Pin';

// Primarily the functional requirements: describe the behaviors (functions or services) of the system that support user goals, tasks or activities. What is required by the business and product owner to accept the story? What will be verified to prove that the story provides the stakeholder-requested value?

// User can tap on a pin on the map to open an Info Window with the following details about the place:

// Name

// Description

// Thumbnail (if there is one) for the place rendered at the largest size possible within the Info Window

// Distance of the place from the map center, in kms

// A link to view the place on Wikipedia

// Links out to Wikipedia should use the pageid property that is returned by the API, using the following format: https://en.wikipedia.org/?curid=<pageid> (e.g., https://en.wikipedia.org/?curid=60401407)

// Given a user viewing the map view of the app with pins rendered, when the user taps on a pin, then an Info Window should open showing more details about the place

// Given a user viewing an Info Window with more details, when they tap the close “x” the Info Window should close, returning them to the view before they opened the Info Window

// Steps!!!
// 1. install ReachUI library to retrieve reach/dialog
// 2. create a piece of state to store the location details for where user is currently at and default it to null
// 3. when pin is clicked, we will replace null with current location details (update the state!)
// 4. we will need to listen for an onclick event for the pin
// 5. when pin is clicked, it will fire a handleClick
// 6. when handleClick is called, it will update the state by setting location details associated with the pin
// 7. location information needs to be rendered. we will check if any location information exists, and if it exists, we will render the dialog with the existing information.
// 8. when rendered, the dialog will have a button with an onclick handler. The button will be an 'x' in the upper corner. The handler is responsible for closing the dialog.

const Map = () => {
  const [loaded, setLoaded] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);
  const { data } = useContext(SearchResultsContext);
  const { centerCoords, zoom } = data;

  const handleApiLoaded = () => {
    setLoaded(true);
  };

  const handleClick = (location) => {
    setLocationDetails(location);
  };

  return (
    <>
      <h1>What's Near Me?</h1>
      <div className="view__content">
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyCbfV0IAdkkGv-9mmuAkUJNzCPPfGRO6v0',
            }}
            defaultCenter={centerCoords}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={handleApiLoaded}
          >
            {data?.query?.pages?.length > 0 && loaded
              ? data.query.pages.map((location) => {
                  const { coordinates, pageid: id } = location;

                  return (
                    <Pin
                      key={id}
                      lat={coordinates[0].lat}
                      lng={coordinates[0].lon}
                      imageUrl={
                        location?.thumbnail?.source ||
                        `${process.env.PUBLIC_URL}/placeholder.png`
                      }
                      alt={location?.thumbnail?.source ? location.title : ''}
                      onClick={() => {
                        handleClick(location);
                      }}
                    />
                  );
                })
              : null}
            {locationDetails && (
              <Dialog className="dialog" aria-label="locationDetails">
                <button>HI BUTTON CLOSE WHAT</button>
                <div>
                  <img
                    src={
                      locationDetails?.thumbnail?.source ||
                      `${process.env.PUBLIC_URL}/placeholder.png`
                    }
                    alt={
                      locationDetails?.thumbnail?.source
                        ? locationDetails.title
                        : ''
                    }
                  />
                </div>
                <div>
                  <h2>{locationDetails.title}</h2>
                  <p>{locationDetails.description}</p>
                  <p>{locationDetails.coordinates[0].dist}</p>
                  <p>
                    <a
                      href={`https://en.wikipedia.org/?curid=${locationDetails.pageid}`}
                    >
                      HERE IS A LINK TO MORE INFO
                    </a>
                  </p>
                </div>
              </Dialog>
            )}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
};

export default Map;
