// ============================================================
//  app.js — RV Parks USA
//  Handles rendering, filtering, sorting, and state tabs
// ============================================================

const TYPE_BADGE = {
  "Federal / NPS":      '<span class="badge badge-fed">Federal / NPS</span>',
  "State Park":         '<span class="badge badge-state">State Park</span>',
  "Corps of Engineers": '<span class="badge badge-corps">Corps of Engineers</span>',
  "Private":            '<span class="badge badge-priv">Private</span>',
};

let activeState = "";
let largeMode   = false; // true = viewing the 100+ sites tab for activeState

const isLarge = p => p.sites >= 100;

// ---- Boot ----
document.addEventListener("DOMContentLoaded", () => {
  buildStateOptions();
  buildRegionOptions();
  buildStateTabs();
  applyFilters();
  updateHeroStats();
});

// ---- State options in sidebar select ----
function buildStateOptions() {
  const states = [...new Set(PARKS.map(p => p.state))].sort();
  const sel = document.getElementById("state-filter");
  states.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s; opt.textContent = s;
    sel.appendChild(opt);
  });
}

// ---- Region options (updated when state changes) ----
function buildRegionOptions(stateFilter = "") {
  const regions = [...new Set(
    PARKS
      .filter(p => !stateFilter || p.state === stateFilter)
      .map(p => p.region)
  )].sort();
  const sel = document.getElementById("region-filter");
  const cur = sel.value;
  sel.innerHTML = '<option value="">All regions</option>';
  regions.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r; opt.textContent = r;
    if (r === cur) opt.selected = true;
    sel.appendChild(opt);
  });
}

// ---- State quick-tabs ----
// Tabs pick the state only; the Site count dropdown independently picks small vs. 100+.
function buildStateTabs() {
  const states = [...new Set(PARKS.map(p => p.state))].sort();
  const wrap = document.getElementById("state-tabs");
  wrap.innerHTML = "";

  wrap.appendChild(makeTab("All states", "", activeState === ""));

  states.forEach(s => {
    const count = PARKS.filter(p => p.state === s && !isLarge(p)).length;
    wrap.appendChild(makeTab(`${s} (${count})`, s, activeState === s));
  });
}

function makeTab(label, value, isActive) {
  const btn = document.createElement("button");
  btn.className = "state-tab" + (isActive ? " active" : "");
  btn.textContent = label;
  btn.onclick = () => {
    activeState = value;
    document.getElementById("state-filter").value = value;
    buildRegionOptions(value);
    document.getElementById("region-filter").value = "";
    buildStateTabs();
    applyFilters();
  };
  return btn;
}

// ---- Slider display ----
function updateSiteSlider() {
  const val = document.getElementById("max-sites").value;
  document.getElementById("site-val").textContent = val == 99 ? "99" : val;
  applyFilters();
}

// ---- Toggle UI for the 100+ sites mode ----
function updateModeUI() {
  const sitesGroup = document.getElementById("max-sites-group");
  const banner = document.getElementById("mode-banner");
  if (largeMode) {
    sitesGroup.style.display = "none";
    banner.style.display = "block";
    banner.textContent = `Showing ${activeState || "all states'"} larger parks and resorts — 100+ sites.`;
  } else {
    sitesGroup.style.display = "";
    banner.style.display = "none";
  }
}

