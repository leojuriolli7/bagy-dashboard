import { Overview } from "../components/Overview";
import { PageWrapper } from "../components/PageWrapper";

export function OverviewPage() {
  // return <PageWrapper title="Visão Geral" children={<p>Test</p>} />;
  return <PageWrapper title="Visão Geral" children={<Overview />} />;
}
