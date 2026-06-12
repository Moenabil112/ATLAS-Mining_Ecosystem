/**
 * Markdown content ingestion.
 *
 * The Markdown knowledge package is the single source of truth. We eagerly load
 * every Markdown file at build time via Vite's import.meta.glob so the parsed
 * structured data (src/data/*.json) can be traced back to its source document,
 * and so the Data Room can reference original content.
 */
const modules = import.meta.glob("../content/markdown/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export interface MarkdownDoc {
  path: string;
  fileName: string;
  layer: string;
  title: string;
  body: string;
}

function deriveTitle(body: string, fileName: string): string {
  const heading = body.split("\n").find((line) => line.startsWith("# "));
  if (heading) return heading.replace(/^#\s+/, "").trim();
  return fileName.replace(/\.md$/, "").replace(/^\d+_/, "").replace(/_/g, " ");
}

function deriveLayer(path: string): string {
  const parts = path.split("/");
  const idx = parts.findIndex((p) => p === "markdown");
  const folder = parts[idx + 1] ?? "";
  return folder.replace(/^\d+_/, "").replace(/_/g, " ");
}

export const markdownDocs: MarkdownDoc[] = Object.entries(modules)
  .map(([path, body]) => {
    const fileName = path.split("/").pop() ?? path;
    return {
      path,
      fileName,
      layer: deriveLayer(path),
      title: deriveTitle(body, fileName),
      body,
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

export function docsForLayer(layerFolderFragment: string): MarkdownDoc[] {
  return markdownDocs.filter((d) =>
    d.path.toLowerCase().includes(layerFolderFragment.toLowerCase()),
  );
}

export const markdownFileCount = markdownDocs.length;
