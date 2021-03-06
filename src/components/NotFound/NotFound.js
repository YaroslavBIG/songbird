import React from 'react';
import {ButtonNext} from 'components';

export const NotFound = () => {
  return (
    <>
      <p>Что-то пошло не так. Страница не найдена.</p>
      <ButtonNext
        setChecked={false}
        success={true}
        pageId={100}
        text='На главную' />
    </>
  );
};
