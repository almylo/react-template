import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

import "./Container.scss";

interface IContainerProps {
  children: any;
}

export function Container(props: IContainerProps) {
  const { children } = props;

  return (
    <div className={`layout page-enter`}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
