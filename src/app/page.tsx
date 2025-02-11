import Footer from "@/components/footer";
import ActionSearchBar from "@/components/kokonutui/action-search-bar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-between p-8 pb-20 gap-16 sm:p-20">
        <ActionSearchBar />
      <Footer />
      </div>
    {/* <div className="dark min-h-screen bg-zinc-950 text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    </div> */}
    </>
  );
}
