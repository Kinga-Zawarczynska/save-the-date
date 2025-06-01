'use client';

import React, { useState } from 'react';
import Button from './button';

function Details() {
  const [openDetails, setOpenDetails] = useState(false);
  const toggleDetails = () => {
    setOpenDetails(!openDetails);
  };
  return (
    <div>
      {openDetails && (
        <div className="flex flex-col items-center justify-center gap-4 text-center p-6 ">
          <p>Kochani Goście</p>
          <span>
            z radością zapraszamy na wesele, jednak z uwagi na charakter imprezy
            zdecydowaliśmy się zorganizować ją wyłącznie dla dorołych gości.
          </span>
          <span>
            W pozostałych zakładkach znajdziecie wszystkie niezbędne informacje
            dotyczące naszego ślubu i wesela.
          </span>
          <span>
            Będzie nam bardzo miło, jeżeli zamiast kwiatów obdarujecie nas
            butelką dobrego trunku bądź kuponem lotto.
          </span>
          <span></span>
        </div>
      )}
      <Button onClick={toggleDetails}>
        {openDetails ? 'Zamknij szczegóły' : 'Kilka słów od nas'}
      </Button>
    </div>
  );
}

export default Details;
