import { useStore } from '../../store';
import UrlItem from './urlItem';

import './index.scss';
import Filter from '../Filter/filter';
import { useEffect, useState } from 'react';


const ListUrls = ({ className }) => {
  // const { filteredUrls } = useStore();
  const filteredUrls = [
    {url: "cdscs.com", code: "cdnskcnsdk"},
    {url: "rewfre.com", code: "3d2"},
    {url: "bgf.com", code: "t5g54"},
    {url: "cdsbfbgfcs.com", code: "64gr"},
    {url: "iutuyt.com", code: "nmjg"},
  ]

  const [filterList, setFilterList] = useState(filteredUrls)

  const [option, setOption] = useState(null)
  // Contains {No, url, code, surl}
  useEffect(()=>{
    // TODO: Update filter list here
    console.log(option);
  }, [option])

  return (
    <div className={'list-urls ' + className}>
      <div className="list-header url-item bg-gray-400">
        <div>No.</div>
        <div>Long URI</div>
        <div>Code</div>
        <div>URL shortened</div>
      </div>
      
      <Filter setter={setOption}/>

      {filteredUrls.length > 0 ? (
        filteredUrls.map((u, i) => <UrlItem key={u.code} no={i + 1} url={u} />)
      ) : (
        <div className="text-5xl font-black text-gray-500 text-center mt-48">
          No data
        </div>
      )}
    </div>
  );
};

export default ListUrls;
