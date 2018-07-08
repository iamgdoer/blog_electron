<template>
  <div class="swiper">
    <div class="carousel">
      <el-carousel 
        ref="carousel"
        @change="itemChange" 
        :interval="5000" 
        arrow="hover" 
        height="400px">
          <el-carousel-item v-for="(item, index) in list" :key="index">
            <img :src="item.src" />
          </el-carousel-item>
      </el-carousel>
    </div>
    <ul class="titles">
      <li 
        :class="index === currentIndex ? 'active' : ''" 
        v-for="(item, index) in list" 
        :key="index"
        @mouseover="chooseItem(index)">
        <h3 class="title">{{item.title}}</h3>
        <p v-if="index === currentIndex">{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
      list: [
        {
          src: 'http://img.tuku.cn/file_thumb/201710/m2017100421355835.jpg',
          title: '周柏豪演唱会',
          desc: '2018-7-8东莞'
        },
        {
          src: 'http://img.tuku.cn/file_thumb/201710/m2017100421354322.jpg',
          title: '周柏豪',
          desc: '啊哈哈哈哈'
        },
        {
          src: 'http://img.tuku.cn/file_thumb/201710/m2017100421345727.jpg',
          title: '周柏豪嗷嗷',
          desc: '热润肺'
        },
        {
          src: 'http://img.tuku.cn/file_thumb/201710/m2017100421354948.jpg',
          title: '额外风范儿',
          desc: '绯闻绯闻'
        },
        {
          src: 'http://img.tuku.cn/file_thumb/201710/m2017100421354948.jpg',
          title: '二二分',
          desc: '而而非'
        },
        {
          src: 'http://img.tuku.cn/file_thumb/201710/m2017100421354948.jpg',
          title: '二个人过',
          desc: '热哥哥'
        }
      ]
    };
  },
  mounted () {
    console.log(this.list);
  },
  methods: {
    itemChange (curr) {
      this.currentIndex = curr;
    },
    chooseItem (index) {
      this.$refs.carousel.setActiveItem(index);
    }
  }
}
</script>

<style scoped lang="scss">
  .swiper{
    display: flex;
    img{
      width: 100%;
    }
    .carousel{
      width: 75%;
    }
    .titles{
      width: 25%;
      height: 400px;
      background: #fff;
      li{
        height: 60px;
        padding-left: 12px;
        line-height: 60px;
      }
      .active{
        height: 100px;
        color: #fff;
        background: #778899;
        padding-top: 20px;
        line-height: 30px;
        box-sizing: border-box;
        .title{
          font-size: 20px; 
        }
      }
    }
  }
</style>
