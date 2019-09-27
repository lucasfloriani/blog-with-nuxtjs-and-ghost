import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'https://demo.ghost.io',
  key: '22444f78447824223cefc48062',
  version: 'v2'
})

export async function getPosts () {
  return await api.posts.browse({
    limit: 'all',
    include: 'tags,authors'
  })
    .catch((err) => {
      console.error(err)
    })
}

export async function getPost (postSlug) {
  return await api.post.read({ slug: postSlug })
    .catch((err) => {
      console.error(err)
    })
}

export async function getPage (pageSlug) {
  return await api.pages.read({ slug: pageSlug })
    .catch((err) => {
      console.error(err)
    })
}
