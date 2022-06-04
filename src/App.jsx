import Ads from './comps/Ads';
import Footer from './comps/Footer';
import Header from './comps/Header';
import ListUrls from './comps/ListUrls';
import NewUrlForm from './comps/NewUrlForm';

const App = () => {
  return (
    <div className="container m-auto">
      <Header className="h-20 bg-red-200" />
      <div className="h-screen mt-2 mb-2 gap-2 grid md:grid-cols-3 md:grid-rows-2">
        <NewUrlForm className="bg-green-200" />
        <Ads className="bg-yellow-200 md:row-start-2" />
        <ListUrls className="bg-blue-200 md:col-span-2 md:row-span-2" />
      </div>
      <Footer className="h-20 bg-red-200" />
    </div>
  );
};

export default App;
