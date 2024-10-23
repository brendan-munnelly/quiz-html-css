import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  base: '/quiz-dorset/',
})
echo "# quiz-dorset" >> README.md
git init
git add README.md
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:brendan-munnelly/quiz-dorset.git
git push -u origin main