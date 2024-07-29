import { AutoRouter } from 'itty-router' // ~1kB
import { getSocialData } from './data/social-data'

const router = AutoRouter()

router
  .get('/socials', getSocialData)
  .get('*', () => new Response('Not found', { status: 404 }))

export default router