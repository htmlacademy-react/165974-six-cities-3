import ReviewFormComponent from '../review-form/review-form';
import { ReviewsListItem } from '../../../../data/data';
import { DateFormat, formatDate } from '../../../../utils/date';

type ReviewsComponentProps = {
  data: ReviewsListItem[];
}

function ReviewsComponent({data}: ReviewsComponentProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">

      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{data.length}</span></h2>

      <ul className="reviews__list">

        {data.map((item) => (
          <li className="reviews__item" key={item.id}>

            <div className="reviews__user user">

              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={item.userAvatar} width="54" height="54" alt="Reviews avatar" />
              </div>

              <span className="reviews__user-name">
                {item.userName}
              </span>

            </div>

            <div className="reviews__info">

              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>

              <p className="reviews__text">
                {item.text}
              </p>

              <time className="reviews__time" dateTime={formatDate(item.dateTime)}>
                {formatDate(item.dateTime, DateFormat.MMMMYYYY)}
              </time>

            </div>
          </li>
        ))}

      </ul>

      <ReviewFormComponent />

    </section>
  );
}

export default ReviewsComponent;
