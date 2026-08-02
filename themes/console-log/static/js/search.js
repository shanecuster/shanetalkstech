const input = document.getElementById('search-input');
const resultsEl = document.getElementById('search-results');
const statusEl = document.getElementById('search-status');
const countEl = document.getElementById('search-count');
const emptyEl = document.getElementById('search-empty');

let pagefind = null;
let pagefindError = false;
let debounceTimer = null;
let requestId = 0;

async function loadPagefind() {
  if (pagefind || pagefindError) return pagefind;
  try {
    pagefind = await import('/pagefind/pagefind.js');
    await pagefind.init();
  } catch (err) {
    pagefindError = true;
  }
  return pagefind;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function hashOf(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(7, '0').slice(0, 7);
}

function showEmpty(message) {
  resultsEl.innerHTML = '';
  statusEl.style.display = 'none';
  emptyEl.textContent = message;
  emptyEl.style.display = 'block';
}

function clearResults() {
  resultsEl.innerHTML = '';
  statusEl.style.display = 'none';
  emptyEl.style.display = 'none';
}

async function runSearch(query) {
  const thisRequest = ++requestId;

  if (!query) {
    clearResults();
    return;
  }

  const pf = await loadPagefind();
  if (thisRequest !== requestId) return;

  if (!pf) {
    showEmpty('$ search index unavailable — run a full build to generate it.');
    return;
  }

  const search = await pf.search(query);
  if (thisRequest !== requestId) return;

  if (!search.results.length) {
    showEmpty('$ grep: no matches found for "' + query + '"');
    return;
  }

  const data = await Promise.all(search.results.slice(0, 20).map((r) => r.data()));
  if (thisRequest !== requestId) return;

  emptyEl.style.display = 'none';
  statusEl.style.display = 'flex';
  countEl.textContent = 'found ' + data.length + ' match' + (data.length === 1 ? '' : 'es');

  resultsEl.innerHTML = data
    .map((r) => {
      const title = r.meta && r.meta.title ? r.meta.title : r.url;
      const date = r.meta && r.meta.date ? '<span>' + escapeHtml(r.meta.date) + '</span>' : '';
      return (
        '<article class="entry">' +
        '<div class="entry-meta"><span class="hash">#' + hashOf(r.url) + '</span>' + date + '</div>' +
        '<div class="entry-body">' +
        '<h3><a href="' + r.url + '">' + escapeHtml(title) + '</a></h3>' +
        '<p>' + r.excerpt + '</p>' +
        '</div>' +
        '</article>'
      );
    })
    .join('');
}

input.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  const query = input.value.trim();
  debounceTimer = setTimeout(() => runSearch(query), 150);
});

const initialQuery = new URLSearchParams(window.location.search).get('q');
if (initialQuery) {
  input.value = initialQuery;
  runSearch(initialQuery.trim());
}

input.focus();
