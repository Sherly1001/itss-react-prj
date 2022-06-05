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
      {filteredUrls.map((u, i) => (
        <UrlItem key={u.code} no={i + 1} url={u} />
      ))}
    </div>
  );
};

export default ListUrls;
