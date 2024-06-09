import { MaxWidthContainer } from '@/components/layouts'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <main className="flex h-[100vh] w-[100vw] flex-col items-center justify-start">
      <MaxWidthContainer>
        <div className="bg-gray-300">{/* <Navigation /> */}</div>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <Outlet />
      </MaxWidthContainer>

      {/* <ReactQueryDevtools buttonPosition="top-right" /> */}
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </main>
  )
}
