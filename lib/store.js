// In-memory store (Vercel এ KV store use করবো)
const store = new Map();

module.exports = {
  set: (id, content) => store.set(id, content),
  get: (id) => store.get(id),
};
