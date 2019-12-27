<template>
  <div>
    <section id="news" class="section" data-title="物流头条">
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
            <a href="http://baidu.com" target="_blank">
              <b-carousel-slide
                class="img-box"
                caption="快递"
                text="中国快递剑指东南亚  百世服务再升级"
                img-height="160"
                img-src="http://lognet.oss-cn-hangzhou.aliyuncs.com/9YXqVzfyKCEQ.jpg?x-oss-process=image/quality,Q_80"
              ></b-carousel-slide>
            </a>

            <a href="http://logclub.com/articleInfo/MTQxMjAtYzc3OTg2ZjA=" target="_blank">
              <b-carousel-slide
                class="img-box"
                caption="零售电商"
                text="美团买菜进军深圳 今日开设首批9家线下服务店"
                img-height="160"
                img-src="http://lognet.oss-cn-hangzhou.aliyuncs.com/l0LLlVrLaTnj.png?x-oss-process=image/quality,Q_80"
              ></b-carousel-slide>
            </a>
            <a href="http://logclub.com/articleInfo/MTQxMTktYzc3OTg2ZjA=" target="_blank">
              <b-carousel-slide
                class="img-box"
                caption="零售电商"
                text="阿里1.5亿入股蒙牛旗下“天鲜配”，助力配送环节"
                img-height="160"
                img-src="http://lognet.oss-cn-hangzhou.aliyuncs.com/GlrqGYkaUCnu.png?x-oss-process=image/quality,Q_80"
              ></b-carousel-slide>
            </a>
          </b-carousel>
        </b-col>
        <b-col cols="8">
          <b-list-group id="news-list">
            <b-list-group-item
              :href="'#/post/'+item.id+''"
              class="flex-column align-items-start"
              v-for="item in newsList"
              v-bind:key="item.id"
            >
              <div class="d-flex w-100 justify-content-between">
                {{ item.title }}
                <small class="news-source">罗戈网</small>
                <small>{{ item.create_time | changeTime }}</small>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </section>

    <section id="news" class="section" data-title="报告">
      <div class="title">
        <h2 class="title-text">报告</h2>
      </div>
      <b-row>
        <b-col>
          <b-list-group id="docs-list">
            <b-list-group-item
              :href="'#/doc/'+item.id+''"
              class="flex-column align-items-start"
              v-for="item in docsList"
              v-bind:key="item.id"
            >
              <div class="d-flex w-100 justify-content-between">
                <small>{{ item.uploader }}</small>
                <small>{{ item.create_time | changeTime }}</small>
                <small>上传了文档</small>
                {{ item.title }}
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </section>
  </div>
</template>
<style>
article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
body {
  background-color: #f9f9f9;
}
</style>
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
import { fetchList } from "@/api/posts";
import { fetchDocList } from "@/api/document";
import * as timeago from "timeago.js";
export default {
  name: "home",
  data() {
    return {
      slide: 0,
      sliding: null,
      newsList: [],
      listQuery: {
        page: 1,
        limit: 7
      },
      docsList: [],
      docListQuery: {
        page: 1,
        limit: 7
      }
    };
  },
  filters: {
    changeTime(val) {
      let time = new Date(val); //先将接收到的json格式的日期数据转换成可用的js对象日期
      return timeago.format(time, "zh_CN"); //转换成类似于几天前的格式
    }
  },
  created() {
    this.getNewsList();
    this.getDocsList();
  },
  methods: {
    getNewsList() {
      console.log("获取新闻列表..");
      fetchList(this.listQuery).then(response => {
        this.newsList = response.data.items;
        // this.total = response.data.total;
        // console.log(typeof response.data.data.items);
      });
    },
    getDocsList() {
      console.log("获取文档列表..");
      fetchDocList(this.docListQuery).then(response => {
        this.docsList = response.data.items;
        // this.total = response.data.total;
        // console.log(typeof response.data.data.items);
      });
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>