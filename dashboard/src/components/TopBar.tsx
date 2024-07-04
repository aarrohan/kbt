import TopBarDropdownMenu from "./TopBarDropdownMenu";

export default function TopBar() {
  return (
    <div className="mb-10 flex justify-between items-center">
      <div>
        <h2 className="mb-1 text-2xl font-extrabold">Overview</h2>
        <p className="text-muted-foreground">👋 Good evening, John Doe</p>
      </div>

      <TopBarDropdownMenu
        user={{
          name: "John Doe",
          username: "admin",
        }}
      />
    </div>
  );
}
