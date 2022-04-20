import { useState } from "react";
import { MobileSidebar } from "../MobileSidebar";
import { PageHeader } from "../PageHeader";
import { Sidebar } from "../Sidebar";
import * as S from "./styles";
import "animate.css";

interface PageWrapperProps {
  // children: any;
  children?: any;
  title?: string;
}

export function PageWrapper({ children, title }: PageWrapperProps) {
  const [show, setShow] = useState(false);

  return (
    <S.Container>
      <Sidebar />
      <MobileSidebar show={show} setShow={setShow} />
      <S.PageContent>
        <PageHeader title={title} show={show} setShow={setShow} />
        {children}
      </S.PageContent>
    </S.Container>
  );
}
