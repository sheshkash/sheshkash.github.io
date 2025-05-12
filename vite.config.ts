import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'sheshkash.github.io'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}`
})
