$(function(){
    $('#submitBtn').on('mousemove',function(){
      var dateInp = $("select.date-select").find(":selected").text()
      var monthInp = $("select.month-select").find(":selected").text()
      if(monthInp==="January" && dateInp<23){
        $('.card-title').text('Capricorn')
      }
      if(monthInp==="January" && dateInp>=23){
        $(".card-title").text("Aquarius")
      }
      if(monthInp==="February" && dateInp<23){
        $(".card-title").text("Aquarius")
      }
      if(monthInp==="February" && dateInp>=23){
        $(".card-title").text("Pisces")
      }
      if(monthInp==="March" && dateInp<23){
        $(".card-title").text("Pisces")
      }
      if(monthInp==="March" && dateInp>=23){
        $(".card-title").text("Aries")
      }
      if(monthInp==="April" && dateInp<23){
        $(".card-title").text("Aries")
      }
      if(monthInp==="April" && dateInp>=23){
        $(".card-title").text("Taurus")
      }
      if(monthInp==="May" && dateInp<23){
        $(".card-title").text("Taurus")
      }
      if(monthInp==="May" && dateInp>=23){
        $(".card-title").text("Gemini")
      }
      if(monthInp==="June" && dateInp<23){
        $(".card-title").text("Gemini")
      }
      if(monthInp==="June" && dateInp>=23){
        $(".card-title").text("Cancer")
      }
      if(monthInp==="July" && dateInp<23){
        $(".card-title").text("Cancer")
      }
      if(monthInp==="July" && dateInp>=23){
        $(".card-title").text("Leo")
      }
      if(monthInp==="August" && dateInp<23){
        $(".card-title").text("Leo")
      }
      if(monthInp==="August" && dateInp>=23){
        $(".card-title").text("Virgo")
      }
      if(monthInp==="September" && dateInp<23){
        $(".card-title").text("Virgo")
      }
      if(monthInp==="September" && dateInp>=23){
        $(".card-title").text("Libra")
      }
      if(monthInp==="October" && dateInp<23){
        $(".card-title").text("Libra")
      }
      if(monthInp==="October" && dateInp>=23){
        $(".card-title").text("Scorpio")
      }
      if(monthInp==="November" && dateInp<23){
        $(".card-title").text("Scorpio")
      }
      if(monthInp==="November" && dateInp>=23){
        $(".card-title").text("Sagittarius")
      }
      if(monthInp==="December" && dateInp<23){
        $(".card-title").text("Sagittarius")
      }
      if(monthInp==="December" && dateInp>=23){
        $(".card-title").text("Capricorn")
      }
    });
});