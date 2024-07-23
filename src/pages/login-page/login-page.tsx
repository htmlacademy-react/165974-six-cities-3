import { Helmet } from 'react-helmet-async';
import HeaderComponent from '../../components/layout/header/header';
import LoginFormComponent from './components/login-form/login-form';

function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">

      <Helmet>
        <title>6 cities - Login</title>
      </Helmet>

      <HeaderComponent isAuth={false} isSignInButtonHidden />

      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginFormComponent />

          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default LoginPage;
