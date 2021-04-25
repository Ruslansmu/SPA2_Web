<template>
  <div class="">

      <div class="mainPageUserInfo">
        <div class="mainPageUserInfoPersonal">

          <div class="mainPageUserInfoPersonalText">
            <p class="mainPageUserInfoPersonalTextName">Adrian Stefan</p>
            <p class="mainPageUserInfoPersonalTextPlace">Rm. Valcea, Romania</p>
            <p class="mainPageUserInfoPersonalTextTime">4:32PM (GMT-4)</p>
          </div>

          <img src="../../img/Adrian.png" height="140px" width="140" alt="" class="mainPageUserInfoPersonalImg">

        </div>
        <div class="mainPageUserInfoButton">
          <a href="#" class="mainPageUserInfoButtonText">Upload Picture</a>
          <a href="#" class="mainPageUserInfoButtonText">Remove picture</a>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'MainInfo'
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
  }
}

</style>
