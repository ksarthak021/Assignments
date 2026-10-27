export function asset(path: string) {
  if (!path || path.startsWith("http")) return path;
  return path.startsWith("/") ? path : `/${path}`;
}
