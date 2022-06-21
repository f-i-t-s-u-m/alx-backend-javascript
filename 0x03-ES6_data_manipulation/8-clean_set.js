export default function cleanSet(set, startString) {
  let app = '';
  set.forEach((x) => {
    if (x.startsWith(startString) && startString.length) {
      if (app.length === 0) app = x.slice(startString.length);
      else app += `_${x.slice(startString.length)}`;
    }
  }, app);
  return app;
}
