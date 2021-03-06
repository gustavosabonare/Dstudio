/* globals process */

import React from 'react';

// Styles
import './index.scss';

export default ({ title, description, image }) => {
  return (
    <article className='card'>
      <img src={image && image.url} className="card__image" alt={title} />
      <div className="card__info">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </article >
  )
}