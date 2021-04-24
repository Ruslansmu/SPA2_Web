<template>
  
  <div class="">
    <div class="main">
      <div class="mainHead">
        <div class="mainHeadImg">
          <img src="/img/notepad.png" alt="" class="mainHeadImgPhoto">
        </div>
        <div class="mainHeadLogo">
          <img src="/img/Logotype.png" alt="" class="mainHeadLogoImg">
          <div class="mainHeadLogoText">
            <p class="mainHeadLogoTextName">Products</p>
            <p class="mainHeadLogoTextType">Devias Products</p>
          </div>
        </div>
      </div>

      <div class="mainBar">
        <form class="mainBarSearch" action="index.html" method="post">
          <a href="#" class="mainBarSearchLink">
            <img src="/img/Lupa.png" alt="" class="mainBarSearchLinkImg">
          </a>
          <input type="search" name="" value="" class="mainBarSearchInput" placeholder="Search users by name, id">
        </form>
        <a href="#" class="mainBarSearchProduct">New Product</a>
      </div>



      <div class="mainProducts">
        <div class="mainProductsItem">
          <div class="mainProductsItemUpper">
            <img src="/img/Dropbox.png" alt="" class="mainProductsItemUpperImg">
            <p class="mainProductsItemUpperName">Dropbox</p>
            <p class="mainProductsItemUpperText">Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.</p>
          </div>
          <div class="mainProductsItemDown">
            <div class="mainProductsItemDownBox">
              <img src="/img/Time.png" alt="" class="mainProductsItemDownBoxImg">
              <span class="mainProductsItemDownBoxText">Updated 2 hr ago</span>
            </div>
            <a href="#" class="mainProductsItemDownDownload">
              <img src="/img/Download.png" alt="" class="mainProductsItemDownDownloadImg">
              <span class="mainProductsItemDownDownloadText">594 Downloads</span>
            </a>
          </div>
        </div>

        <div class="mainProductsItem">
          <div class="mainProductsItemUpper">
            <img src="/img/Medium.png" alt="" class="mainProductsItemUpperImg">
            <p class="mainProductsItemUpperName">Medium Corporation</p>
            <p class="mainProductsItemUpperText">Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.</p>
          </div>
          <div class="mainProductsItemDown">
            <div class="mainProductsItemDownBox">
              <img src="/img/Time.png" alt="" class="mainProductsItemDownBoxImg">
              <span class="mainProductsItemDownBoxText">Updated 2 hr ago</span>
            </div>
            <a href="#" class="mainProductsItemDownDownload">
              <img src="/img/Download.png" alt="" class="mainProductsItemDownDownloadImg">
              <span class="mainProductsItemDownDownloadText">594 Downloads</span>
            </a>
          </div>
        </div>

        <div class="mainProductsItem">
          <div class="mainProductsItemUpper">
            <img src="/img/Slack.png" alt="" class="mainProductsItemUpperImg">
            <p class="mainProductsItemUpperName">Slack</p>
            <p class="mainProductsItemUpperText">Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.</p>
          </div>
          <div class="mainProductsItemDown">
            <div class="mainProductsItemDownBox">
              <img src="/img/Time.png" alt="" class="mainProductsItemDownBoxImg">
              <span class="mainProductsItemDownBoxText">Updated 2 hr ago</span>
            </div>
            <a href="#" class="mainProductsItemDownDownload">
              <img src="/img/Download.png" alt="" class="mainProductsItemDownDownloadImg">
              <span class="mainProductsItemDownDownloadText">594 Downloads</span>
            </a>
          </div>
        </div>

        <div class="mainProductsItem">
          <div class="mainProductsItemUpper">
            <img src="/img/Lyft.png" alt="" class="mainProductsItemUpperImg">
            <p class="mainProductsItemUpperName">Lyft</p>
            <p class="mainProductsItemUpperText">Lyft is an on-demand transportation company based in San Francisco, California.</p>
          </div>
          <div class="mainProductsItemDown">
            <div class="mainProductsItemDownBox">
              <img src="/img/Time.png" alt="" class="mainProductsItemDownBoxImg">
              <span class="mainProductsItemDownBoxText">Updated 2 hr ago</span>
            </div>
            <a href="#" class="mainProductsItemDownDownload">
              <img src="/img/Download.png" alt="" class="mainProductsItemDownDownloadImg">
              <span class="mainProductsItemDownDownloadText">594 Downloads</span>
            </a>
          </div>
        </div>

        <div class="mainProductsItem">
          <div class="mainProductsItemUpper">
            <img src="/img/GitHub.png" alt="" class="mainProductsItemUpperImg">
            <p class="mainProductsItemUpperName">GitHub</p>
            <p class="mainProductsItemUpperText">GitHub is a web-based hosting service for version control of code using Git.</p>
          </div>
          <div class="mainProductsItemDown">
            <div class="mainProductsItemDownBox">
              <img src="/img/Time.png" alt="" class="mainProductsItemDownBoxImg">
              <span class="mainProductsItemDownBoxText">Updated 2 hr ago</span>
            </div>
            <a href="#" class="mainProductsItemDownDownload">
              <img src="/img/Download.png" alt="" class="mainProductsItemDownDownloadImg">
              <span class="mainProductsItemDownDownloadText">594 Downloads</span>
            </a>
          </div>
        </div>

        <div class="mainProductsItem">
          <div class="mainProductsItemUpper">
            <img src="/img/Squarespace.png" alt="" class="mainProductsItemUpperImg">
            <p class="mainProductsItemUpperName">Squarespace</p>
            <p class="mainProductsItemUpperText">Squarespace provides software as a service for website building and hosting. Headquartered in NYC.</p>
          </div>
          <div class="mainProductsItemDown">
            <div class="mainProductsItemDownBox">
              <img src="/img/Time.png" alt="" class="mainProductsItemDownBoxImg">
              <span class="mainProductsItemDownBoxText">Updated 2 hr ago</span>
            </div>
            <a href="#" class="mainProductsItemDownDownload">
              <img src="/img/Download.png" alt="" class="mainProductsItemDownDownloadImg">
              <span class="mainProductsItemDownDownloadText">594 Downloads</span>
            </a>
          </div>
        </div>

      </div>
      <footer class="mainFooter">
        <p class="mainFooterAuthor">© Devias Io. 2019</p>
        <p class="mainFooterText">This is a free version of an end product which will be launched soon. If you want to get a free copy of the end product subscribe to our personal email list</p>
      </footer>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Page2'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/mixin/mixin.scss";

