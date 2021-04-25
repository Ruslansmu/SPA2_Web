<template>
  <div class="">
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
  </div>
</template>

<script>
export default {
  name: 'BasicProfile'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

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
    }
  }
}


</style>
