import { configureStore, createSelector, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const storedUrls = JSON.parse(localStorage.getItem('urls')) || [];

const urlSlice = createSlice({
  name: 'urls',
  initialState: storedUrls,
  reducers: {
    addUrl: (urls, action) => {
      const [url, code] = action.payload;
      const newUrls = [...urls, { url, code }];

      const idx = urls.findIndex((u) => u.code === code);
      if (idx >= 0) {
        throw `code ${code} existed`;
      }

      localStorage.setItem('urls', JSON.stringify(newUrls));
      return newUrls;
    },

    deleteUrl: (urls, action) => {
      const [code] = action.payload;
      const deletedUrls = urls.filter((u) => u.code !== code);
      localStorage.setItem('urls', JSON.stringify(deletedUrls));
      return deletedUrls;
    },

    updateUrl: (urls, action) => {
      const [oldCode, { url, code }] = action.payload;
      const idx = urls.findIndex((u) => u.code === oldCode);

      if (idx < 0) {
        throw `code ${oldCode} not found`;
      }

      const newUrls = [
        ...urls.slice(0, idx),
        { url, code },
        ...urls.slice(idx + 1),
      ];

      localStorage.setItem('urls', JSON.stringify(newUrls));
      return newUrls;
    },

    deleteAllUrls: () => {
      localStorage.removeItem('urls');
      return [];
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: null,
  reducers: {
    filterDelete: (_filter, _action) => {
      return null;
    },
    filterByUrl: (_filter, action) => {
      const [url] = action.payload;
      return { url };
    },
    filterByCode: (_filter, action) => {
      const [code] = action.payload;
      return { code };
    },
    filterByBoth: (_filter, action) => {
      const [both] = action.payload;
      return { both };
    },
    filterSortCode: (_filter, action) => {
      const [asc = true] = action.payload;
      return { sort: 'code', asc };
    },
    filterSortUrl: (_filter, action) => {
      const [asc = true] = action.payload;
      return { sort: 'url', asc };
    },
  },
});

const store = configureStore({
  reducer: {
    urls: urlSlice.reducer,
    filter: filterSlice.reducer,
  },
});

const selectFilteredUrls = createSelector(
  (state) => state.urls,
  (state) => state.filter,
  (urls, filter) => {
    if (filter === null) return urls;

    let filteredUrls = urls;
    if (filter.url) {
      filteredUrls = urls.filter((u) =>
        new RegExp(filter.url, 'i').test(u.url)
      );
    } else if (filter.code) {
      filteredUrls = urls.filter((u) =>
        new RegExp(filter.code, 'i').test(u.code)
      );
    } else if (filter.both) {
      filteredUrls = urls.filter(
        (u) =>
          new RegExp(filter.url, 'i').test(u.url) ||
          new RegExp(filter.code, 'i').test(u.code)
      );
    }

    if (filter.sort) {
      const sign = filter.asc ? 1 : -1;
      const copyArr = [...filteredUrls];
      filteredUrls = copyArr.sort((a, b) => {
        return a[filter.sort] > b[filter.sort] ? sign : -sign;
      });
    }

    return filteredUrls;
  }
);

export const useStore = () => {
  const actions = {};
  for (let action in urlSlice.actions) {
    actions[action] = (...payload) =>
      store.dispatch(urlSlice.actions[action](payload));
  }
  for (let action in filterSlice.actions) {
    actions[action] = (...payload) =>
      store.dispatch(filterSlice.actions[action](payload));
  }

  const states = useSelector((state) => state);
  const filteredUrls = useSelector(selectFilteredUrls);

  return { ...states, filteredUrls, ...actions };
};

export default store;
