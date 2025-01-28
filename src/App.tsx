import { useRef, useState } from 'react';
import './App.css';
import CistercianNumeral from './components/CistericalNumbers';
import DownloadIcon from './assets/svg/download.svg'
import { downloadSVGAsImage } from './helpers/downloadSVGAsImage';
function App() {
  const [number, setNumber] = useState<number>(1);
  const svgRef = useRef(null)

  const handleChange = (event:any) => {
    const { value, min, max } = event.target;
    const num = Math.max(min, Math.min(max, value % (+max + 1)));
    setNumber(num);
  };

  const downloadSVG = () => {
    if (svgRef.current === null) return;
    downloadSVGAsImage(svgRef.current, `${number}.png`)
  
  };


  return (
    <div className="container">
      <header>
        <h1  className='flex'>Runes</h1>
          <h3>Convert number to their runic representation</h3>
          <div className='inputContainer'>
          <label>
            Enter a number (1-9999):
            <input
              type="number"
              name="number"
              id="number"
              min="0"
              max="9999"
              value={number}
              onChange={handleChange}
              />
          </label>
          
          <button onClick={downloadSVG}><img src={DownloadIcon}></img></button>
        </div>
      </header>
      <svg ref={svgRef} viewBox="-1.5 -1 3 5" >
        <style>
          {`
          polyline {
            fill: none;
            stroke: black;
            stroke-width: 0.25;
            stroke-linecap: round;
            stroke-linejoin: round;
          }`}
        </style>
          <CistercianNumeral number={number} />
        </svg>
    </div>
  );
}

export default App;


