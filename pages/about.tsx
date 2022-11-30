
import Link from 'next/link'
import { ReactElement } from 'react'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'





export default function About() {
  return (
    <>
     
      <h1 className={'title'}>
          Pagina de About
        </h1>

        <h1 className={'title'}>
         {/* <a href="/"> Ir al home</a> */}
         <Link href="/">Ir al home</Link>
        </h1>
     
       
    </>
  )
}
//About.getLayout= function getLayout (page:ReactElement )
About.getLayout= function getLayout (page:JSX.Element )
{
  return(<MainLayout>
     <DarkLayout>
      {page}
     </DarkLayout>
     </MainLayout>)

}