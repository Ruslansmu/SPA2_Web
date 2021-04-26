<template>
  <div id="App">
  <Header/>

    <div class="main">
      <div class="mainNav">
        <a href="#" class="mainNavName"> Profile </a>
        <a href="#" class="mainNavName"> Account </a>
        <a href="#" class="mainNavName"> Price Plans </a>
      </div>
      <div class="mainPage">
        <div class="mainPageUser">
          <MainInfo/>

        </div>
        <div class="mainPageForm">
          <BasicProfile/>
          <Notif/>
        </div>
    </div>
  </div>
</div>
</template>

<script>

import Header from "../components/Header.vue"
import MainInfo from "../components/Page1/MainInfo.vue"
import BasicProfile from "../components/Page1/BasicProfile.vue"
import Notif from "../components/Page1/Notif.vue"

export default {
  name: 'Page1',
  components: {
    Header,
    MainInfo,
    BasicProfile,
    Notif

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "src/mixin/mixin.scss";

.main{
  margin-left: 270px;

  &Nav{
    border: 1px solid #E4E7EB;
    display: flex;
    flex-direction: row;
    padding-left: 20px;

    &Name{
      @include fontMenu(#3A3B3F, 16px);
      margin: 0 15px;
      line-height: 3;
      text-decoration: none;
      position: relative;


      &:after{
        position: absolute;
        left:0;
        bottom:0;
        background-color: #1665D8;
        display: block;
            content: "";
        height: 2px;
        width: 0%;
        transition: width .3s ease-in-out;
      }
      &:hover:after{
        width: 100%;
      }
    }
  }

  &Page{
    display: flex;
    flex-direction: row;
  }
}

</style>
