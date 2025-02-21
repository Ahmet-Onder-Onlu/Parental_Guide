import PageMeta from "../../components/common/PageMeta";
import NavigationTile from "../../components/ui/tile/NavigationTiles";

export default function Dashboard() {
  return (
    <>
      <PageMeta
        title="Dashboard"
        description="Dashboard"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <NavigationTile text="Open ChatBot" link="/chat" />
        </div>
      </div>
    </>
  );
}