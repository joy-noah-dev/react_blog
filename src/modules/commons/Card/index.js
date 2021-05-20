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
        placeholderImg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJR6fQxTm1dImiD4n664BWUAADt_R_pKI1mg&usqp=CAU'}
      />
    </div>
  )
}

export default Card;
