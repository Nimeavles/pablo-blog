import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostProps {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  frontmatter: any;
}
