import { nanoid } from "nanoid";
import React from "react";

import useTheme from "./hooks/useTheme";
import useSearch from "./hooks/useSearch";
import ToggleSwitch from "./components/ToggleSwitch";
import BackgroundSvg from "./components/svg/BackgroundSvg";

import "./App.scss";

const App = () => {
  const { theme, onToggleTheme } = useTheme();
  const { query, results, onInputChange, onFormSubmit } = useSearch();

  return (
    <div className={`page theme${theme}`}>
      <div className="svg-background">
        <BackgroundSvg />
      </div>

      <header className={`theme${theme}`}>
        <h1 className={`theme${theme}`}>
          <i className="fa-solid fa-fire-burner" /> Fault Finder
        </h1>
        <ToggleSwitch callback={onToggleTheme} aria-label="Light/Dark Theme">
          <i
            className={`fa-solid ${theme === "--light" ? "fa-sun" : "fa-moon"}`}
          />
        </ToggleSwitch>
      </header>
      <main>
        <form className={`theme${theme}`} onSubmit={onFormSubmit}>
          <label htmlFor="search-input" className={`theme${theme}`}>
            Fault Search
            <input
              name="search-input"
              onChange={onInputChange}
              placeholder="Enter a fault code, model or brand name"
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

                      <p>{result.faultCause}</p>
                    </div>
                  ) : null}

                  {result.faultCheck ? (
                    <div className={`fault-card__item--details theme${theme}`}>
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
  );
};

export default App;
