import React from 'react';
import Link from 'next/link';

export const Toolbar: React.FC = () => {

  return (
    <div className="toolbar" style={{ position: 'fixed', zIndex: 100, justifyContent: 'space-between', }}>
      <Link href="/" className="flex items-center">
        <img id="Robert's Senior Photo" src="/images/senior_photo.png" alt="Home" style={{ width: '26px', height: '20px'}}/>
        <h1 className="font-bold">&nbsp;&nbsp;Robert Luiten</h1>
      </Link>
      <div className="flex justify-end space-x-4">
        <Link href="/about"><h3 className="font-bold">About</h3></Link>
        <Link href="https://github.com/RobertLuiten"><h3 className="font-bold">Github</h3></Link>
      </div>
    </div>
  );
};

export default Toolbar;