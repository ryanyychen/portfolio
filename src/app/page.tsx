import Self from "./components/Self";

export default function Home() {
  return (
    <div className="h-[90vh] justify-items-center font-[family-name:var(--font-geist-sans)] bg-primary">
      <main className="flex flex-col items-center h-full pt-[5vh]">
        <Self />
      </main>
    </div>
  );
}
