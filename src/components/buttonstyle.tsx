import React from "react";

interface Props {
  name: string;
}

export const LoginButton: React.FC<Props> = ({ name }) => {
  return (
    <a className="inline-block px-8 py-2 text-base font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
      {name}
    </a>
  );
};
export const LoginGuestButton: React.FC<Props> = ({ name }) => {
  return (
    <a className="inline-block px-8 py-2 text-base font-medium text-grey-700 bg-white border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
    {name}
    </a>
  )
}