 <template>
  <div>
    <item-top :playList="playList"></item-top>
    <item-list :itemList="itemList"></item-list>
  </div>

</template>
<script>
import ItemTop from "@/components/item/ItemTop.vue";
import ItemList from "@/components/item/ItemList.vue";
export default {
  name: "itemMusic",
  components: {
    ItemTop,
    ItemList,
  },
  data() {
    return {
      itemId: [], //歌单id
      playList: {}, //歌单详情
      itemList: [], //歌单歌曲
    };
  },
  created() {
    this.itemId = JSON.parse(this.$route.query.id);
    //获取歌单详情
    this.$http.get("/playlist/detail?id=" + this.itemId).then((res) => {
      // console.log(res);
      // console.log(res.data.playlist);
      this.playList = res.data.playlist;
    });
    //获取歌单列表
    this.$http
      .get("/playlist/track/all?id=" + this.itemId + "&limit=10&offset=1")
      .then((res) => {
        // console.log(res);
        this.itemList = res.data.songs;
        console.log(this.itemList);
        // console.log(res.data.playlist);
        // this.playList = res.data.playlist;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style>
</style>
