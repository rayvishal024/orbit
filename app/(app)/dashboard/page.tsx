import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function DashboardPage() {
  return (
    <div className="p-10">
      <h1 className="mb-4 text-3xl font-bold">
        Orbit Dashboard
      </h1>

      <ThemeToggle />
    </div>
  );
}