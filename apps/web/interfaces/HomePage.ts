export interface Props {
  posts: {
    title: string;
    description: string;
    slug: string;
    language: "js" | "ts";
  }[];
}
