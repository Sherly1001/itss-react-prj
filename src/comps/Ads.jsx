import { useEffect, useState } from 'react';

const imgUrls = [
  'https://images7.alphacoders.com/110/thumbbig-1105631.webp',
  'https://images5.alphacoders.com/109/thumbbig-1099191.webp',
  'https://images8.alphacoders.com/112/thumbbig-1129503.webp',
];

const Ads = ({ className }) => {
  const [currDisplay, setCurrDisplay] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let nextDisplay = (currDisplay + 1) % imgUrls.length;
      setCurrDisplay(nextDisplay);
    }, 3000);
  }, [currDisplay]);

  return (
    <div className={'ads ' + className}>
      <div>
        <div className="slideshow-container">
          {imgUrls.map((url, i) => (
            <div
              className={'mySlides fade' + (i === currDisplay ? ' active' : '')}
              key={i}
            >
              <div className="numbertext">
                {i + 1} / {imgUrls.length}
              </div>
              <img src={url} />
            </div>
          ))}
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          {imgUrls.map((_, i) => (
            <span
              className={'dot' + (i === currDisplay ? ' active' : '')}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ads;
