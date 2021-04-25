<template>
  <div class="">
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
</template>

<script>
export default {
  name: 'Notif'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/mixin/mixin.scss";

.main{
  margin-left: 270px;



  &Page{
    display: flex;
    flex-direction: row;


    &Form{
      margin-top: 30px;
      margin-right: 30px;
      width: 60vw;

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
