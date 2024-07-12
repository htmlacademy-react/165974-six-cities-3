import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoComponentProps = {
  styleClassName: string;
  imageDimensions?: [number, number];
}

function LogoComponent({styleClassName, imageDimensions}: LogoComponentProps): JSX.Element {
  return (
    <Link className={`${styleClassName || 'header'}__logo-link`} to={AppRoute.Home}>
      <img
        className={`${styleClassName || 'header'}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={imageDimensions ? imageDimensions[0] : 81}
        height={imageDimensions ? imageDimensions[1] : 41}
      />
    </Link>
  );
}

export default LogoComponent;
