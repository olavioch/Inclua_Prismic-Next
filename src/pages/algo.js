import React from 'react'
import Client from '../utils/prismicHelpers'
import Nav from '../components/Nav'

export default function Home({home}) {
  console.log(home);
  return(
    <>
      <Nav/>
    </>
  )
}
export async function getStaticProps({previewData}){
  const previewRef = previewData ? previewData.ref : null;
  const refOption = previewRef ? { ref: previewRef } : null;
  const home = await Client().getSingle("single", refOption) || null;
  return{
      props: {
          home
      }
  }
}