import React from 'react';

const Svg = () => {
  const svgCode = `<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#FFFFFF"></rect><path d="M0 139L21.5 143.8C43 148.7 86 158.3 128.8 151C171.7 143.7 214.3 119.3 257.2 132.5C300 145.7 343 196.3 385.8 219.8C428.7 243.3 471.3 239.7 514.2 215.2C557 190.7 600 145.3 642.8 142.7C685.7 140 728.3 180 771.2 197.3C814 214.7 857 209.3 878.5 206.7L900 204L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="#009473" stroke-linecap="round" stroke-linejoin="miter"></path></svg>`;

  return <div dangerouslySetInnerHTML={{ __html: svgCode }} />;
};

export default Svg;
