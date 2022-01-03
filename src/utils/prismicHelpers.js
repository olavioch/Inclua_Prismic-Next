// ~/utils/prismicHelpers.js
import Prismic from '@prismicio/client'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  Router
} from '../../prismicConfiguration'

// Função auxiliar para converter links Prismic Rich Text em componentes Next / Link
export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)

// -- inicialização @prismicio/client
// Inicialização the Prismic Client que é usado para consultar a API e passa para ele quaisquer opções de consulta
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken, Router))
);

// Opções que são passadas para o Client
const createClientOptions = (req = null, prismicAccessToken = null, routes = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  const routesOption = routes ? { routes: Router.routes } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
    ...routesOption,
  }
}

export default Client