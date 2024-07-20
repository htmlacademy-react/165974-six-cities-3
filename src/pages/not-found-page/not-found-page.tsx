import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderComponent from '../../components/layout/header/header';
import FooterComponent from '../../components/layout/footer/footer';
import './not-found-page.scss';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--empty">

      <Helmet>
        <title>6 cities - Not found</title>
      </Helmet>

      <HeaderComponent />

      <main className="page__main page__main--not-found page__main--empty">
        <div className="page__not-found-container container">

          <section className="not-found not-found--empty">

            <h1 className="visually-hidden">Nothing found</h1>

            <div className="not-found__status-wrapper">
              <b className="not-found__status">Nothing found.</b>
              <p className="not-found__status-description">Try different search or <Link to="/">return to the main page</Link>.</p>
            </div>

          </section>

        </div>
      </main>

      <FooterComponent />

    </div>
  );
}
export default NotFoundPage;
