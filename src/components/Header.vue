<template>
  <div class="">
    <header class="header">
      <div class="headerBody">
        <div class="">
        <div class="headerLogo">
            <a href="#">
              <img src="../img/logo.png" height="36px" alt="" class="headerLogoImg">
              <p class="headerLogoText">Devias kit</p>
            </a>
          </div>
          <div class="headerAds">
            <a href="#" class="headerAdsLink">
              <p class="headerAdsLinkButton"> FREE </p>
              <p class="headerAdsLinkText"> See our PRO version for more design components &amp; coded in React follow this link: https://devias.io/products/devias-kit-pro</p>
            </a>
          </div>
        </div>
        <div class="headerButton">
          <a href="#">
            <img src="../img/notification.png" height="20px" alt="" class="headeButtonrNotif">
          </a>
          <a href="#">
            <img src="../img/exit.png" height="20px" alt="" class="headerButtonExit">
          </a>
        </div>
      </div>
    </header>

    <aside class="side">
      <div class="sideAbout">
        <a href="#" class="sideAboutLink">
          <img src="../img/Roman.png" height="100px"  alt="" class="sideAboutLinkAvatar">
        </a>
        <p class="sideAboutName">Roman Kutepov</p>
        <p class="sideAboutRole">Brain Director</p>
      </div>
      <hr class="sideLine">
      <ul class="sideNavigation">
        <li class="sideNavigationList">
          <a href="#" class="sideNavigationListLink">
            <img src="../img/Dashboard.png"  alt="" class="sideNavigationListLinkImg">
            <p class="sideNavigationListLinkText">Dashboard</p>
          </a>
        </li>
        <li class="sideNavigationList">
          <a href="#" class="sideNavigationListLink">
            <img src="../img/Users.png" alt="" height="18px" class="sideNavigationListLinkImg">
            <p class="sideNavigationListLinkText">Users</p>
          </a>
        </li>
        <li class="sideNavigationList">
          <a href="products" class="sideNavigationListLink">
            <img src="../img/Products.png" alt="" class="sideNavigationListLinkImg">
            <p class="sideNavigationListLinkText">Products</p>
          </a>
        </li>
        <li class="sideNavigationList">
          <a href="#" class="sideNavigationListLink">
            <img src="../img/Authentication.png" alt="" class="sideNavigationListLinkImg">
            <p class="sideNavigationListLinkText">Authentication</p>
          </a>
        </li>
        <li class="sideNavigationList">
          <a href="#" class="sideNavigationListLink">
            <img src="../img/Typography.png" alt="" class="sideNavigationListLinkImg">
            <p class="sideNavigationListLinkText">Typography</p>
          </a>
        </li>
        <li class="sideNavigationList">
          <a href="#" class="sideNavigationListLink">
            <img src="../img/Icon.png" alt="" class="sideNavigationListLinkImg">
            <p class="sideNavigationListLinkText">Icons & Images</p>
          </a>
        </li>
      </ul>
      <hr class="sideLineTwo">
      <div class="sideSupport">
        <li class="sideSuportList">
          <p class="sideSupportListText">Support</p>
          <a href="#" class="sideSupportListLink">
            <img src="../img/Support.png" alt="" class="sideSupportListLinkImg">
            <p class="sideSupportListLinkText">Support</p>
          </a>
        </li>
      </div>
    </aside>

  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "src/variables/variables.scss";
@import "src/mixin/mixin.scss";

*{
  padding: 0;
  margin: 0;
  list-style-type: none;
}
body{
  background-color: $bgColor;
}

.header{
  background: $headerColor;
  height: 64px;
  align-items: center;

  a {
    text-decoration: none;
  }

  &Body{
    font-size: 14px;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &Logo{
    float: left;
    margin-left: 24px;

    &Img{
      float: left;

    }

    &Text{
      @include fontAds(#FFFFFF, 20px);
      margin-left: 40px;
      margin-right: 34px;
      margin-top: 6px;
    }
  }

  &Ads{
    float: left;
    width: 842px;
    padding: 6px;
    margin-left: 10px;
    margin-top: 3px;
    background: rgba(0,0,0,0.23); /* Цвет фона */
    border-radius: 4px;

    &Link{
      @include fontAds(#CDD1EA, 14px);
      display: flex;

      &Button{
        float: left;
        background: #26A69A;
        border-radius: 3px;
        color: #FFFFFF;
        padding: 5px;
        font-size: 10px;
      }

      &Text{
        //width: 810px;
        margin-left: 14px;
        margin-top: 3px;
      }
    }
  }

  &Button{
    a{
      margin: 10px;
    }
  }
}

.side{
  width: 270px;
  height: 1017px;
  background: white;
  float: left;

  a{
    text-decoration: none;
  }

  &About{
    margin-top: 24px;
    &Link{
      margin-left: 84px;
    }

    &Name{
      margin-top: 16px;
      margin-left: 79px;
      @include fontMenu(#3A3B3F, 16px);
    }

    &Role{
      margin-top: 6px;
      margin-left: 98px;
      @include fontMenu(#9EA0A5, 12px);
    }
  }

  &Line{
    color: #E4E7EB;
    margin-left: 15px;
    border: 1px solid #E4E7EB;
    width: 238px;
    margin-top: 23px;
  }

  ul{
    list-style: none;
  }

  &Navigation{
    padding: 20px;

    &List{
      margin-top: 36px;

      &Link{
        &Img{
          float: left;
          margin-left: 10px;
          margin-right: 10px;
        }

        &Text{
          height: 20px;
          padding: 3px 0 0 0;
          @include fontMenu(#66788A, 14px);
          font-weight: 500;
        }
      }
    }
  }

  &LineTwo{
    color: #E4E7EB;
    border: 1px solid #E4E7EB;
    width: 238px;
    margin-top: 23px;
  }


  &Support{

    &List{
      margin-top: 24px;

      &Text{
        padding: 5px;
        margin-top: 24px;
        margin-left: 100px;
        @include fontMenu(rgba(0, 0, 0, 0.328974), 15px);
      }

      &Link{

        &Img{
          float: left;
          margin-top: 21px;
          margin-left: 30px;
          margin-right: 10px;
        }

        &Text{
          margin-top: 21px;
          padding: 3px 0 0 0;
          @include fontMenu(#66788A, 14px);
          font-weight: 500;
        }
      }
    }
  }
}

</style>
