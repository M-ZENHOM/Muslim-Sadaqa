import { Skeleton } from '@/components/ui/skeleton'

function loading() {
    return (
        <section className='flex flex-col gap-4 px-4'>
            <div className='bg-muted/25 bg-gradient-to-tr from-primary/25 to-50% w-full max-w-xl  mt-20 md:my-6 mx-auto flex flex-col space-y-4 p-4 rounded-xl'>
                <Skeleton className="w-[200px] h-[30px] rounded-md" />
                <Skeleton className="w-[100px] h-[30px] rounded-md" />
                <div className='flex gap-4'>
                    <Skeleton className="w-[60px] h-[30px] rounded-md" />
                    <Skeleton className="w-[60px] h-[30px] rounded-md" />
                </div>
            </div>
            <div className='flex flex-col '>
                <div className="w-full h-[100vh] pb-20 pt-5">
                    <Skeleton className="w-[300px] h-[30px] rounded-md mx-auto mb-20" />
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className='flex justify-between items-center w-full p-2 group mt-2'>
                            <Skeleton className="w-4/6 h-[20px] rounded-md text-center flex justify-center items-center group-hover:bg-primary  text-lg mx-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default loading