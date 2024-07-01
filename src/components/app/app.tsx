import ListingPage from '../../pages/listing-page/listing-page';
import { ListingItem } from '../../data/data';

type AppProps = {
  placesFoundCount: number;
  listingData: ListingItem[];
}

function App({placesFoundCount, listingData}: AppProps): JSX.Element {
  return (
    <ListingPage placesFoundCount={placesFoundCount} listingData={listingData} />
  );
}

export default App;
