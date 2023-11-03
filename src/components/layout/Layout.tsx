import { ReactNode } from "react";
import "./Layout.scss";

interface ILayout {
  content: ReactNode;
}

function Layout(props: ILayout) {
  return (
    <div className="flex flex-col grow items-center">
      <div className="flex flex-col grow items-stretch p-4 layout">
        {props.content}
      </div>
    </div>
  );
}

export default Layout;
