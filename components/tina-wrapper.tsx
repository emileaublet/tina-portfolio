import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

import Link from "next/link";

export const TinaMd = ({
  content,
  dataTinaField,
}: {
  content: TinaMarkdownContent;
  dataTinaField?: any;
}) => {
  return (
    <TinaMarkdown
      data-tina-field={dataTinaField}
      content={content}
      components={{
        section: (props: any) => (
          <section>
            <h2 className="text-red-500">{props.title}</h2>
            <TinaMd content={props.children} />
          </section>
        ),
        p: (props: any) => <p className="block mb-4">{props.children}</p>,
        a: (props: any) => (
          <Link href={props.url} className="text-primary-500">
            <span>{props.children}</span>
          </Link>
        ),
      }}
    />
  );
};
