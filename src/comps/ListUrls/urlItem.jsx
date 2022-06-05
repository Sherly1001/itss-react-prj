const UrlItem = ({ no, url }) => {
  return (
    <div className="url-item">
      <div>{no}</div>
      <div>{url.url}</div>
      <div>{url.code}</div>
      <div>{'http://nourl.ga/' + url.code}</div>
      <div>{url.code}</div>
    </div>
  );
};

export default UrlItem;
