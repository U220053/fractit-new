import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";
import DetailedInfo from "./DetailedInfo";
import FloorPlans from "./FloorPlans";
import LocationField from "./LocationField";
import PropertyMediaUploader from "./PropertyMediaUploader";

const index = () => {
  return (
    <>
      <div>Nitu</div>
      <Button>Click me</Button>
    </>
  );
};

export default index;
{
  /*}
import {
  Abstraxion,
  useAbstraxionAccount,
  useModal,
} from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";
import { useEffect } from "react";
import CreateListing from "@/components/dashboard/create-listing";
import MetaComponent from "@/components/common/MetaComponent";

// Metadata for the page
const metadata = {
  title: "Create Listing || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
};

const index = () => {
  // Abstraxion hooks
  const {
    data: { bech32Address },
    isConnected,
    isConnecting,
  } = useAbstraxionAccount();

  // Modal state
  const [, setShow] = useModal();

  // Watching isConnected and isConnecting states
  useEffect(() => {
    console.log({ isConnected, isConnecting });
  }, [isConnected, isConnecting]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <main className="m-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
          Abstraxion
        </h1>
        <Button fullWidth onClick={() => setShow(true)} structure="base">
          {bech32Address ? (
            <div className="flex items-center justify-center">VIEW ACCOUNT</div>
          ) : (
            "CONNECT"
          )}
        </Button>
        {bech32Address && (
          <div className="border-2 border-primary rounded-md p-4 flex flex-row gap-4">
            <div className="flex flex-row gap-6">
              <div>address</div>
              <div>{bech32Address}</div>
            </div>
          </div>
        )}
        <Abstraxion onClose={() => setShow(false)} />
      </main>
      <CreateListing />
    </>
  );
};

export default index;
*/
}
