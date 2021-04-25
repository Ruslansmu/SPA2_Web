<template>
  <div class="mainProductsItem">
    <div class="mainProductsItemUpper">
      <img :src="Item.avatar_url" alt="" class="mainProductsItemUpperImg" width=90px height=90px>
      <p class="mainProductsItemUpperName">{{Item.login}}</p>
      <p class="mainProductsItemUpperText">Users code is {{Item.node_id}} </p>
    </div>
    <div class="mainProductsItemDown">
      <div class="mainProductsItemDownBox">
        <img src="../../img/Time.png" alt="" class="mainProductsItemDownBoxImg">
        <span class="mainProductsItemDownBoxText">Updated 2 hr ago</span>
      </div>
      <a href="#" class="mainProductsItemDownDownload">
        <img src="../../img/Download.png" alt="" class="mainProductsItemDownDownloadImg">
        <span class="mainProductsItemDownDownloadText">594 Downloads</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: ['Item']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/mixin/mixin.scss";

.main{
  margin-left: 295px;

  margin-right: 25px;

  &Products{
    display: flex;
    flex-wrap: wrap;
    margin-top: 19px;
    max-width: 100%;



    &Item{
      width: 30%;
      background-color: white;
      margin-bottom: 24px;
      box-shadow: -2px 4px 8px 0px rgba(34, 60, 80, 0.2);
      border-radius: 5px;
      margin-right: 38px;

      &Upper{
        display: flex;
        flex-direction: column;
        align-items: center;

        &::after{
          display: block;
          margin-top: 23px;
          content: "";
          border-bottom: 2px solid #E4E7EB;
          width: 90%;
        }

        &Img{
          margin-top: 26px;
        }
        &Name{
          @include fontMenu(#212B36, 18px);
          font-weight: 500;
        }
        &Text{
          @include fontMenu(#66788A, 14px);
          text-align: center;
          margin: 8px 28px 0 28px;
        }
      }
      &Down{
        display: flex;
        justify-content: space-around;

        &Box{
          display: flex;
          align-items: center;
          margin: 13px 0;
          &Text{
            @include fontMenu(#66788A, 12px);
            margin-left: 10px;
          }
        }
        &Download{
          display: flex;
          align-items: center;
          margin: 13px 0;
          text-decoration: none;
          &Text{
            margin-left: 10px;
            @include fontMenu(#66788A, 12px);
          }
        }

      }
    }
    &Down{
      display: flex;
      justify-content: space-around;
    }
  }

}

</style>
