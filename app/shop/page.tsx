import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import { ShopFilter } from "./shop-filter";

const products = [
  ["The 2026 Astro Planner", "\u20ac49,95", "astro-planner-original.jpg"],
  ["Washi Tape Bundle", "\u20ac13,95", "washi-tape-original.jpg"],
  ["Zodiac Mugs", "\u20ac12,95", "zodiac-mugs-original.jpg"],
  ['"I Blame the Astrology" Cap', "\u20ac26,95", "astrology-cap-original.jpg"],
  ["The Digital 2026 Astro Planner", "\u20ac31,95", "digital-planner-original.png"],
  ["The 2026 AstroCal", "\u20ac8,95", "astrocal-original.png"],
  [
    "You Were Born For This: Astrology for Radical Self-Acceptance",
    "\u20ac18,95",
    "born-for-this-original.jpg",
  ],
  ["The Deck of Plenty", "\u20ac58,95", "deck-plenty-original.jpg"],
  ["Planetary Salts", "\u20ac41,95", "planetary-salts-original.jpg"],
  ["Planetary Candles", "\u20ac44,95", "planetary-candles-original.png"],
];

export default function ShopPage() {
  return (
    <section className={styles.page}>
      <main className={styles.catalog}>
        <ShopFilter />

        <section className={styles.productGrid} aria-label="Products">
          {products.map(([title, price, image]) => (
            <article className={styles.productCard} key={title}>
              <Link href="#" className={styles.productPhoto}>
                <Image
                  src={`/chani-shop/${image}`}
                  alt={title}
                  fill
                  sizes="(max-width: 700px) 86vw, 410px"
                />
              </Link>

              <div className={styles.productMeta}>
                <h2>
                  <Link href="#">{title}</Link>
                </h2>
                <p>{price}</p>
              </div>

              <div className={styles.actions}>
                <button type="button">Add to cart</button>
                <Link href="#">Learn more</Link>
              </div>
            </article>
          ))}
        </section>

        <nav className={styles.pagination} aria-label="Pagination">
          <Link href="#" aria-label="Previous page">
            {"\u2039"}
          </Link>
          <span>1</span>
          <Link href="#">2</Link>
          <Link href="#">3</Link>
          <span>...</span>
          <Link href="#">7</Link>
          <Link href="#" aria-label="Next page">
            {"\u203a"}
          </Link>
        </nav>
      </main>
    </section>
  );
}
