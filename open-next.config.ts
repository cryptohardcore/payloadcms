// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from '@opennextjs/cloudflare/config'

export default defineCloudflareConfig({
  default: {
    minify: true,
  },
  // This extracts the heavy Payload CMS dashboard routes out of the main worker
  functions: {
    payloadAdmin: {
      routes: [
        'app/(payload)/api/[...slug]/route',
        'app/admin/[[...segments]]/page'
      ],
      minify: true,
    }
  }
})
