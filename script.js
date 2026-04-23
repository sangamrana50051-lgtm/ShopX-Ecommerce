// ===================== PRODUCT DATA =====================
const products = [
  {
    id: "m1", name: "Urban Comfort Polo T-Shirt", category: "Men",
    price: 799, originalPrice: 1499,
    description: "A classic polo t-shirt crafted from premium breathable cotton. Perfect for casual outings, Sunday brunches, or office casuals. Features a ribbed collar and relaxed fit that flatters every body type.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80",
    rating: 4.5, reviews: 2341, badge: "Bestseller", badgeClass: "badge-pink"
  },
  {
    id: "m2", name: "SlimFit Dark Wash Jeans", category: "Men",
    price: 1299, originalPrice: 2499,
    description: "Contemporary slim-fit jeans in rich indigo dark wash. Crafted from stretch denim for all-day comfort without sacrificing style. Pair with a casual tee or dress it up with a blazer.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    rating: 4.3, reviews: 1876, badge: "46% OFF", badgeClass: "badge-green"
  },
  {
    id: "m3", name: "Flex Sports Running Shoes", category: "Men",
    price: 1899, originalPrice: 3499,
    description: "High-performance running shoes with responsive cushioning and breathable mesh upper. Lightweight sole delivers energy return with every stride. Ideal for runners and fitness enthusiasts.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    rating: 4.7, reviews: 3120, badge: "New Arrival", badgeClass: "badge-orange"
  },
  {
    id: "m4", name: "Linen Casual Shirt", category: "Men",
    price: 999, originalPrice: 1799,
    description: "Breezy linen shirt perfect for summer days. A relaxed fit with a spread collar and button-down placket. Available in warm neutral palette that transitions effortlessly from beach to bar.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    rating: 4.2, reviews: 987, badge: null
  },
  {
    id: "w1", name: "Floral Wrap Midi Dress", category: "Women",
    price: 1199, originalPrice: 2199,
    description: "An elegant wrap midi dress featuring a vibrant floral print on a fluid fabric. The adjustable waist tie creates a flattering silhouette. Wear it to brunches, garden parties, or evening outings.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    rating: 4.6, reviews: 2890, badge: "Trending", badgeClass: "badge-pink"
  },
  {
    id: "w2", name: "High-Rise Skinny Jeans", category: "Women",
    price: 1099, originalPrice: 1999,
    description: "Ultra-flattering high-rise skinny jeans with four-way stretch fabric. The contoured waistband and sculpting panels deliver a smooth, figure-hugging fit you'll wear again and again.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    rating: 4.4, reviews: 1654, badge: "45% OFF", badgeClass: "badge-green"
  },
  {
    id: "w3", name: "Embroidered Cotton Kurti", category: "Women",
    price: 699, originalPrice: 1299,
    description: "Beautifully handcrafted kurti featuring delicate floral embroidery on premium cotton fabric. A timeless Indian ethnic piece that pairs well with palazzos, jeans, or leggings.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    rating: 4.5, reviews: 3210, badge: "Bestseller", badgeClass: "badge-pink"
  },
  {
    id: "w4", name: "Distressed Denim Jacket", category: "Women",
    price: 1599, originalPrice: 2799,
    description: "A wardrobe staple — classic denim jacket with distressed detailing for effortless edge. Layer over dresses, pair with jeans for a double-denim look, or throw over a hoodie.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    rating: 4.3, reviews: 1120, badge: null
  },
  {
    id: "k1", name: "Cartoon Print Hoodie", category: "Kids",
    price: 599, originalPrice: 999,
    description: "Super-soft fleece hoodie featuring a fun cartoon character print that kids absolutely love. Machine washable and made with child-safe dyes. Perfect for cool evenings and weekend adventures.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80",
    rating: 4.8, reviews: 876, badge: "Kids Fav", badgeClass: "badge-orange"
  },
  {
    id: "k2", name: "Adventure School Backpack", category: "Kids",
    price: 799, originalPrice: 1299,
    description: "Spacious and durable school backpack with multiple compartments. Ergonomic padded shoulder straps, water-resistant fabric, and a fun design kids will be proud to carry.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    rating: 4.6, reviews: 1430, badge: "38% OFF", badgeClass: "badge-green"
  },
  {
    id: "k3", name: "Velcro Sport Sneakers", category: "Kids",
    price: 899, originalPrice: 1499,
    description: "Lightweight sport sneakers with easy-on velcro straps — perfect for active kids. Anti-slip rubber sole provides stability, while the breathable upper keeps little feet comfortable all day.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?w=600&q=80",
    rating: 4.5, reviews: 654, badge: null
  },
  {
    id: "k4", name: "Sunny Day Frock", category: "Kids",
    price: 499, originalPrice: 899,
    description: "A delightful summer frock in a cheerful print that little girls will adore. Made from soft, breathable cotton to keep them cool on warm days. Features flutter sleeves and elastic waist.",
    sizes: ["S","M","L","XL"],
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80",
    rating: 4.7, reviews: 521, badge: "New Arrival", badgeClass: "badge-orange"
  }
];

