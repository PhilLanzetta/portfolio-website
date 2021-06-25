import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import Seo from '../components/seo'

const Contact = () => {
 return (
  <Layout>
   <Seo title='Contact' description='contact me' />
   <section className='contact-page'>
    <ContactForm />
   </section>
  </Layout>
 )
}

export default Contact
