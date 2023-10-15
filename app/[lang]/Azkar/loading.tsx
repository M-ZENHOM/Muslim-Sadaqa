import Wrapper from '@/components/Wrapper'
import { Skeleton } from '@/components/ui/skeleton'

function loading() {
    return (
        <Wrapper className='py-20'>
            <h2 className='text-5xl font-extrabold text-center py-10 flex items-center justify-between'> <Skeleton className="w-[100px] h-[20px] rounded-md " />  <Skeleton className="w-[50px] h-[50px] rounded-full " /></h2>
            <div className='space-y-3'>
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className='p-4 space-y-3 bg-gradient-to-bl from-primary/25 to-60%'>
                        <Skeleton className="w-full h-[20px] rounded-md " />
                        <Skeleton className="w-[200px] h-[20px] rounded-md " />
                        <Skeleton className="w-[150px] h-[20px] rounded-md " />
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

export default loading