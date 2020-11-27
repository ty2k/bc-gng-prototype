export const imageService = {
  get,
};

// See Webpack require.context docs
// https://webpack.js.org/guides/dependency-management/#require-context
function importAll(r) {
  let images = {};

  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}

const images = importAll(
  require.context("../components/assets", false, /\.(gif|png|jpe?g|svg)$/)
);

function get(id) {
  // Because we are `require`ing instead of `import`ing,
  // Webpack will give us an object that looks like {default: module}
  // rather than the flattened default module itself.
  if (images && images[id] && images[id].default) {
    return images[id].default;
  } else {
    return null;
  }
}
