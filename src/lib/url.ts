// Join the site base URL with a path, regardless of leading/trailing slashes.
// Use this for every internal link so templates aren't fragile to base shape.
export function url(path: string = ''): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : import.meta.env.BASE_URL + '/';
  const stripped = path.replace(/^\/+/, '');
  return base + stripped;
}
