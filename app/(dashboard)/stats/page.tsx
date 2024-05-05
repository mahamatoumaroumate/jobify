import ChartsContainer from '@/components/ChartContainer'
import StatsContainer from '@/components/StatsContainer'
import { getChartsDataAction, getStatsAction } from '@/utils/actions'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
const StatsPage = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['stats'],
    queryFn: () => getStatsAction(),
  })
  await queryClient.prefetchQuery({
    queryKey: ['charts'],
    queryFn: () => getChartsDataAction(),
  })
  return (
    <HydrationBoundary>
      <StatsContainer />
      <ChartsContainer />
    </HydrationBoundary>
  )
}
export default StatsPage