.main{
  margin-left: 295px;

  margin-right: 25px;

  &Head{
    padding-top: 16px;
    position: relative;

    &Img{

      &Photo{
        //background: linear-gradient(180deg, rgba(22, 101, 216, 0.47017) 0%, #1665D8 100%);
        width: 100%;
      }
    }

    &Logo{
      margin-left: 24px;
      position: absolute;
      display: flex;
      top: 75%;
      &Text{
        display: flex;
        margin-left: 16px;
        flex-direction: column;
        justify-content: flex-end;
        &Name{
          @include fontMenu(#9EA0A5, 10px);
          text-transform: uppercase;
        }
        &Type{
          @include fontMenu(#3A3B3F, 20px);
          font-weight: 500;
        }
      }
    }
  }
  &Bar{
    margin-top: 95px;
    display: flex;
    justify-content: space-between;

    &Search{
      width: 520px;
      //margin-left: 24px;
      display: flex;
      border-radius: 5px;
      background: white;
      box-shadow: gray;


      &Link{
        padding-right: 14px;
        padding-top: 10px;
        margin-left: 13px;

      }
      &Input{
        border-style: none;
        padding:  auto;
        padding-right: 60%;


      }
      &Product{
        color: white;
        font-size: 14px;
        padding: 10px 15px;
        background: #47B881;
        border-radius: 5px;
        margin-right: 34px;
        box-shadow: gray;
        text-decoration: none;
        text-transform: uppercase;
        @include fontMenu(white, 14px);
        letter-spacing: 1.25px;

      }
    }
  }

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
  &Footer{
    &::before{
      display: block;
      content: "";
      border-top: 2px solid #E4E7EB;
      margin-top: 23px;
      width: 100%;
    }

    &Author{
      margin-top: 16px;
      @include fontMenu(#616161, 14px);
    }
    &Text{
      margin-top: 4px;
      @include fontMenu(#616161, 14px);
    }
  }
}

</style>
