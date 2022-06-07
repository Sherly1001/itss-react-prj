import { useEffect, useState } from 'react';
import { useStore } from '../../store';
import Filter from './Filter';
import UrlItem from './urlItem';
import './index.scss';

import menuIcon from './menu-icon.svg';
import closeIcon from './close-icon.svg';

const ListUrls = ({ className }) => {
  const { filteredUrls, filterDelete } = useStore();

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (!showFilter) {
      filterDelete();
    }
  }, [showFilter]);

  return (
    <div className={'list-urls ' + className}>
      <div className="list-header url-item bg-gray-400">
        <div>No.</div>
        <div>Long URI</div>
        <div>Code</div>
        <div>URL shortened</div>
        <div className="flex justify-end">
          <img
            src={showFilter ? closeIcon : menuIcon}
            onClick={() => setShowFilter(!showFilter)}
          />
        </div>
      </div>
      {showFilter && <Filter className="url-item" />}
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
