import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <div className='card-item'>
        <div className="card-item-images">
        <div className="card-item-images-wrap">

       
          <div className="card-images-info">
            <div className="card-images-info-blocks">
              <button className="card-iamges-info-blocks-btn-1">
              </button>
              <div className="card-image-info-blocks-slider">
              <div className="card-info-blocks-swipper swipper-container">
                <ul>
                  <li>
                    <div className="card-info-blocks-ul-div">

                    <img src="/public/assets/svg/carditem01.webp" alt="" />
                    </div>
                  </li>
                </ul>
              </div>

              </div>


            </div><div className="card-images-content">
            <div className="card-images-content-mix-block">
              <button className="card-images-content-mix-block-btn-1">
                button
              </button>
              <div className="card-images-content-image-container">
              <div className="card-images-content-image-photo">
                <div className='card-images-content-image-photo-div'>
                  {/* <img src="/public/assets/svg/2.webp" alt="" /> */}
                </div>
              </div>

              </div>
              <button className="card-images-content-mix-block-btn-2">
                button
              </button>
              {/* <Link className='.card-images-content-link'>hjkll;kj</Link> */}
            </div>

            </div>
           
          </div>
          </div>

        </div>
        <div className="card-item-description">
        <div className="card-item-description-header">
              <Link>
              Ozcorp</Link>
              <h1>Комплект мужского термобелья: штаны и кофта для зимы</h1>
            </div>

        </div>
        <div className="card-item-colors">

        </div>
        <div className="card-item-characteristics">

        </div>
        <div className="card-item-return">

        </div>
        <div className="card-item-popup">
            
        </div>
        carditem
      
    </div>
  )
}

export default CardItem
