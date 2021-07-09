<template>
  <div class="container py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Cards</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

      <div v-for="item in data" :key="item.id" class="col-4">
        <Card :data="item"/>
      </div>

    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: { Card },
  setup() {
    const data = [
      { 
        id: 1, 
        title: 'Bicycles', 
        background: { backgroundImage: `url(${require('@/assets/images/photo-bicycle.jpg')}` }, 
        image: require('@/assets/images/photo-bicycle.jpg'),
        icon: 'fas fa-bicycle',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero dolorum. Dicta laboriosam esse, nisi culpa ea nobis porro labore dignissimos aliquam repudiandae consequuntur atque soluta mollitia pariatur tenetur optio!',
        resourcePoolId: '',
        locationName: '',
      },
      { 
        id: 2, 
        title: 'Trains', 
        background: { backgroundImage: `url(${require('@/assets/images/photo-train.jpg')}` }, 
        image: require('@/assets/images/photo-train.jpg'),
        icon: 'fas fa-subway',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero dolorum. Dicta laboriosam esse, nisi culpa ea nobis porro labore dignissimos aliquam repudiandae consequuntur atque soluta mollitia pariatur tenetur optio!',
        resourcePoolId: '',
        locationName: '',
      },
      { 
        id: 3, 
        title: 'Rockets', 
        background: { backgroundImage: `url(${require('@/assets/images/photo-rocket.jpg')}` }, 
        image: require('@/assets/images/photo-rocket.jpg'),
        icon: 'fas fa-rocket',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero dolorum. Dicta laboriosam esse, nisi culpa ea nobis porro labore dignissimos aliquam repudiandae consequuntur atque soluta mollitia pariatur tenetur optio!',
        resourcePoolId: '',
        locationName: '',
      },
      { 
        id: 4, 
        title: 'Cars', 
        background: { backgroundImage: `url(${require('@/assets/images/photo-car.jpg')}` }, 
        image: require('@/assets/images/photo-car.jpg'),
        icon: 'fas fa-car',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero dolorum. Dicta laboriosam esse, nisi culpa ea nobis porro labore dignissimos aliquam repudiandae consequuntur atque soluta mollitia pariatur tenetur optio!',
        resourcePoolId: '',
        locationName: '',
      },
      { 
        id: 5, 
        title: 'Bicycles', 
        background: { backgroundImage: `url(${require('@/assets/images/photo-bicycle.jpg')}` }, 
        image: require('@/assets/images/photo-bicycle.jpg'),
        icon: 'fas fa-bicycle',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero dolorum. Dicta laboriosam esse, nisi culpa ea nobis porro labore dignissimos aliquam repudiandae consequuntur atque soluta mollitia pariatur tenetur optio!',
        resourcePoolId: '',
        locationName: '',
      },
      { 
        id: 6, 
        title: 'Trains', 
        background: { backgroundImage: `url(${require('@/assets/images/photo-train.jpg')}` }, 
        image: require('@/assets/images/photo-train.jpg'),
        icon: 'fas fa-subway',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero dolorum. Dicta laboriosam esse, nisi culpa ea nobis porro labore dignissimos aliquam repudiandae consequuntur atque soluta mollitia pariatur tenetur optio!',
        resourcePoolId: '',
        locationName: '',
      },
      { 
        id: 7, 
        title: 'Rockets', 
        background: { backgroundImage: `url(${require('@/assets/images/photo-rocket.jpg')}` }, 
        image: require('@/assets/images/photo-rocket.jpg'),
        icon: 'fas fa-rocket',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero dolorum. Dicta laboriosam esse, nisi culpa ea nobis porro labore dignissimos aliquam repudiandae consequuntur atque soluta mollitia pariatur tenetur optio!',
        resourcePoolId: '',
        locationName: '',
      },
      { 
        id: 8, 
        title: 'Cars', 
        background: { backgroundImage: `url(${require('@/assets/images/photo-car.jpg')}` }, 
        image: require('@/assets/images/photo-car.jpg'),
        icon: 'fas fa-car',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero dolorum. Dicta laboriosam esse, nisi culpa ea nobis porro labore dignissimos aliquam repudiandae consequuntur atque soluta mollitia pariatur tenetur optio!',
        resourcePoolId: '',
        locationName: '',
      },
    ]

    return { data }
  }
}
</script>

<style>

</style>