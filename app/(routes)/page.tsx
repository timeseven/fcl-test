import Navbar from "@/components/navbar";
import BatchForm from "./components/batch-form";

export default function Home() {
  return (
    <div className="h-screen bg-bgColor-Default">
      <Navbar />
      <BatchForm />
    </div>
  );
}
