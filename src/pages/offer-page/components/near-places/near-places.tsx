import ListingCardComponent from '../../../../components/listing-card/listing-card';
import { ListingItem } from '../../../../data/data';

type NearPlacesComponentProps = {
  data: ListingItem[];
}

function NearPlacesComponent({data}: NearPlacesComponentProps): JSX.Element {
  return (
    <section className="near-places places">

      <h2 className="near-places__title">Other places in the neighbourhood</h2>

      <div className="near-places__list places__list">

        {data.map((item) => (
          <ListingCardComponent
            key={item.id}
            data={item}
            additionalCssClasses={{
              card: 'near-places__card',
              image: 'near-places__image-wrapper',
            }}
          />
        ))}

      </div>
    </section>
  );
}

export default NearPlacesComponent;
