<template>
  <div>
    <Main></Main>
    <Introduction></Introduction>
    <Favorite></Favorite>
    <Album></Album>
    <Blog></Blog>
  
  </div>
</template>

<script>
import Main from '@/views/Home/Main'
import Introduction from '@/views/Home/Introduction'
import Favorite from '@/views/Home/Favorite'
import Album from '@/views/Home/Album'
import Blog from '@/views/Home/Blog'
export default {
  components: {
    Main,
    Introduction,
    Favorite,
    Album,
    Blog
  }
}
</script>
