import prisma from '@/utils/db'
import { JobType } from '@/utils/types'
import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'
import { useToast } from './ui/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteJobAction } from '@/utils/actions'
import { Button } from './ui/button'

function DeleteJobBtn({ id }: { id: string }) {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({
          description: 'there was an error ',
        })
        return
      }
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
      queryClient.invalidateQueries({ queryKey: ['stats'] })
      queryClient.invalidateQueries({ queryKey: ['charts'] })
      toast({
        description: 'job removed',
      })
    },
  })
  return (
    <Button size='sm' disabled={isPending} onClick={() => mutate(id)}>
      {isPending ? 'deleting...' : 'delete'}
    </Button>
  )
}
export default DeleteJobBtn
