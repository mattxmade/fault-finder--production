import { nanoid } from "nanoid";
import React, { Fragment, useRef } from "react";

import { FaultItem } from "./types";

import useTheme from "./hooks/useTheme";
import useSearch from "./hooks/useSearch";
import ToggleSwitch from "./components/ToggleSwitch";
import BackgroundSvg from "./components/svg/BackgroundSvg";

import "./App.scss";
import toggleFixedLayout from "./utils/toggleFixedLayout";

const App = () => {
  const { theme, onToggleTheme } = useTheme();
  const { query, results, onInputChange, onFormSubmit } = useSearch();

  const scrollY = useRef(0);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleDialog = () => {
    if (!dialogRef.current) return;

    if (!dialogRef.current.open) {
      dialogRef.current.showModal();

      scrollY.current = window.scrollY;
      toggleFixedLayout(true, scrollY.current);
      return;
    }

    dialogRef.current.close();
    toggleFixedLayout(false, scrollY.current);
  };

  return (
    <Fragment>
      <dialog ref={dialogRef} onClick={handleDialog}>
        <div>
          <img src="/favicon.ico" width={28} height={28} />
          <h2 className={`theme${theme}`}>Fault Finder</h2>

          <p style={{ fontSize: "1.4rem" }}>© {new Date().getFullYear()}</p>
        </div>
      </dialog>

      <div className={`page theme${theme}`}>
        <div className="svg-background">
          <BackgroundSvg />
        </div>

        <header className={`theme${theme}`}>
          <h1 className={`theme${theme}`}>
            <i className="fa-solid fa-fire-burner" /> Fault Finder
          </h1>

          <section
            style={{ display: "flex", gap: "0.5rem", width: "fit-content" }}
          >
            <ToggleSwitch
              callback={onToggleTheme}
              aria-label="Light/Dark Theme"
            >
              <i
                className={`fa-solid ${
                  theme === "--light" ? "fa-sun" : "fa-moon"
                }`}
              />
            </ToggleSwitch>

            <button aria-label="Website info" onClick={handleDialog}>
              <i className={`fa fa-solid fa-circle-info icon${theme}`} />
            </button>
          </section>
        </header>
        <main>
          <form className={`theme${theme}`} onSubmit={onFormSubmit}>
            <label htmlFor="search-input" className={`theme${theme}`}>
              Fault Search
              <input
                name="search-input"
                value={query}
                onChange={onInputChange}
                placeholder={
                  query ? undefined : "Enter a fault code or manufacturer"
                }
              />
            </label>
          </form>

          <section className="search-results">
            {query && results.length ? (
              <p style={{ fontWeight: "bold" }}>
                {results.length === 1
                  ? "Exact match found"
                  : `${results.length} results found`}
              </p>
            ) : null}

            {query && results.length ? (
              results.map((result: FaultItem, i) => (
                <ul key={nanoid()} className="fault-card">
                  <li className="fault-card__item">
                    <div className={`fault-card__item--brand theme${theme}`}>
                      <span className="tag">
                        <i
                          className="fa-solid fa-shield"
                          role="img"
                          aria-label="Boiler Brand"
                        />
                        Brand
                      </span>
                      <h2 className={`theme${theme}`}>{result.brand}</h2>
                    </div>
                  </li>
                  <li className="fault-card__item">
                    <div className={`fault-card__item--code theme${theme}`}>
                      <span className="tag">
                        <i
                          className="fa-solid fa-triangle-exclamation"
                          role="img"
                          aria-label="Fault Code"
                        />
                        Fault Code
                      </span>
                      <p>{result.faultCode}</p>
                    </div>

                    {result.faultCause ? (
                      <div className={`fault-card__item--cause theme${theme}`}>
                        <span className="tag">
                          <i
                            className="fa-solid fa-screwdriver-wrench"
                            role="img"
                            aria-label="Fault Cause"
                          />
                          Fault Cause
                        </span>

                        <ul style={{ display: "grid" }}>
                          {result.faultCause.split("\n").map((faultCause) => (
                            <li key={faultCause}>
                              <p>{faultCause}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {result.faultCheck ? (
                      <div
                        className={`fault-card__item--details theme${theme}`}
                      >
                        <span className="tag">
                          <i
                            className="fa-solid fa-circle-info"
                            role="img"
                            aria-label="Fault Details"
                          />
                          Fault Details
                        </span>
                        <p>{result.faultCheck}</p>
                      </div>
                    ) : null}
                  </li>
                  <li className="fault-card__item">
                    <div className={`fault-card__item--model theme${theme}`}>
                      <span className="tag">
                        <i
                          className="fa-solid fa-layer-group"
                          role="img"
                          aria-label="Boiler Model"
                        />
                        Model(s)
                      </span>
                      <p>{result.model}</p>
                    </div>
                  </li>
                </ul>
              ))
            ) : query && !results.length ? (
              <p style={{ justifySelf: "center" }}>No results</p>
            ) : null}
          </section>
        </main>

        <footer></footer>
      </div>
    </Fragment>
  );
};

export default App;
