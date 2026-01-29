import React, { useMemo, useState } from "react";
import products from "./data/products.json";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("default");

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ["all", ...Array.from(set)];
  }, []);

  const types = useMemo(() => {
    const set = new Set(products.map((p) => p.type).filter(Boolean));
    return ["all", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let list = Array.isArray(products) ? products.slice() : [];

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (type !== "all") {
      list = list.filter((p) => p.type === type);
    }

    if (sort === "price-asc") {
      list.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sort === "price-desc") {
      list.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return list;
  }, [category, type, sort]);

  return (
    <main>
      <header>
        <h1>Product Listing</h1>

        <form className="controls" onSubmit={(e) => e.preventDefault()} aria-label="Product filters">
          <label>
            Category
            <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category">
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label>
            Type
            <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filter by type">
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label>
            Sort
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by price">
              <option value="default">Default</option>
              <option value="price-asc">Price: low → high</option>
              <option value="price-desc">Price: high → low</option>
            </select>
          </label>

          <button type="button" onClick={() => { setCategory("all"); setType("all"); setSort("default"); }} aria-label="Clear filters">
            Clear
          </button>
        </form>
      </header>

      <ProductGrid products={filtered} />
    </main>
  );
}
