import HeaderComponent from '../../components/layout/header/header';
import FooterComponent from '../../components/layout/footer/footer';
import FavoritesListComponent from './components/favorites-list/favorites-list';
import { favoritesData } from '../../data/data';

function FavoritesPage(): JSX.Element {
  return (
    <div className="page">

      <HeaderComponent />

      <main className="page__main page__main--favorites">

        <div className="page__favorites-container container">

          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <FavoritesListComponent data={favoritesData} />

          </section>

        </div>

      </main>

      <FooterComponent />

    </div>
  );
}

export default FavoritesPage;
