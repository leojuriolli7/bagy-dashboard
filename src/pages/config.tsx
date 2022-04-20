import { PageWrapper } from "../components/PageWrapper";
import { UnderConstructionPage } from "../components/UnderConstructionPage";

export function ConfigPage() {
  return (
    <PageWrapper title="Configurações" children={<UnderConstructionPage />} />
  );
}
