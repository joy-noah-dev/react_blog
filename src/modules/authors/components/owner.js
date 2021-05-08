import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Image from 'modules/commons/Image';
import { getOwnerDataRequested } from 'modules/authors/actions'

const Owner = () => {
  const authors = useSelector(state => state.authors)
  const dispatch = useDispatch()

  useEffect(() => {
    if (authors.owner.picture.url === '') {
      dispatch(getOwnerDataRequested())
    }
  }, [])

  return (
    <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
      <a
        data-video="https://player.vimeo.com/video/174002812"
        href="#0"
        aria-controls="video-modal"
      >
        <Image
          className="has-shadow"
          src={authors.owner.picture.url}
          alt="Hero"
          width={896}
          height={504} />
      </a>
    </div>
  )
}

export default Owner;
