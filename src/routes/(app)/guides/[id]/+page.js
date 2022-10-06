/* Loading all data from API endpoint */
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  // await new Promise(resolve => setTimeout(resolve, 1000))
  const id = params.id
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const config = { method: 'get', headers: { origin: 'https://ninja-gaming-teal.vercel.app'} }
  const request = new Request(url, config)
  const res = await fetch(request)
  const guides = await res.json()

  if(res.ok) {
    return {
      guides
    }
  }
}