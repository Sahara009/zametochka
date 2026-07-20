"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import shopLatestSprite from "@/components/assets/shop-latest-sprite.png";
import { Container } from "@/components/shared/container";
import { Title } from "./title";

const filterStickers = [
  { id: "notebooks", group: "Category", label: "Planners", slug: "planners", icon: "book", color: "#f1967b", rotate: -2 },
  { id: "kraft", group: "Paper", label: "Kraft", slug: "kraft", icon: "paper", color: "#d7a24f", rotate: 2 },
  { id: "a5", group: "Size", label: "A5", slug: "a5", icon: "ruler", color: "#80a6d9", rotate: -1 },
  { id: "dots", group: "Ruling", label: "Dots", slug: "dots", icon: "dots", color: "#e8d6bd", rotate: 1 },
  { id: "leather", group: "Cover", label: "Leather", slug: "leather", icon: "swatch", color: "#b7734b", rotate: 3 },
  { id: "green", group: "Color", label: "Green", slug: "green", icon: "circle", color: "#7fa66a", rotate: -2 },
  { id: "travel", group: "Theme", label: "Travel", slug: "travel", icon: "balloon", color: "#f0a05d", rotate: -3 },
  { id: "stock", group: "Stock", label: "In stock", slug: "in-stock", icon: "leaf", color: "#7ebc7a", rotate: 2 },
];

const products = [
  { name: "Green Journey", description: "Leather notebook", price: "2490 rub", position: "0% 0%", matches: ["notebooks", "leather", "green", "travel"] },
  { name: "Travel Notes", description: "Kraft notebook", price: "1890 rub", position: "100% 0%", matches: ["notebooks", "kraft", "a5"] },
  { name: "Classic Greens", description: "Travel journal", price: "2190 rub", position: "0% 100%", matches: ["notebooks", "dots", "green", "stock"] },
  { name: "Green Explorer", description: "Elastic planner", price: "2890 rub", position: "100% 100%", matches: ["notebooks", "leather", "green", "stock"] },
  { name: "Tiny Atlas", description: "Pocket notebook", price: "1290 rub", position: "0% 0%", matches: ["notebooks", "a5", "travel", "stock"] },
  { name: "Olive Dots", description: "Dotted journal", price: "1690 rub", position: "100% 100%", matches: ["notebooks", "dots", "green", "kraft"] },
];

function StickerIcon({
  icon,
  color,
}: {
  icon: string;
  color: string;
}) {
  if (icon === "dots") {
    return <span className="finder-sticker-icon is-dots" aria-hidden="true" />;
  }

  if (icon === "circle") {
    return (
      <span
        className="finder-sticker-icon is-circle"
        style={{ "--sticker-color": color } as CSSProperties}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={`finder-sticker-icon is-${icon}`}
      style={{ "--sticker-color": color } as CSSProperties}
      aria-hidden="true"
    />
  );
}

export function CategoryOrbitSection() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "notebooks",
    "green",
    "leather",
  ]);

  const selectedFilters = useMemo(
    () =>
      selectedIds
        .map((id) => filterStickers.find((sticker) => sticker.id === id))
        .filter(Boolean),
    [selectedIds],
  );

  const matchedProducts = useMemo(() => {
    if (selectedIds.length === 0) {
      return products;
    }

    return products
      .map((product) => ({
        ...product,
        score: product.matches.filter((match) => selectedIds.includes(match)).length,
      }))
      .filter((product) => product.score > 0)
      .sort((first, second) => second.score - first.score);
  }, [selectedIds]);

  const path = selectedFilters.length
    ? `/${selectedFilters.map((filter) => filter?.slug).join("/")}`
    : "/catalog";

  const toggleFilter = (stickerId: string) => {
    setSelectedIds((current) =>
      current.includes(stickerId)
        ? current.filter((id) => id !== stickerId)
        : [...current, stickerId],
    );
  };

  return (
    <section className="shop-categories finder-sticker-section bg-[#f6efe2] py-10 text-neutral-950 sm:py-14 lg:py-16">
      <Container>
        <div className="shop-categories-head">
          <Title as="h2" size="md" className="shop-categories-title">
            sticker web
          </Title>
        </div>

        <div className="finder-sticker-lab is-route-mode">
          <aside className="finder-sticker-stack" aria-label="Filters">
            <div className="finder-stack-heading">
              <span>filters</span>
            </div>

            <div className="finder-stack-grid">
              {filterStickers.map((sticker) => (
                <button
                  key={sticker.id}
                  type="button"
                  className="finder-sticker-card"
                  data-placed={selectedIds.includes(sticker.id)}
                  onClick={() => toggleFilter(sticker.id)}
                  style={
                    {
                      "--sticker-color": sticker.color,
                      "--sticker-rotate": `${sticker.rotate}deg`,
                    } as CSSProperties
                  }
                >
                  <StickerIcon icon={sticker.icon} color={sticker.color} />
                  <span>
                    <small>{sticker.group}</small>
                    {sticker.label}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="finder-route-results">
            <div className="finder-route-bar" aria-label="Current selection path">
              <div>
                <span>location:</span>
                <strong>{path}</strong>
              </div>
              <button type="button" onClick={() => setSelectedIds([])}>
                clear x
              </button>
            </div>

            <div className="finder-products-head">
              <div>
                <strong>{matchedProducts.length}</strong>
                items
              </div>
            </div>

            <div className="finder-products-grid">
              {matchedProducts.map((product, index) => (
                <article
                  key={product.name}
                  className="finder-product-sticker"
                  style={{ "--product-delay": `${index * 80}ms` } as CSSProperties}
                >
                  <span
                    className="finder-product-photo"
                    style={
                      {
                        backgroundImage: `url(${shopLatestSprite.src})`,
                        backgroundPosition: product.position,
                      } as CSSProperties
                    }
                  />
                  <strong>{product.description}</strong>
                  <span>{product.name}</span>
                  <div>
                    <b>{product.price}</b>
                  </div>
                </article>
              ))}
            </div>

            <a href="#" className="finder-catalog-link">
              View more in catalog
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
