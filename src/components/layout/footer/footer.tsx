import LogoComponent from '../../logo/logo';

function FooterComponent(): JSX.Element {
  return (
    <footer className="footer container">
      <LogoComponent styleClassName='footer' imageDimensions={[64, 33]} />
    </footer>
  );
}

export default FooterComponent;
