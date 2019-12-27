<template>
  <section
    id="news"
    class="section"
    data-title="物流头条"
  >
    <div class="title">
      <h2 class="title-text">物流头条</h2>
    </div>
    <b-row>
      <b-col cols="4">
        <b-carousel
          id="news-carousel"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          fade
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <a
            href="http://baidu.com"
            target="_blank"
          >
            <b-carousel-slide
              class="img-box"
              caption="快递"
              text="中国快递剑指东南亚  百世服务再升级"
              img-height="160"
              img-src="http://lognet.oss-cn-hangzhou.aliyuncs.com/9YXqVzfyKCEQ.jpg?x-oss-process=image/quality,Q_80"
            >
            </b-carousel-slide>

          </a>

          <a
            href="http://logclub.com/articleInfo/MTQxMjAtYzc3OTg2ZjA="
            target="_blank"
          >
            <b-carousel-slide
              class="img-box"
              caption="零售电商"
              text="美团买菜进军深圳 今日开设首批9家线下服务店"
              img-height="160"
              img-src="http://lognet.oss-cn-hangzhou.aliyuncs.com/l0LLlVrLaTnj.png?x-oss-process=image/quality,Q_80"
            >
            </b-carousel-slide>
          </a>
          <a
            href="http://logclub.com/articleInfo/MTQxMTktYzc3OTg2ZjA="
            target="_blank"
          >
            <b-carousel-slide
              class="img-box"
              caption="零售电商"
              text="阿里1.5亿入股蒙牛旗下“天鲜配”，助力配送环节"
              img-height="160"
              img-src="http://lognet.oss-cn-hangzhou.aliyuncs.com/GlrqGYkaUCnu.png?x-oss-process=image/quality,Q_80"
            >
            </b-carousel-slide>
          </a>
        </b-carousel>
      </b-col>
      <b-col cols="8">
        <b-list-group id="news-list">
          <b-list-group-item
            href="#"
            class="flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              2019全国汽车物流行业年会 | 上汽安吉物流又双叒获多项大奖！
              <small>15分钟前</small>
            </div>
          </b-list-group-item>

          <b-list-group-item
            href="#"
            class="flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              德邦，生死劫还是涅槃重生？
              <small class="text-muted">1小时前</small>
            </div>
          </b-list-group-item>

          <b-list-group-item
            href="#"
            disabled
            class="flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              四家快递公布最新业绩，顺丰件量增速最高；京东发布配送机器人4.0...
              <small class="text-muted">1天前</small>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </section>
</template>
<style scoped>
#news {
  margin-top: 10px;
}
#news-carousel {
  width: 400px;
}
#section-activity {
  width: 400px;
}
#news-list {
  margin-left: 10px;
}
.img-box {
  height: 240px;
}
.list-group-item-action {
  color: black;
}
</style>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>