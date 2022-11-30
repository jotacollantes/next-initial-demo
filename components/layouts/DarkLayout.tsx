import React, { FC } from 'react'
interface Props {
    children:  JSX.Element | JSX.Element[] 
}

// Tambien se puede usar DarkLayout: FC pero en este caso no funciona
export const DarkLayout = ({children}:Props) => {
 
  return (
    <div style={{
        backgroundColor:'rgba(0,0,0,0.3)' ,
        
        borderRadius:'5px',
        padding:'10px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
            {children}
        </div>
        

    </div>
  )
}
