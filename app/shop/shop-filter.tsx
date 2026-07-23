"use client";

import { useState } from "react";

import styles from "./page.module.css";

const availability = ["In stock", "Out of stock", "Survivor made", "Fan favorite"];
const sortOptions = [
  "Most relevant",
  "Featured",
  "Best selling",
  "Latest releases",
  "Price (low to high)",
  "Price (high to low)",
  "A - Z",
  "Z - A",
];

export function ShopFilter() {
  const [filterOpen, setFilterOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState("Featured");

  const toggleFilter = (value: string) => {
    setSelectedFilters((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  return (
    <aside className={styles.filterPaper} aria-label="Filter and sort">
      <div className={styles.filterPaperBg} aria-hidden="true" />

      <div className={styles.filterContent}>
        <button
          type="button"
          className={styles.filterHeading}
          aria-label="Filter"
          aria-expanded={filterOpen}
          onClick={() => setFilterOpen((open) => !open)}
        >
          <span>{filterOpen ? "-" : "+"}</span>
          Filter
        </button>

        {filterOpen ? (
          <div className={styles.filterList}>
            {availability.map((option) => {
              const active = selectedFilters.includes(option);

              return (
                <button
                  key={option}
                  type="button"
                  aria-label={option}
                  data-active={active}
                  onClick={() => toggleFilter(option)}
                >
                  <span>{active ? "*" : "\u2606"}</span>
                  {option}
                </button>
              );
            })}
          </div>
        ) : null}

        <button
          type="button"
          className={styles.filterHeading}
          aria-label="Sort by"
          aria-expanded={sortOpen}
          onClick={() => setSortOpen((open) => !open)}
        >
          <span>{sortOpen ? "-" : "+"}</span>
          Sort by
        </button>

        {sortOpen ? (
          <div className={styles.filterList}>
            {sortOptions.map((option) => {
              const active = selectedSort === option;

              return (
                <button
                  key={option}
                  type="button"
                  aria-label={option}
                  data-active={active}
                  onClick={() => setSelectedSort(option)}
                >
                  <span>{active ? "*" : "\u2606"}</span>
                  {option}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </aside>
  );
}
