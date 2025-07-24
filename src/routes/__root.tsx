import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="bg-blue-500 flex flex-row">
        <div>Über uns</div>
        <div>Aktivitäten</div>
        <div>Gottesdienst</div>
        <div>Moscheekauf</div>
        <div>Kontakt test</div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  ),
});
