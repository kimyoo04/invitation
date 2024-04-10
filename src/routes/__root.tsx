import MaxWidthContainer from "@/layouts/MaxWidthContainer";
import Navigation from "@/layouts/Navigation";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = rootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="flex h-[100vh] w-[100vw] flex-col items-center justify-start">
      <MaxWidthContainer>
        <div className="bg-gray-300">
          <Navigation />
        </div>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <div className="bg-gray-400">
          <Outlet />
        </div>
      </MaxWidthContainer>

      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </main>
  );
}
