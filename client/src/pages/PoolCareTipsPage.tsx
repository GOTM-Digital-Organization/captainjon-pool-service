import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PoolCareTipsContent } from "@/components/PoolCareContent";
import usePoolCareSeo from "@/hooks/usePoolCareSeo";

export default function PoolCareTipsPage() {
  usePoolCareSeo();
  return <div className="min-h-screen"><Navbar /><PoolCareTipsContent /><Footer /></div>;
}
