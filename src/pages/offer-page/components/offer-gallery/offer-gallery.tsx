import { OfferGalleryItem } from '../../../../data/data';

type OfferGalleryComponentProps = {
  data: OfferGalleryItem[];
}

function OfferGalleryComponent({data}: OfferGalleryComponentProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {data.map((item) => (
          <div className="offer__image-wrapper" key={item.id}>
            <img className="offer__image" src={item.src} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGalleryComponent;