// ===================== LOCALSTORAGE HELPERS =====================
function getCart() {
  try { return JSON.parse(localStorage.getItem('shopx_cart') || '[]'); }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('shopx_cart', JSON.stringify(cart));
}
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('shopx_wishlist') || '[]'); }
  catch { return []; }
}
function saveWishlist(list) {
  localStorage.setItem('shopx_wishlist', JSON.stringify(list));
}
function getUser() {
  try { return JSON.parse(localStorage.getItem('shopx_user') || 'null'); }
  catch { return null; }
}
function saveUser(user) {
  if (user) localStorage.setItem('shopx_user', JSON.stringify(user));
  else localStorage.removeItem('shopx_user');
}

// ===================== CART FUNCTIONS =====================
function addToCart(productId, size = 'M', qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, size, qty });
  }
  saveCart(cart);
  updateCartBadge();
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
  updateCartBadge();
}

function updateQty(productId, size, qty) {
  if (qty <= 0) { removeFromCart(productId, size); return; }
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (item) item.qty = qty;
  saveCart(cart);
  updateCartBadge();
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.qty, 0);
}

// ===================== WISHLIST FUNCTIONS =====================
function toggleWishlist(productId) {
  let list = getWishlist();
  const idx = list.indexOf(productId);
  if (idx === -1) {
    list.push(productId);
    showToast('Added to wishlist!', 'success');
  } else {
    list.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
  }
  saveWishlist(list);
  updateWishlistBadge();
  return list.includes(productId);
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

// ===================== BADGE UPDATES =====================
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function updateWishlistBadge() {
  const count = getWishlist().length;
  document.querySelectorAll('.wishlist-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function updateNavUser() {
  const user = getUser();
  const loginBtn = document.querySelector('.nav-login-btn');
  const userBtn = document.querySelector('.nav-user-btn');
  if (!loginBtn) return;
  if (user) {
    loginBtn.style.display = 'none';
    if (userBtn) {
      userBtn.style.display = 'flex';
      userBtn.title = `Hi, ${user.name} — click to logout`;
    }
  } else {
    loginBtn.style.display = 'flex';
    if (userBtn) userBtn.style.display = 'none';
  }
}

// ===================== TOAST =====================
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===================== PRODUCT CARD HTML =====================
function getDiscount(p) {
  return Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
}

function productCardHTML(product, showOverlay = true) {
  const discount = getDiscount(product);
  const badgeHtml = product.badge
    ? `<span class="product-badge ${product.badgeClass}">${product.badge}</span>`
    : `<span class="product-badge badge-green">${discount}% OFF</span>`;
  const wishlisted = isInWishlist(product.id);

  return `
    <div class="product-card" onclick="goToProduct('${product.id}')">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHtml}
        <button class="wishlist-btn ${wishlisted ? 'wishlisted' : ''}"
          onclick="handleWishlist(event,'${product.id}')" title="Wishlist">
          ${wishlisted ? '❤️' : '🤍'}
        </button>
        ${showOverlay ? `
        <div class="product-overlay">
          <button class="add-cart-btn" onclick="handleAddCart(event,'${product.id}')">
            🛒 Add to Cart
          </button>
          <button class="view-btn" onclick="goToProduct('${product.id}')">👁</button>
        </div>` : ''}
      </div>
      <div class="product-info">
        <p class="product-cat">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="rating-row">
          <span class="rating-badge">⭐ ${product.rating}</span>
          <span class="rating-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="price-row">
          <span class="price-now">₹${product.price.toLocaleString()}</span>
          <span class="price-old">₹${product.originalPrice.toLocaleString()}</span>
          <span class="price-off">${discount}% off</span>
        </div>
      </div>
    </div>
  `;
}

// ===================== NAV INIT =====================
function initNav() {
  updateCartBadge();
  updateWishlistBadge();
  updateNavUser();
}

function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function handleWishlist(e, productId) {
  e.stopPropagation();
  const isNow = toggleWishlist(productId);
  const btn = e.currentTarget;
  btn.innerHTML = isNow ? '❤️' : '🤍';
  btn.classList.toggle('wishlisted', isNow);
}

function handleAddCart(e, productId) {
  e.stopPropagation();
  addToCart(productId);
  showToast('Added to cart!', 'success');
  updateCartBadge();
}

function logout() {
  saveUser(null);
  showToast('Logged out successfully', 'info');
  setTimeout(() => window.location.href = 'index.html', 800);
}

// Initialize on every page
window.addEventListener('DOMContentLoaded', initNav);
