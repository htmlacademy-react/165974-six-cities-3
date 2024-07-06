import { FavoritesItem } from '../../../../data/data';
import FavoritesListItemComponent from '../favorites-list-item/favorites-list-item';

type FavoritesListComponentProps = {
  data: FavoritesItem[];
}

function FavoritesListComponent({data}: FavoritesListComponentProps): JSX.Element {
  return (
    <ul className="favorites__list">

      {data.map((item) => (
        <FavoritesListItemComponent data={item} key={item.id}/>
      ))}

    </ul>
  );
}

export default FavoritesListComponent;
