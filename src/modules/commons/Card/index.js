import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Image from 'modules/commons/Image';


const Card = ({
  cardData,
  width,
}) => {
  return (
    <div class="card">
      <Image
        className="has-shadow"
        src={cardData.assets[0].gameAbsolutePath}
        alt="Hero"
        width={width}
      />
    </div>
  )
}

export default Card;
