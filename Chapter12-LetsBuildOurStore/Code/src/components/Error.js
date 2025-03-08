import { Link, useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="h-120 flex flex-col items-center justify-center">
      <h1 className="text-9xl font-extrabold my-3">Oops!</h1>
      <h2 className="text-2xl font-bold my-4">{err.status} : PAGE {err.statusText}</h2>
      <p>The page you are looking for might have been removed</p>
      <p>had it's name changed or is temporarily unavailable.</p>
      <button className="w-50 h-12 my-5 font-medium shadow-2xl bg-blue-800 text-sm px-4 py-2.5 rounded-full text-white" type='button'><Link to='/'>GO TO HOMEPAGE</Link></button>
    </div>
  )
};

export default Error;