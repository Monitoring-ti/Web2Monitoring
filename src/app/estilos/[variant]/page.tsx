import { notFound } from "next/navigation";
import DemoLanding from "@/components/demo/DemoLanding";
import { getTheme, allThemeIds } from "@/lib/themes";

export function generateStaticParams() {
  return allThemeIds.map((id) => ({ variant: id }));
}

export function generateMetadata({ params }: { params: { variant: string } }) {
  const theme = getTheme(params.variant);
  if (!theme) return { title: "Estilo no encontrado" };
  return {
    title: `Monitoring — ${theme.name} | ${theme.groupName}`,
    description: theme.description,
  };
}

export default function EstiloVariantPage({ params }: { params: { variant: string } }) {
  const theme = getTheme(params.variant);
  if (!theme) notFound();
  return <DemoLanding theme={theme} />;
}
