
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
      <h1 className={'title'}>
          Pagina de Pricing
        </h1>

        <h1 className={'title'}>
         {/* <a href="/"> Ir al home</a> */}
         <Link href="/">Ir al home</Link>
        </h1>
    </MainLayout>
  )
}