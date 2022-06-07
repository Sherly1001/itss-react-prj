import Ads from './comps/Ads';
import Footer from './comps/Footer';
import Header from './comps/Header';
import ListUrls from './comps/ListUrls';
import NewUrlForm from './comps/NewUrlForm';

const App = () => {
  return (
    <div className="app container grid gap-2 m-auto">
      <Header className="bg-red-200" />
      <div className="main gap-2 grid md:grid-cols-3 md:grid-rows-2">
        <NewUrlForm className="bg-green-200" />
        <Ads className="bg-yellow-200 md:row-start-2" />
        <ListUrls className="bg-blue-200 md:col-span-2 md:row-span-2" />
      </div>
      <Footer className='bg-red-200 footer'/>
    </div>
  );
};

export default App;
