
function allProducts(){ return window.NUVAYLE_PRODUCTS || []; }
function formatPrice(n){return '$' + Number(n).toFixed(2)}
function productCard(p){
  const badge = p.badges && p.badges.length ? `<div class="badge">${p.badges[0]}</div>` : '';
  return `<article class="product-card" data-category="${p.category}">${badge}<a href="product.html?sku=${p.sku}" class="image-wrap"><img src="${p.image}" alt="${p.name} in ${p.shade}"></a><div class="product-info"><h3><a href="product.html?sku=${p.sku}">${p.name}</a></h3><p>${p.shade} · ${p.category}</p><div class="price">${formatPrice(p.price)}</div></div></article>`
}
function renderGrid(targetId, items){ const el=document.getElementById(targetId); if(el) el.innerHTML = items.map(productCard).join(''); }
function initProductFilters(){
  const links=[...document.querySelectorAll('[data-filter]')];
  links.forEach(link=>link.addEventListener('click',()=>{
    links.forEach(l=>l.classList.remove('active')); link.classList.add('active');
    const f=link.dataset.filter;
    const products = allProducts();
    renderGrid('collectionGrid', f==='All' ? products : products.filter(p=>p.category===f));
  }))
}
function initTabs(){
  const tabs=[...document.querySelectorAll('.tab')];
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active')); tab.classList.add('active');
    const f=tab.dataset.tab;
    const products = allProducts();
    const filtered = f==='All' ? products.slice(0,8) : products.filter(p=>p.category.includes(f)).slice(0,8);
    renderGrid('featuredGrid', filtered.length ? filtered : products.slice(0,8));
  }))
}
function initProductPage(){
  const wrap=document.getElementById('productPage'); if(!wrap) return;
  const products = allProducts();
  const params=new URLSearchParams(location.search); const sku=params.get('sku') || products[0]?.sku;
  const p=products.find(x=>x.sku===sku) || products[0];
  if(!p) return;
  document.title = p.name + ' | NUVAYLE';
  wrap.innerHTML = `<div class="product-gallery"><div class="product-main-img"><img src="${p.image}" alt="${p.name} ${p.shade}"></div></div><div class="detail-copy"><div class="eyebrow">${p.category}</div><h1>${p.name}</h1><p class="price">${formatPrice(p.price)}</p><p>${p.description}</p><div class="swatches"><span class="swatch" style="background:#d9d0c2"></span><span class="swatch" style="background:#e5bdae"></span><span class="swatch" style="background:#a8aa8d"></span><span class="swatch" style="background:#383431"></span><span class="swatch" style="background:#c7d0d1"></span></div><a class="btn" href="contact.html">Request Quote</a><a class="btn light" href="products.html" style="margin-left:8px">Back to shop</a><div class="accordion"><details open><summary>Fabric & feel</summary><p>Soft drape, refined edge finish, lightweight comfort, and carefully balanced opacity for daily modest styling.</p></details><details><summary>Wholesale support</summary><p>NUVAYLE supports sample orders, private label packaging, custom colors, and flexible MOQ for retailers and e-commerce sellers.</p></details><details><summary>Care</summary><p>Hand wash cold or gentle machine wash in a laundry bag. Lay flat or hang to dry. Steam on low heat if needed.</p></details></div></div>`;
}
async function loadProducts(){
  if(!window.NUVAYLE_PRODUCTS){
    try{ const r=await fetch('data/products.json'); window.NUVAYLE_PRODUCTS=await r.json(); } catch(e){ window.NUVAYLE_PRODUCTS=[]; }
  }
  window.NUVAYLE_PRODUCTS=window.NUVAYLE_PRODUCTS || [];
  renderGrid('featuredGrid', window.NUVAYLE_PRODUCTS.slice(0,8));
  renderGrid('collectionGrid', window.NUVAYLE_PRODUCTS);
  initTabs(); initProductFilters(); initProductPage();
}
document.addEventListener('DOMContentLoaded', loadProducts);
