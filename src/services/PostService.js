import { FBFirestore } from '@/helpers/firebaseConfig'

export default {
  posts() {
    return FBFirestore.collection('projects')
      .get()
      .then(snapshot => {
        const posts = []
        snapshot.forEach(doc => {
          posts.push(doc.data())
        })
        return posts
      })
  },
  post(id) {
    return FBFirestore.collection('projects')
      .where('id', '===', id)
      .get()
      .then(snapshot => {
        const posts = []
        snapshot.forEach(doc => {
          posts.push(doc.data())
        })
        return posts
      })
  }
}
