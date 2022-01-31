import React from "react";
import styles from "./Cards.module.scss";

const Card = ({ results }) => {
  let display;
  if (results) {
    display = results.map((result) => {
      let { id, name, image, location, status } = result;
      return (
        <div className='col-4 mb-4 position-relative' key={id}>
          <div className={styles.cards}>
            <img className={`img-fluid ${styles.img}`} src={image} alt={name} />
            <div className={`${styles.content}`}>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last Location:</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            switch (status) {
              case "Dead":
                return (
                  <div
                    className={`badge bg-danger position-absolute ${styles.badge}`}>
                    {status}
                  </div>
                );

              case "Alive":
                return (
                  <div
                    className={`badge bg-success position-absolute ${styles.badge}`}>
                    {status}
                  </div>
                );

              default:
                return (
                  <div
                    className={`badge bg-warning position-absolute ${styles.badge}`}>
                    {status}
                  </div>
                );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characters Found :(";
  }

  return <>{display}</>;
};

export default Card;
