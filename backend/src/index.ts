import { AutoRouter, cors } from 'itty-router' // ~1kB
import { getSocialData } from './data/social-data'

const { preflight, corsify } = cors({
  origin: '*',
  allowMethods: '*',
}) 
const router = AutoRouter({
  before: [preflight],
  finally: [corsify]
})

router
  .get('/socials', getSocialData)
  .get('*', () => new Response('Not found', { status: 404 }))

export default router