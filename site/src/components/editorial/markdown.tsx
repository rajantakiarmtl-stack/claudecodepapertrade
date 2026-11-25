import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Root } from "mdast";
import { headingId } from "@/lib/editorial";

function textOf(node: { value?: string; children?: readonly unknown[] }): string {
  if (typeof node.value === "string") return node.value;
  return node.children?.map((child) => textOf(child as Parameters<typeof textOf>[0])).join("") ?? "";
}
function sectionIds() {
  return (tree: Root) => {
    const seen = new Map<string, number>();
    for (const node of tree.children) {
      if (node.type !== "heading" || node.depth !== 2) continue;
      const base = headingId(textOf(node));
      const n = seen.get(base) ?? 0;
      seen.set(base, n + 1);
      node.data = { ...node.data, hProperties: { id: n ? `${base}-${n}` : base } };
    }
  };
}
export function Markdown({ body, toc = false }: { body: string; toc?: boolean }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm, sectionIds]} components={toc ? {
    h2: ({ node, children }) => <li><a href={`#${String(node?.properties['id'] ?? "section")}`} className="text-muted-foreground hover:text-amber">{children}</a></li>,
    h1: () => null, h3: () => null, h4: () => null, h5: () => null, h6: () => null,
    p: () => null, ul: () => null, ol: () => null, blockquote: () => null, table: () => null, pre: () => null, hr: () => null, img: () => null,
  } : {
    h1: ({ children }) => <h2>{children}</h2>,
    table: ({ children }) => <div className="overflow-x-auto"><table>{children}</table></div>,
    img: ({ alt, src }) => <img src={src} alt={alt || "Article illustration"} loading="lazy" />,
  }}>{body}</ReactMarkdown>;
}
