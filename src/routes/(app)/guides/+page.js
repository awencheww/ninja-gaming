/* Loading all data from API endpoint */
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const config = { method: 'get', headers: { origin: 'https://ninja-gaming-teal.vercel.app/'} }
  const request = new Request(url, config)
  const res = await fetch(request)
  const guides = await res.json()
  
  if(res.ok) {
    return {
      guides
    }
  }

  throw  error(401, 'Could not fetch the guides')
}