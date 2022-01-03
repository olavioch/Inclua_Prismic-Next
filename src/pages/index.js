//utils
import React from 'react'
import Client from '../utils/prismicHelpers'

//components
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import PostsRecentes from '../components/PostsRecentes'
import PostsInclua from '../components/PostsInclua'
import PostsGostar from '../components/PostsGostar'
import SectionAgenda from '../components/SectionAgenda'
import SectionCadastro from '../components/SectionCadastro'
import Footer from '../components/Footer'

export default function Home({
  navApi, 
  carouselApi, 
  recentesApi, 
  incluaApi, 
  gostarApi, 
  agendaApi,
  cadastroApi,
  footerApi
}){
  return(
    <>
      <Nav
        img = {navApi.imagen.url}
        links = {navApi.links}
        button = {navApi.button}
      />

      <Carousel
        items = {carouselApi}
      />

      <PostsRecentes
        title = {recentesApi[0].recentestitle[0].text}
        cardA = {recentesApi[0]}
        cardB = {recentesApi[1]}
      />

      <PostsInclua
        title = {incluaApi[0].IncluaTitle[0].text}
        cardA = {incluaApi[0]}
        cardB = {incluaApi[1]}
      />

      <PostsGostar
        title = {gostarApi[0].gostartitle[0].text}
        cardB = {gostarApi[1]}
      />

      <SectionAgenda
        img = {agendaApi.imagen.url}
        titlecolor = {agendaApi.titlecolor}
        description ={agendaApi.description[0].text}
        button = {agendaApi.button}
      />

      <SectionCadastro
        description = {cadastroApi.description[0].text}
        order = {cadastroApi.order}
        placeholder = {cadastroApi.inputplaceholder}
        button = {cadastroApi.button}
      />

      <Footer
        logo = { footerApi[0].logo.url}
        titlemenuA = {footerApi[0].titlemenua}
        titlemenuB = {footerApi[0].titlemenub}
        titleContacts = {footerApi[0].titlecontacts}
        menuA = {footerApi[0].menua}
        menuB = {footerApi[0].menub}
        description = {footerApi[0].description[0].text}
        phone = {footerApi[0].phone}
        socials = {footerApi[1]}
      />
      
    </>
  )
}

export async function getStaticProps({previewData}){
  const previewRef = previewData ? previewData.ref : null;
  const refOption = previewRef ? { ref: previewRef } : null;
  const home = await Client().getSingle("single", refOption) || null;
  const navApi = home.data.slices[0].primary;
  const carouselApi = home.data.slices[1].items;
  const recentesApi = [home.data.slices[2].primary, home.data.slices[2].items];
  const incluaApi = [home.data.slices[3].primary, home.data.slices[3].items];
  const gostarApi = [home.data.slices[4].primary, home.data.slices[4].items];
  const agendaApi = home.data.slices[5].primary;
  const cadastroApi = home.data.slices[6].primary;
  const footerApi = [home.data.slices[7].primary, home.data.slices[7].items]

  return{
      props: {
          navApi,
          carouselApi,
          recentesApi,
          incluaApi,
          gostarApi,
          agendaApi,
          cadastroApi,
          footerApi
      }
  }
}