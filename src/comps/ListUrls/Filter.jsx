import filterIcon from './filter-icon.svg';
import sortIcon from './sort-icon.svg';
import sortIconR from './sort-icon-r.svg';
import { useEffect, useState } from 'react';
import { useStore } from '../../store';

const Filter = ({ className = '' }) => {
  const [sortByCodeAsc, setSortByCodeAsc] = useState(null);
  const [filterUrl, setFilterUrl] = useState('');
  const [filterCode, setFilterCode] = useState('');

  const { filterByCode, filterByUrl, filterSortCode } = useStore();

  useEffect(() => {
    filterByUrl(filterUrl);
    filterByCode(filterCode);
    filterSortCode(sortByCodeAsc);
  }, [filterUrl, filterCode, sortByCodeAsc]);

  return (
    <div className={'filter-item ' + className}>
      <div>
        <img src={filterIcon} />
      </div>
      <div>
        <input
          type="text"
          value={filterUrl}
          onChange={(e) => setFilterUrl(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={filterCode}
          onChange={(e) => setFilterCode(e.target.value)}
        />
      </div>
      <div className="flex">
        <div
          className={
            'sort flex bg-gray-' + (sortByCodeAsc === null ? '200' : '400')
          }
          onClick={() =>
            setSortByCodeAsc(
              sortByCodeAsc === null
                ? true
                : sortByCodeAsc === true
                ? false
                : null
            )
          }
        >
          code{' '}
          <img
            src={sortByCodeAsc === null || sortByCodeAsc ? sortIcon : sortIconR}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
