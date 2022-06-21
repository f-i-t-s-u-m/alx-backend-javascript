export default function cleanSet(set, startString) {
  const app = [];
  if (startString && typeof startString === 'string') {
    set.forEach((x) => {
      if (x.startsWith(startString) && x) {
        app.push(x.slice(startString.length));
      }
    }, app);
  }
  return app.join('-');
}
