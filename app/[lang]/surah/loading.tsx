import { Skeleton } from '@/components/ui/skeleton'

function loading() {
    return (
        <section className='flex flex-col lg:flex-row gap-4 px-4'>
            <div className='flex flex-col h-full flex-1'>
                <div className="w-full h-[80vh] pb-20 pt-5">
                    <Skeleton className="w-[300px] h-[30px] rounded-md mx-auto mb-20" />
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className='flex justify-between items-center w-full p-2 group mt-2'>
                            <Skeleton className="w-4/6 h-[20px] rounded-md text-center flex justify-center items-center group-hover:bg-primary  text-lg mx-auto" />
                        </div>
                    ))}
                </div>
                <Skeleton className="w-full h-[30px] rounded-md" />
            </div>
            <div className='flex flex-col items-start bg-muted h-fit lg:h-[89vh] w-full lg:w-[300px] p-8 '>
                <Skeleton className="w-[200px] h-[200px] rounded-md my-3" />
                <div className='flex flex-col space-y-5 font-extrabold w-full'>
                    <Skeleton className="w-[100px] h-[30px] rounded-md" />
                    <Skeleton className="w-[100px] h-[30px] rounded-md" />
                    <Skeleton className="w-[100px] h-[30px] rounded-md" />
                    <Skeleton className="w-[200px] h-[30px] rounded-lg" />
                    <Skeleton className="w-[200px] h-[30px] rounded-lg" />
                </div>
            </div>
        </section>
    )
}

export default loading