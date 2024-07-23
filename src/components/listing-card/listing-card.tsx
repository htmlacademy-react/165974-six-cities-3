import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ListingItem } from '../../data/data';

type ListingCardComponentProps = {
  data: ListingItem;
  additionalCssClasses?: {
    card?: string;
    image?: string;
    info?: string;
  };
  imageDimensions?: [number, number];
}

function ListingCardComponent({data, additionalCssClasses, imageDimensions}: ListingCardComponentProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    // rating,
    img,
    isPremium,
    isFavorite,
  } = data;

  return (
    <article className={`${additionalCssClasses?.card || ''} place-card`}>

      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${additionalCssClasses?.image || ''} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={img}
            width={imageDimensions ? imageDimensions[0] : 260}
            height={imageDimensions ? imageDimensions[1] : 200}
            alt="Place image"
          />
        </Link>
      </div>

      <div className={`${additionalCssClasses?.info || ''} place-card__info`}>
        <div className="place-card__price-wrapper">

          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              In bookmarks
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>

        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>

        <p className="place-card__type">{type}</p>

      </div>
    </article>
  );
}

export default ListingCardComponent;
