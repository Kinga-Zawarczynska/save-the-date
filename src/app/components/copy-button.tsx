import React, { useState } from 'react';
import { GoCopy } from 'react-icons/go';
import { FaRegCheckSquare } from 'react-icons/fa';

function CopyButton({
  label,
  copyValue,
}: {
  label: string;
  copyValue: string;
}) {
  const [addressCopied, setAddressCopied] = useState(false);
  const handleCopy = () => {
    if (addressCopied) return;
    navigator.clipboard
      .writeText(copyValue)
      .then(() => {
        setAddressCopied(true);
      })
      .catch((err) => {
        console.error('Nie udało się skopiować: ', err);
      });
  };

  return (
    <button
      className={`w-full border-none rounded-md placeholder-gray-200 placeholder:font-bold bg-transparent text-white p-2 outline-none flex items-center justify-center hover:text-red-300 transition-colors ${addressCopied ? 'hover:cursor-disabled' : 'hover:cursor-pointer'}`}
      onClick={handleCopy}
    >
      {addressCopied ? (
        <><span className="ml-2 text-red-300">Adres skopiowany! Wklej go do swojej nawigacji. </span> <FaRegCheckSquare className="ml-3 text-red-300" /></>
      ) : <><span className="ml-2">{label} </span><GoCopy className="ml-3" /></>}
    </button>
  );
}

export default CopyButton;
