import Masbaha from "@/components/Masbaha";
import Wrapper from "@/components/Wrapper";
import { Locale } from "@/i18n-config";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  return {
    title: `${params.lang === 'ar' ? 'مسحبة' : 'Masbaha'}`,
  }
}

export default function page() {
  return (
    <Wrapper className='flex justify-center items-center w-full h-screen'>
      <Masbaha />
    </Wrapper>
  )
}
