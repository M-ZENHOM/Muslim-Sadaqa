import Wrapper from '@/components/Wrapper'
import { Skeleton } from '@/components/ui/skeleton'

function loading() {
    return (
        <Wrapper className='flex justify-center items-center w-full h-screen'>
            <Skeleton className="w-[200px] h-[300px] rounded-lg" />
        </Wrapper>
    )
}

export default loading