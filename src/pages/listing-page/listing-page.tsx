import { Helmet } from 'react-helmet-async';
import HeaderComponent from '../../components/layout/header/header';
import ListingCardComponent from '../../components/listing-card/listing-card';
import LocationsComponent from '../../components/locations/locations';
import { ListingItem, locationsData } from '../../data/data';
import ListingMapComponent from './components/listing-map/listing-map';
import SortingComponent from './components/sorting/sorting';

type ListingPageProps = {
  listingData: ListingItem[];
}

function ListingPage({listingData}: ListingPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Helmet>
        <title>6 cities - Listing</title>
      </Helmet>

      <HeaderComponent />

      <main className="page__main page__main--index">

        <h1 className="visually-hidden">Cities</h1>

        <LocationsComponent data={locationsData} />

        <div className="cities">
          <div className="cities__places-container container">

            <section className="cities__places places">

              <h2 className="visually-hidden">Places</h2>

              <b className="places__found">{listingData.length} places to stay in Amsterdam</b>

              <SortingComponent />

              <div className="cities__places-list places__list tabs__content">

                {listingData.map((item) => (
                  <ListingCardComponent
                    key={item.id}
                    data={item}
                    additionalCssClasses={{
                      card: 'cities__card',
                      image: 'cities__image-wrapper',
                    }}
                  />
                ))}

              </div>
            </section>

            <div className="cities__right-section">
              <ListingMapComponent />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default ListingPage;
