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
          <div class="mainPageUserInfo">
            <div class="mainPageUserInfoPersonal">

              <div class="mainPageUserInfoPersonalText">
                <p class="mainPageUserInfoPersonalTextName">Adrian Stefan</p>
                <p class="mainPageUserInfoPersonalTextPlace">Rm. Valcea, Romania</p>
                <p class="mainPageUserInfoPersonalTextTime">4:32PM (GMT-4)</p>
              </div>

              <img src="../img/Adrian.png" height="140px" width="140" alt="" class="mainPageUserInfoPersonalImg">

            </div>
            <div class="mainPageUserInfoButton">
              <a href="#" class="mainPageUserInfoButtonText">Upload Picture</a>
              <a href="#" class="mainPageUserInfoButtonText">Remove picture</a>
            </div>
          </div>
        </div>

        <div class="mainPageForm">
          <div class="mainPageFormProfile">

            <div class="mainPageFormProfileHead">
              <p class="mainPageFormProfileHeadText">Basic Profile</p>
              <p class="mainPageFormProfileHeadText">The information can be edited from yuor profile page</p>
            </div>

            <form class="mainPageFormProfileBody" action="index.html" method="post">
              <input type="text" class="mainPageFormProfileBodyInput" placeholder="First Name">
              <input type="text" class="mainPageFormProfileBodyInput" placeholder="Last Name">
              <input type="email" class="mainPageFormProfileBodyInput" placeholder="example@example.com">
              <input type="text" class="mainPageFormProfileBodyInput" placeholder="Phone Number">
              <input type="text" class="mainPageFormProfileBodyInput" placeholder="Country">
              <input type="text" class="mainPageFormProfileBodyInput" placeholder="City">
            </form>

            <a href="#" class="mainPageFormProfileFoot">Save Settings</a>

          </div>

          <div class="mainPageFormNotif">

            <div class="mainPageFormNotifHead">
              <p class="mainPageFormNotifHeadText">Notifications</p>
              <p class="mainPageFormNotifHeadText">Mange the notifications emailing</p>
            </div>

            <div class="mainPageFormNotifBody">

              <form action="" class="mainPageFormNotifBodyNotify ">
                <p class="mainPageFormNotifBodyNotifyText">Notifications</p>
                <span><input type="checkbox" class="mainPageFormNotifBodyNotifyData" ><label>Email</label></span>
                <span><input type="checkbox" class="mainPageFormNotifBodyNotifyData" ><label>Push notifications</label></span>
                <span><input type="checkbox" class="mainPageFormNotifBodyNotifyData" ><label>Text Messages</label></span>
                <span><input type="checkbox" class="mainPageFormNotifBodyNotifyData" ><label>Phone Calls</label></span>
              </form>
              <form action="" class="mainPageFormNotifBodyMess">
                <p class="mainPageFormNotifBodyMessText">Messages</p>
                <span><input type="checkbox" class="mainPageFormNotifBodyMessData" ><label>Email</label></span>
                <span><input type="checkbox" class="mainPageFormNotifBodyMessData" ><label>Push notifications</label></span>
                <span><input type="checkbox" class="mainPageFormNotifBodyMessData" ><label>Text Messages</label></span>
              </form>
            </div>

            <a href="#" class="mainPageFormNotifSave">Save</a>

          </div>

        </div>

    </div>
</div>

</div>
</template>

<script>

import Header from "../components/Header.vue"

export default {
  name: 'Page1',
  components: {
    Header

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

    &User{
      background-color: white;

      display: flex;
      flex-direction: column;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      border-radius: 2%;
      margin: 30px;
      max-height: 250px;

      width: 32vw;

      &Info{
        //margin: 25px;

        &Personal{
          display: flex;
          padding: 25px;

          border-bottom: 1px solid #E4E7EB;//#E4E7EB;

          &Text{
            &Name{
              @include fontMenu(#212529, 24px);
              font-weight: 500;
            }

            &Place{
              margin-top: 15px;
              @include fontMenu(#9EA0A5, 14px);
            }

            &Time{
              @include fontMenu(#9EA0A5, 14px);
            }

          }
          &Img{
            margin-left: 40px;
          }
        }
        &Button{
          display: flex;
          justify-content: space-around;
          &Text{
            @include fontMenu(#425A70, 12px);
            text-transform: uppercase;
            text-decoration: none;
            font-weight: 500;
            letter-spacing: 1.25px;
            margin: 22px 0;
            &:hover{
              color: #1665D8;
            }
          }
        }
      }
    }
    &Form{
      margin-top: 30px;
      margin-right: 30px;
      width: 60vw;
      &Profile{
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        border-radius: 2%;
        padding-bottom: 25px;
        //padding-top: 25px;
        &Head{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 25px;
          padding-bottom: 25px;
          border-bottom: 1px solid #E4E7EB;
          padding-top: 25px;
          &Text{
            @include fontMenu(#3A3B3F, 16px);

            &:last-child{
              @include fontMenu(#66788A, 14px);
              font-weight: 300;
              margin-left: 16px;
            }
          }
        }
        &Body{
          margin-top: 33px;
          //padding-bottom: 24px;
          margin-bottom: 25px;
          display: flex;
          flex-wrap: wrap;
          border-bottom: 1px solid #E4E7EB;

          &Input{
            border-radius: 5px;
            border-color: #E4E7EB;
            border-style: solid;
            outline-color: #1665D8;
            padding: 16px 120px 16px 16px;
            margin: 24px 0px;
            margin-left: 24px;
          }
        }
        &Foot{
          color: white;
          background: #1665D8;

          margin-left: 24px;
          padding: 12px 16px;
          border-radius: 5px;
          box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
          text-transform: uppercase;
          text-decoration: none;

        }
      }

      &Notif{
        margin-top: 25px;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        border-radius: 2%;
        padding-bottom: 30px;
        &Head{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 25px;
          padding-bottom: 25px;
          border-bottom: 1px solid #E4E7EB;
          padding-top: 25px;
          &Text{
            @include fontMenu(#3A3B3F, 16px);

            &:last-child{
              @include fontMenu(#66788A, 14px);
              font-weight: 300;
              margin-left: 16px;
            }
          }
        }

        &Body{
          display: flex;
          border-bottom: 1px solid #E4E7EB;
          margin-bottom: 25px;
          &Notify{
            display: flex;
            flex-direction: column;
            margin: 25px;

            &Data{
              margin-top: 20px;

            }

            &Text{
              @include fontMenu( #3A3B3F, 16px);
              font-weight: 500;
            }

          }

          &Mess{
            display: flex;
            flex-direction: column;
            margin: 25px;
            margin-left: 60px;


            &Data{
              margin-top: 20px;
            }

            &Text{
              @include fontMenu( #3A3B3F, 16px);
              font-weight: 500;
            }
          }
          label{
            margin-left: 10px;
            @include fontMenu( rgba(0, 0, 0, 0.6), 16px);
          }
        }
        &Save{
          background: white;
          @include fontMenu(#1665D8, 14px);
          margin-left: 24px;
          padding: 12px 16px;
          border-radius: 5px;
          box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
          text-transform: uppercase;
          text-decoration: none;
        }
      }
    }
  }
}

</style>
