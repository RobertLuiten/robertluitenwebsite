"use client"

import Toolbar from "../modules/Toolbar";

/** Fancy flawless homepage */
export default function Home() {
  return(
    <div className="min-h-screen pt-12 flex flex-col items-center text-green-500 bg-red-500 px-4">
    <Toolbar/>
    <h1 className="text-xl font-bold">Welcome to RobertLuiten.com.</h1>
    <p>Your one stop shop for all your Robert Luiten needs.</p>
    <br></br>
    <img id="Robert's Senior Photo" src="/images/senior_photo.png" alt="Home" style={{ width: '300px', height: '150px'}}/>
    <br></br>
    <button className="bg-yellow-200 text-black font-bold hover:bg-yellow-800 rounded-md">
      <a href="/about">Learn more about the international man of mystery!</a></button>
    <br></br>
    <button className="bg-red-200 text-black font-bold hover:bg-red-800 rounded-md">
      <a href="https://seaworld.com/">Win free tickets to Seaworld!</a></button>
    <br></br>
    <button className="bg-green-200 text-black font-bold hover:bg-green-800 rounded-md">
      <a href="https://venmo.com/code?user_id=3629676585027485697&created=1725908952">Give Robert money.</a></button>
    </div>
    
  );
}
