import { LocationName } from '../../data/data';

type LocationsComponentProps = {
  data: LocationName[];
}

function LocationsComponent({data}: LocationsComponentProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {data.map((name) => (
            <li className="locations__item" key={name}>
              <a className="locations__item-link tabs__item" href="#">
                <span>{name}</span>
              </a>
            </li>
          ))}

        </ul>
      </section>
    </div>
  );
}

export default LocationsComponent;
