import { InsideListItem } from '../../../../data/data';

type InsideListComponentProps = {
  data: InsideListItem[];
}

function InsideListComponent({data}: InsideListComponentProps): JSX.Element {

  return (
    <div className="offer__inside">

      <h2 className="offer__inside-title">What&apos;s inside</h2>

      <ul className="offer__inside-list">
        {data.map((item) => (
          <li className="offer__inside-item" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default InsideListComponent;
