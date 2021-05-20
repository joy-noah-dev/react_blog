import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined
}

const Image = ({
  className,
  src,
  width,
  height,
  alt,
  placeholderSrc,
  ...props
}) => {

  const [loaded, setLoaded] = useState(false);

  const image = useRef(null);

  function onLoad() {
    setLoaded(true);
  }

  return (
    <div>
      {!loaded && <img
          {...props}
          ref={image}
          className={className}
          src={placeholderSrc}
          width={width}
          height={height}
          alt={alt} />}
      <img
        {...props}
        ref={image}
        className={className}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoad={onLoad} />
    </div>
  );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
