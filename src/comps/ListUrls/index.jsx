import { useStore } from '../../store';
import UrlItem from './urlItem';

import './index.scss';

const ListUrls = ({ className }) => {
  const { filteredUrls } = useStore();

  return (
    <div className={'list-urls ' + className}>
      <div className="list-header url-item bg-gray-400">
        <div>No.</div>
        <div>Long URI</div>
        <div>Code</div>
        <div>URL shortened</div>
      </div>
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
