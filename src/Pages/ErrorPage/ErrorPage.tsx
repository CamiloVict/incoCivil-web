import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  // TODO types for objects
  const error: any = useRouteError();
  const { status, statusText } = error;
  console.log(statusText);
  // TODO changes the tag elements for styled components
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{`${status} ${statusText}`}</i>
      </p>
    </div>
  );
}
