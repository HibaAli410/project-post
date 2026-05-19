import { renderPost } from './renderpost.js'

//Get Posts From JSON APIs
export async function getPosts () {
  try {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await request.json()
    const posts = response.slice(0, 10)
    return posts
  } catch (error) {
    console.log('Error to fetch Posts: ', error)
  }
}

//Render Posts For UI
export async function renderPosts () {
  let main = document.querySelector('main')
  let posts = await getPosts()
  posts.forEach(post => {
    renderPost(post, main)
  })
}

//Get Selected Post
export async function selectedPost (userId, postId) {
  try {
    const fetchId = await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' +
        userId +
        '&id=' +
        postId
    )
    const responseId = await fetchId.json()
    return responseId
  } catch (err) {
    console.log('error fetching id is', err)
  }
}

//Params Id
export async function urlParamsId () {
  try {
    const params = new URLSearchParams(location.search)
    return {
      userId: params.get('userId'),
      postId: params.get('postId')
    }
  } catch (error) {
    console.error('Error from URL params:', error)
  }
}

//Comments
export async function comments (postId) {
  try {
    const requestComents = await fetch(
      'https://jsonplaceholder.typicode.com/comments?postId=' + postId
    )
    const comments = requestComents.json()
    return comments
  } catch (error) {
    console.error('Error from Comments :', error)
  }
}
// Get Post USer
export async function user (userId) {
  try {
    const requestUser = await fetch(
      'https://jsonplaceholder.typicode.com/users?id=' + userId
    )
    const user = await requestUser.json()
    console.log(requestUser)
    return user[0].name
  } catch (error) {
    console.error('Error from Comments :', error)
  }
}
