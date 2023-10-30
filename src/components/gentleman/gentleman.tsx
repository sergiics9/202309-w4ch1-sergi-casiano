import { GentlemanType } from '../../types/gentleman-type';
import { useState } from 'react';

type Props = {
  gentlemans: GentlemanType[];
};
export function Gentleman({ gentlemans }: Props) {
  const [gentlemansList, setGentlemansList] = useState(gentlemans);

  const handleClickSelect = (ev: any) => {};

  const handleClickDelete = (id: number) => {
    const updatedList = gentlemansList.filter(
      (gentleman) => gentleman.id !== id
    );
    setGentlemansList(updatedList);
  };

  return (
    <main className="main">
      <ul className="gentlemen">
        {gentlemansList.map((item) => (
          <li key={item.id} className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src={item.picture}
                alt={item.alternativeText}
              />
              <span className="gentleman__initial">
                {item.picture[0].toUpperCase()}
              </span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">{item.name}</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  {item.profession}
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span>{' '}
                  {item.status}
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{' '}
                  {item.twitter}
                </li>
              </ul>
            </div>
            <i
              role="button"
              className="icon gentleman__icon fas fa-check"
              onClick={handleClickSelect}
            ></i>
            <i
              role="button"
              className="icon gentleman__icon gentleman__icon--delete fas fa-times"
              onClick={() => handleClickDelete(item.id)}
            ></i>
          </li>
        ))}
      </ul>
    </main>
  );
}
