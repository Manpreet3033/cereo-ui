import dynamic from "next/dynamic";
import { cn, extractText } from "@/lib/utils";
import { ComponentPreview } from "@/app/(root)/docs/_components/preview/component-preview";

const Accordion = dynamic(() =>
  import("@/components/ui/accordion").then((mod) => mod.Accordion)
);
const AccordionContent = dynamic(() =>
  import("@/components/ui/accordion").then((mod) => mod.AccordionContent)
);
const AccordionItem = dynamic(() =>
  import("@/components/ui/accordion").then((mod) => mod.AccordionItem)
);
const AccordionTrigger = dynamic(() =>
  import("@/components/ui/accordion").then((mod) => mod.AccordionTrigger)
);

const Tabs = dynamic(() =>
  import("@/components/ui/tabs").then((mod) => mod.Tabs)
);
const TabsContent = dynamic(() =>
  import("@/components/ui/tabs").then((mod) => mod.TabsContent)
);
const TabsList = dynamic(() =>
  import("@/components/ui/tabs").then((mod) => mod.TabsList)
);
const TabsTrigger = dynamic(() =>
  import("@/components/ui/tabs").then((mod) => mod.TabsTrigger)
);

const Alert = dynamic(() =>
  import("@/components/ui/alert").then((mod) => mod.Alert)
);

const AlertTitle = dynamic(() =>
  import("@/components/ui/alert").then((mod) => mod.AlertTitle)
);

const AlertDescription = dynamic(() =>
  import("@/components/ui/alert").then((mod) => mod.AlertDescription)
);

const CodeBlock = dynamic(() =>
  import("@/app/(root)/docs/_components/code/code-block").then(
    (mod) => mod.default
  )
);

const Image = dynamic(() => import("next/image"));

const Link = dynamic(() => import("next/link"));

export function getMDXComponents() {
  return {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Alert,
    AlertTitle,
    AlertDescription,
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className={cn(
          "font-heading mt-2 scroll-m-20 text-4xl font-bold",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className={cn(
          "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4
        className={cn(
          "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h5
        className={cn(
          "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h6
        className={cn(
          "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
      <a
        className={cn("font-medium underline underline-offset-4", className)}
        {...props}
      />
    ),
    p: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className={cn("my-6 ml-20 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLElement>) => (
      <blockquote
        className={cn("mt-6 border-l-2 pl-6 italic", className)}
        {...props}
      />
    ),
    img: ({
      className,
      alt,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={cn("rounded-md", className)} alt={alt} {...props} />
    ),
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className="my-4 md:my-8" {...props} />
    ),
    table: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table
          className={cn(
            "relative w-full overflow-hidden border-none text-sm",
            className
          )}
          {...props}
        />
      </div>
    ),
    tr: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
        className={cn("last:border-b-none m-0 border-b", className)}
        {...props}
      />
    ),
    th: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className={cn(
          "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
        className={cn(
          "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    code: ({
      children,
      className,
      ...props
    }: React.HTMLAttributes<HTMLElement>) => {
      const codeString = extractText(children);
      const language =
        codeString.includes("npm") || codeString.includes("npx")
          ? "bash"
          : codeString.includes("tailwind")
          ? "js"
          : "tsx";

      return codeString.includes("tailwind.config.js") ||
        codeString.startsWith("@/components/ui/") ||
        codeString === "@/components" ||
        codeString === "shad-alert.tsx" ||
        codeString === "A" ||
        codeString === "Enter or Return" ? (
        <code
          className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm ${className}`}
          {...props}
        >
          {children}
        </code>
      ) : (
        <div className="relative w-full">
          <pre className="overflow-auto rounded-lg" {...props}>
            <CodeBlock language={language} code={codeString} />
          </pre>
        </div>
      );
    },
    Image,
    CodeBlock,
    Steps: ({ ...props }) => (
      <div
        className="steps mb-12 ml-4 border-l border-[#dcdcdd] dark:border-[#27272A] pl-8 [counter-reset:step]"
        {...props}
      />
    ),
    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
      <h3
        className={cn(
          "step font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight relative pl-8",
          "before:absolute before:left-[-3rem] before:top-1/2 before:-translate-y-1/2 before:h-7 before:w-7 before:rounded-full before:flex before:items-center before:justify-center before:bg-[#F4F4F5] before:dark:bg-[#27272A] before:text-black before:dark:text-white before:content-[counter(step)]",
          "[counter-increment:step]",
          className
        )}
        {...props}
      />
    ),
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
    ),
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList
        className={cn(
          "w-full justify-start rounded-none border-b bg-transparent p-0",
          className
        )}
        {...props}
      />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger
        className={cn(
          "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
          className
        )}
        {...props}
      />
    ),
    TabsContent: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsContent>) => (
      <TabsContent
        className={cn(
          "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
          className
        )}
        {...props}
      />
    ),
    Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
      <Link
        className={cn("font-medium underline underline-offset-4", className)}
        {...props}
      />
    ),
    ComponentPreview: ComponentPreview,
  };
}
