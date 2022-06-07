import { useState } from 'react';
import { useStore } from '../store';

const NewUrlForm = ({ className }) => {
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [err, setErr] = useState(null);

  const { addUrl } = useStore();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setErr(null);
      await addUrl(url, code);
    } catch (e) {
      setErr(e.toString());
    }
  };

  return (
    <div className={'new-url-form w-full ' + className}>
      <form
        className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="URL"
          >
            Long URL to short
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="URL"
            type="text"
            placeholder="Enter URL"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="code"
          >
            Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="code"
            type="text"
            placeholder="Enter code"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          {err ? <p className="text-red-500 text-xs italic">{err}</p> : ''}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Shorten URL
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUrlForm;
