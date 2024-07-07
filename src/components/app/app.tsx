import ListingPage from '../../pages/listing-page/listing-page';
import { ListingItem } from '../../data/data';

type AppProps = {
  listingData: ListingItem[];
}

function App({listingData}: AppProps): JSX.Element {
  return (
    <ListingPage listingData={listingData} />
  );
}

export default App;
