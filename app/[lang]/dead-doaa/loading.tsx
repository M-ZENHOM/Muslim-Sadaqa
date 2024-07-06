import Wrapper from '@/components/Wrapper'
import { Skeleton } from '@/components/ui/skeleton'

export default function loading() {
    return (
        <Wrapper className='py-20'>
            <Skeleton className='w-[400px] h-4' />
            <div className='flex items-center mt-8'>
                <Skeleton className='w-full h-4' />
                <Skeleton className='w-[180px] rounded-lg h-10 mx-2' />
            </div>
        </Wrapper>
    )
}
