const basePath = "/Assignments";

export function asset(path: string) {
  if (!path || path.startsWith("http") || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
