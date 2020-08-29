import React from 'react';
import {ButtonNext} from 'components';

export const NotFound = () => {
  return (
    <>
      <p>Something went wrong. Page not found</p>
      <ButtonNext
        setChecked={false}
        success={true}
        pageId={100}
        text='Home Page' />
    </>
  );
};
