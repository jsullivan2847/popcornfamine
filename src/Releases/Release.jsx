import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./releases.css"

export default function Release({ metadata }) {

  return (
    <div className='release-container'>
      <img alt='' className='release-art' src={metadata.album_art} />
      <h3 className='release-title'>{metadata.title}</h3>
      <h3 className='release-title'>{metadata.artist}</h3>
      <ul className='icons'>
        {Object.keys(metadata.links).map((linkKey, index) => {
          console.log(linkKey)
          return <a
            key={index}
            href={metadata.links[linkKey]}>
            <FontAwesomeIcon icon={metadata.icons[Object.keys(metadata.links)[index]]} />
          </a>
        })}
      </ul>
      <p>{metadata.release_date ? metadata.release_date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
      }) : ""}</p>
      <p className='release-description release-credits'>{metadata.credits}</p>
      <p className='release-description'>{metadata.description}</p>
    </div>
  )
}
