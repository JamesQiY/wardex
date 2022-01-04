import React, {useState, useEffect} from 'react';

const LoadingSpin = () => {
  const [msg, setmsg] = useState("loading")
  useEffect(() => {
    const timer = setTimeout(() => {
      setmsg('Timed out; Server/connection issue')
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-auto p-2
    text-white bg-gray-700 rounded-md shadow-sm">
      {msg === 'loading'?<div className="animate-spin rounded-full h-12 w-12 border-b-4 border-white m-2"></div>: <></>}
      {msg}
      <div>{'server might be waking up right now ...zzz'}</div>
    </div>
  )
}

export default LoadingSpin;