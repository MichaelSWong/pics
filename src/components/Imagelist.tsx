import React from 'react';

const Imagelist = (props: any) => {
  const images = props.images.map(({ description, id, urls }: any) => {
    return <img src={urls.regular} key={id} alt={description} />;
  });
  return <div>{images}</div>;
};

export default Imagelist;
