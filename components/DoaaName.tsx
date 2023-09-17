import { FC } from 'react'

interface DoaaNameProps {
    fristPart: string,
    SecPart: string,
    name: string,

}

const DoaaName: FC<DoaaNameProps> = ({ fristPart, SecPart, name }) => {
    return (
        <div className='flex flex-wrap'>
            ❤ {fristPart}
            <h2 className='mx-1 text-red-500 font-bold'>{name}</h2>
            {SecPart}
        </div>
    )




}

export default DoaaName