export async function renderPost (post, main) {
  let div = document.createElement('div')
  div.classList.add('w-full')
  let link = document.createElement('a')
  let postId = post.id
  let userId = post.userId
  link.setAttribute(
    'href',
    './post-plateform/post.html?userId=' + userId + '&postId=' + postId
  )
  // for drage and drop
  const slotid = 'slot-' + postId
  const itemid = 'item-' + postId
  const drageslot = document.createElement('div')
  const drageitem = document.createElement('span')
  drageslot.setAttribute('class', slotid)
  drageitem.setAttribute('class', itemid)

  drageitem.textContent = post.title
  div.appendChild(link)
  link.appendChild(drageslot)
  drageslot.appendChild(drageitem)
  main.appendChild(div)
}
