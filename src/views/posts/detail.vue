<template>
  <div
    class="main"
    role="main"
  >
    <div class="article">
      <section class="article">
        <h1 id="article-title">{{ title }}</h1>
        <div class="article-info">
          <div class="_2mYfmT">
            <div class="article-author">
              {{ author }}
            </div>
            <div class="s-dsoj">
              <time datetime="2017-07-24T11:21:37.000Z">{{ pub_time }}</time><span>字数 741</span>
            </div>
          </div>
        </div>
        <article
          class="article-content"
          v-html="content"
        >

        </article>

      </section>
    </div>
    <aside class="_2OwGUo">
    </aside>
  </div>

</template>
<style scoped>
article {
  text-align: left;
  padding: 10px;
}
#article-title {
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  text-align: left;
}
.main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 66px);
  padding-top: 20px;
  font-size: 16px;
}
.main {
  box-sizing: initial;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}
._3Z3nHf,
.ouvJEz {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
}
._2OwGUo {
  flex-shrink: 0;
  width: 260px;
}
.ouvJEz {
  padding: 24px;
}
._1RuRku {
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
}
.rEsl9f {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  font-size: 13px;
}
._2mYfmT {
  display: flex;
  align-items: center;
}
._1NDgW7 {
  color: #969696;
  flex-shrink: 0;
}
._2rhmJa {
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 20px;
}
</style>
<script>
import { fetchPost } from "@/api/posts";
export default {
  name: "postsDetail",
  data() {
    return {
      newsList: [],
      title: null,
      content: null,
      author: null,
      pub_time: null
    };
  },
  created() {
    const id = this.$route.params && this.$route.params.id;
    this.getNewsList(id);
  },
  methods: {
    getNewsList(id) {
      console.log("获取新闻详情..");
      fetchPost(id).then(response => {
        this.content = response.data.content;
        this.title = response.data.title;
        this.author = response.data.author;
        this.pub_time = response.data.pub_time;
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