import { LinkPage } from "ui";
import { ComponentContainer } from "../components/ComponentContainer";

export default function Docs() {
  return (
    <main>
      <h1>Docs</h1>
      <div className="componentContainer">
        <ComponentContainer title="Link Page">
          <LinkPage href="/" hrefDescription="A random link" />
        </ComponentContainer>
      </div>
    </main>
  );
}
