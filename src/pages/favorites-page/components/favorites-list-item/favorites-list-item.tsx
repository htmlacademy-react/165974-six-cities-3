import ListingCardComponent from '../../../../components/listing-card/listing-card';
import { FavoritesItem } from '../../../../data/data';

type FavoritesListItemComponentProps = {
  data: FavoritesItem;
}

function FavoritesListItemComponent({data}: FavoritesListItemComponentProps): JSX.Element {
  const { city, places } = data;

  return (
    <li className="favorites__locations-items">

      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        {places.map((item) => (
          <ListingCardComponent
            key={item.id}
            data={item}
            additionalCssClasses={{
              card: 'favorites__card',
              image: 'favorites__image-wrapper',
              info: 'favorites__card-info',
            }}
            imageDimensions={[150, 110]}
          />
        ))}
      </div>

    </li>
  );
}

export default FavoritesListItemComponent;
