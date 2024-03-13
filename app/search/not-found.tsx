import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="gap-5 flex flex-col items-center justify-center h-[calc(100vh-116px)] bg-[#013B94]">
      <h1 className="text-9xl font-mono font-bold text-center text-white">
        404
      </h1>
      <h2 className="text-5xl font-mono font-bold text-center text-white">Information Not Found</h2>
      <Link href="/">
        <Button type="button" className="bg-blue-500 hover:bg-blue-500/75">Go home</Button>
      </Link>
    </div>
  );
}
