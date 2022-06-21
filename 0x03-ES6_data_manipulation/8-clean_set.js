export default function cleanSet(set, startString) {
  const app = [];
  set.forEach((x) => {
    if (x.startsWith(startString) && startString.length) {
      app.push(x.slice(startString.length));
    }
  }, app);
  return app.join('-');
}
