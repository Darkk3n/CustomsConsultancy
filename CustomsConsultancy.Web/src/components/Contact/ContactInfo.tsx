import { Image } from 'react-bootstrap'
import { NavLink } from "react-router-dom"

export const ContactInfo = () => (
   <>
      <div className='contact-info'>
         <p className='contact-info-header'>Contacto:</p>
         <p className='data-header'>Telefono</p>
         <p className='data-info'>2294639014</p>
      </div>
      <div className='contact-info'>
         <p className='data-header'>Email</p>
         <p className='data-info'>ic.aduanal@gmail.com</p>
      </div>
      <div className='contact-info'>
         <div className='social'>
            <p className='data-header'>Social</p>
            <NavLink to='https://www.facebook.com/i.c.aduanal' target='_blank' style={{ paddingLeft: '10px' }}>
               <Image src='src/assets/img/FBLogo.png' alt='FB Logo' className='social-logo' />
            </NavLink>
            <NavLink to='https://www.instagram.com/icaduanal/' target='_blank' style={{ paddingLeft: '10px' }}>
               <Image src='src/assets/img/Instagram.png' className='social-logo' />
            </NavLink>
            <NavLink to='https://www.tiktok.com/@i.c.aduanal' target='_blank' style={{ paddingLeft: '10px' }}>
               <Image src='src/assets/img/TikTokLogo.png' className='social-logo' />
            </NavLink>
         </div>
      </div>
   </>
)
