export default function ProductGrid({ products }) {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <section aria-live="polite" className="empty-state">
        <p>No products match your filters.</p>
      </section>
    );
  }

  return (
    <section>
      <p aria-hidden="true">{products.length} products available.</p>

      <ul className="grid" role="list">
        {products.map((product) => {
          const id = product?.id || product?.name || Math.random().toString(36).slice(2);
          const name = product?.name || "Untitled product";
          const price = typeof product?.price === "number" ? `$${product.price.toFixed(2)}` : "Price unavailable";
          return (
            <li key={id} className="card" tabIndex={0} role="listitem" aria-label={name}>
              <h2>{name}</h2>
              <p>{price}</p>

              {product?.badge ? (
                <span className="badge" aria-hidden="false">{product.badge}</span>
              ) : null}

              {product?.inStock === false ? (
                <p className="out-of-stock">Out of stock</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
