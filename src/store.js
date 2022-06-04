import { configureStore, createSlice } from '@reduxjs/toolkit';
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

const store = configureStore({
  reducer: {
    urls: urlSlice.reducer,
  },
});

export const useStore = () => {
  const actions = {};
  for (let action in urlSlice.actions) {
    actions[action] = (...payload) =>
      store.dispatch(urlSlice.actions[action](payload));
  }

  const states = useSelector((state) => state);
  return { ...states, ...actions };
};

export default store;