// ---- Main filter + render ----
function applyFilters() {
  const query   = document.getElementById("search").value.toLowerCase().trim();
  const stateF  = document.getElementById("state-filter").value;
  const typeF   = document.getElementById("type-filter").value;
  const regionF = document.getElementById("region-filter").value;
  const webF    = document.getElementById("website-filter").value; // "" = any, "no" = no website, "yes" = has website
  const sizeF   = document.getElementById("size-filter").value; // "" = under 100, "100+" = large
  const maxSites= parseInt(document.getElementById("max-sites").value, 10);
  const sortBy  = document.getElementById("sort-by").value;
  const ckFull  = document.getElementById("ck-full").checked;
  const ckElec  = document.getElementById("ck-electric").checked;
  const ckNone  = document.getElementById("ck-none").checked;

  // Sync state tab if sidebar select changed directly
  if (stateF !== activeState) {
    activeState = stateF;
    buildStateTabs();
    buildRegionOptions(stateF);
  }

  largeMode = sizeF === "100+";

  updateModeUI();

  let filtered = PARKS.filter(p => {
    if (stateF  && p.state  !== stateF)  return false;
    if (typeF   && p.type   !== typeF)   return false;
    if (regionF && p.region !== regionF) return false;
    if (webF === "no"  && p.web)  return false;
    if (webF === "yes" && !p.web) return false;
    if (largeMode) {
      if (!isLarge(p))                   return false;
    } else {
      if (isLarge(p))                    return false;
      if (p.sites > maxSites)            return false;
    }

    // Hookup filter (OR logic between checked boxes)
    if (ckFull || ckElec || ckNone) {
      const h = p.hookup.toLowerCase();
      const matchFull = ckFull && h.includes("full hookup");
      const matchElec = ckElec && (h.includes("electric") || h.includes("water")) && !h.includes("full hookup");
      const matchNone = ckNone && h.includes("no hookup");
      if (!matchFull && !matchElec && !matchNone) return false;
    }

    if (query) {
      const haystack = [p.name, p.city, p.county, p.state, p.region, ...p.tags].join(" ").toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    if (sortBy === "sites-asc")  return a.sites - b.sites;
    if (sortBy === "sites-desc") return b.sites - a.sites;
    if (sortBy === "state")      return a.state.localeCompare(b.state) || a.name.localeCompare(b.name);
    return a.name.localeCompare(b.name); // default: name A-Z
  });

  renderCards(filtered);
  updateResultsCount(filtered.length);
}

// ---- Render cards ----
function renderCards(parks) {
  const grid  = document.getElementById("cards-grid");
  const empty = document.getElementById("empty-state");

  if (parks.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  grid.innerHTML = parks.map(cardHTML).join("");
}

function cardHTML(p) {
  const badge  = TYPE_BADGE[p.type] || `<span class="badge badge-none">${p.type}</span>`;
  const tags   = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
  const webCell = p.web
    ? `<div class="card-web"><a href="https://${p.web}" target="_blank" rel="noopener">${domainLabel(p.web)}</a></div>`
    : `<div class="card-web"><span class="no-web">No website</span></div>`;
  const phoneCell = p.phone
    ? `<div class="card-phone"><a href="tel:${p.phone}">${p.phone}</a></div>`
    : `<div class="card-phone"><span class="no-web">Phone not listed</span></div>`;

  const addrCell = p.address
    ? `<div class="card-addr">${p.address}</div>`
    : "";
  const yearCell = p.year
    ? `<div class="card-year">Est. ${p.year}</div>`
    : "";

  return `
  <div class="park-card">
    <div class="card-top">
      <div class="card-name">${p.name}</div>
      <div class="card-sites">
        <div class="card-sites-num">${p.sites}</div>
        <div class="card-sites-label">SITES</div>
      </div>
    </div>
    <div class="card-loc">${p.city}, ${p.county} Co., ${p.state}</div>
    ${addrCell}
    ${yearCell}
    <div class="card-badges">${badge}<span class="badge badge-none">${p.region}</span></div>
    <div class="card-hookup"><strong>Hookups:</strong> ${p.hookup}</div>
    <div class="card-tags">${tags}</div>
    <div class="card-bottom">${phoneCell}${webCell}</div>
  </div>`;
}

function domainLabel(web) {
  try { return new URL("https://" + web).hostname.replace("www.", ""); }
  catch { return web.split("/")[0]; }
}

// ---- Results count ----
function updateResultsCount(n) {
  const total = PARKS.filter(p => largeMode ? isLarge(p) : !isLarge(p)).length;
  const label = largeMode ? "100+ site parks" : "parks";
  document.getElementById("results-count").textContent =
    n === total ? `All ${total} ${label}` : `${n} of ${total} ${label}`;
}

// ---- Hero stats ----
// Reflects the whole directory — both small (<100 site) and large (100+ site) parks.
function updateHeroStats() {
  const states = new Set(PARKS.map(p => p.state)).size;
  const noWeb  = PARKS.filter(p => !p.web).length;
  document.getElementById("hs-parks").textContent  = PARKS.length;
  document.getElementById("hs-states").textContent = states;
  document.getElementById("hs-noweb").textContent  = noWeb;
}

// ---- Reset ----
function resetFilters() {
  document.getElementById("search").value           = "";
  document.getElementById("state-filter").value     = "";
  document.getElementById("type-filter").value      = "";
  document.getElementById("region-filter").value    = "";
  document.getElementById("website-filter").value   = "";
  document.getElementById("size-filter").value      = "";
  document.getElementById("max-sites").value        = 99;
  document.getElementById("site-val").textContent   = "99";
  document.getElementById("ck-full").checked        = false;
  document.getElementById("ck-electric").checked    = false;
  document.getElementById("ck-none").checked        = false;
  document.getElementById("sort-by").value          = "name";
  activeState = "";
  largeMode = false;
  buildStateTabs();
  buildRegionOptions();
  applyFilters();
}
