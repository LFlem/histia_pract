import { redirect } from "next/navigation";
import type { NextPageIntlayer } from "next-intlayer";

const RootPage: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  redirect(`/${locale}/coming-soon`);
};

export default RootPage;