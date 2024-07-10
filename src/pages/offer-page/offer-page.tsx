import { useParams } from 'react-router-dom';
import HeaderComponent from '../../components/layout/header/header';
import InsideListComponent from './components/inside-list/inside-list';
import NearPlacesComponent from './components/near-places/near-places';
import OfferGalleryComponent from './components/offer-gallery/offer-gallery';
import OfferMapComponent from './components/offer-map/offer-map';
import OfferHostComponent from './components/offer-host/offer-host';
import ReviewsComponent from './components/reviews/reviews';
import { insideList, listingData, nearPlacesData, offerGalleryList, reviewsList } from '../../data/data';
import NotFoundPage from '../not-found-page/not-found-page';

function OfferPage(): JSX.Element {
  const params = useParams();
  const currentOffer = listingData.find((item) => item.id === params.id);

  return (
    currentOffer ? (

      <div className="page">

        <HeaderComponent />

        <main className="page__main page__main--offer">
          <section className="offer">

            <OfferGalleryComponent data={offerGalleryList} />

            <div className="offer__container container">
              <div className="offer__wrapper">

                <div className="offer__mark">
                  <span>Premium</span>
                </div>

                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    Beautiful &amp; luxurious studio at great location
                  </h1>

                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>

                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>

                  <span className="offer__rating-value rating__value">4.8</span>
                </div>

                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    Apartment
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    3 Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max 4 adults
                  </li>
                </ul>

                <div className="offer__price">
                  <b className="offer__price-value">&euro;120</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>

                <InsideListComponent data={insideList} />

                <OfferHostComponent />

                <ReviewsComponent data={reviewsList} />

              </div>
            </div>

            <OfferMapComponent />

          </section>

          <div className="container">

            <NearPlacesComponent data={nearPlacesData} />

          </div>

        </main>
      </div>

    ) : (
      <NotFoundPage />
    )
  );
}

export default OfferPage;
