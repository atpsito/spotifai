import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';

import Home from "@/components/Home/Home";
import { authOptions } from "@/config/auth.config";


const Page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/player");
  }

  return (
    <div className="h-screen max-h-screen">
      <Home />
    </div>
  );
};

export default Page;
