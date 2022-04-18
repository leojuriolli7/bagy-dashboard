import { PageHeader } from "../PageHeader";
import { Sidebar } from "../Sidebar";
import * as S from "./styles";

interface PageWrapperProps {
  // children: any;
  children?: any;
  title?: string;
}

export function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <S.Container>
      <Sidebar />
      <S.PageContent>
        <PageHeader title={title} />
        {children}
      </S.PageContent>
    </S.Container>
  );
}
