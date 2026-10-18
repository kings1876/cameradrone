// WebMCP: exposes navigation-only actions to browser agents. Ordering stays human-completed.
(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext || !navigator.modelContext.provideContext) return;
  var go = function (path) { window.location.href = 'https://dronesonsale.com.au' + path; return { url: 'https://dronesonsale.com.au' + path }; };
  navigator.modelContext.provideContext({
    tools: [
      { name: 'browse_products', description: 'Open the product catalogue, optionally for a category id', inputSchema: { type: 'object', properties: { category: { type: 'string' } } }, execute: function (a) { return go(a && a.category ? '/category/' + a.category : '/shop'); } },
      { name: 'read_buying_guides', description: 'Open the buying guides', inputSchema: { type: 'object', properties: {} }, execute: function () { return go('/blog'); } },
      { name: 'request_quote', description: 'Open the quote form for enterprise, sensor and spraying drones', inputSchema: { type: 'object', properties: {} }, execute: function () { return go('/quote'); } },
      { name: 'contact', description: 'Open the contact page', inputSchema: { type: 'object', properties: {} }, execute: function () { return go('/contact'); } }
    ]
  });
})();
