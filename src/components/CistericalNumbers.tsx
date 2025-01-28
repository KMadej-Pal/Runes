import React from 'react';

const POINTS = [
  '0,0 0,3',
  '0,0 1,0',
  '0,1 1,1',
  '0,0 1,1',
  '0,1 1,0',
  '0,0 1,0 0,1',
  '1,0 1,1',
  '0,0 1,0 1,1',
  '1,0 1,1 0,1',
  '0,0 1,0 1,1 0,1',
];

interface CistercianNumeralProps {
  number: number;
}

const CistercianNumeral: React.FC<CistercianNumeralProps> = ({ number }) => {

  const getDigits = (number:any) => number.toString().split('').reverse();

  return (
   <>

    <Digit value={0} />
             {getDigits(number).map((value:any, i:any) => (
               <Digit value={Number(value)} magnitude={i} key={i} />
              ))}
    </>
  );
};

export default CistercianNumeral;

interface DigitProps {
  value: number;
  magnitude?: number;
}

const Digit: React.FC<DigitProps> = ({ value, magnitude = 0 }) => {
  const getTransform = (): string => {
    switch (magnitude) {
      case 1:
        return 'scale(-1, 1)';
      case 2:
        return 'translate(0, 3) scale(1, -1)';
      case 3:
        return 'translate(0, 3) scale(-1, -1)';
      default:
        return '';
    }
  };

  return <polyline transform={getTransform()} points={POINTS[value]}></polyline>;
};

