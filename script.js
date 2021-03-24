$(function(){
    $('#submitBtn').on('mousemove',function(){
      var dateInp = $("select.date-select").find(":selected").text()
      var monthInp = $("select.month-select").find(":selected").text()
      if(monthInp==="January" && dateInp<=19){
        $('.card-title').text('Capricorn')
        $('.engName').text('The Sea-Goat')
        $('.planet').text('Earth')
        $('.abcde').text('Capricorn sign knows what he wants. This sign has good manners. This sign adores success and power. They does not allow emotions to blind him. Capricorn sign may fall ill because of anxiety. Capricorn woman loves beauty. Capricorn man is a strong with gentle heart.')  
      }
      if(monthInp==="January" && dateInp>=20){
        $(".card-title").text("Aquarius")
        $('.engName').text('The Water Carrier')
        $('.planet').text('Uranus')
      }
      if(monthInp==="February" && dateInp<=18){
        $(".card-title").text("Aquarius")
        $('.engName').text('The Water Carrier')
        $('.planet').text('Uranus')
      }
      if(monthInp==="February" && dateInp>=19){
        $(".card-title").text("Pisces")
        $('.engName').text('The Two Fish')
        $('.planet').text('Neptune')
        $('.abcde').text('Life is a huge stage for Pisces sign. People of Pisces sign may become good writers or artists. Pisces sign ambitions are few. People of Pisces sign are great romanticists. Pisces sign should abstain from troubles and overwork. Pisces woman is awfully sentimental. Pisces man is a real godsend for any woman.')
      }
      if(monthInp==="March" && dateInp<=20){
        $(".card-title").text("Pisces")
        $('.engName').text('The Two Fish')
        $('.planet').text('Neptune')
        $('.abcde').text('Life is a huge stage for Pisces sign. People of Pisces sign may become good writers or artists. Pisces sign ambitions are few. People of Pisces sign are great romanticists. Pisces sign should abstain from troubles and overwork. Pisces woman is awfully sentimental. Pisces man is a real godsend for any woman.')
      }
      if(monthInp==="March" && dateInp>=21){
        $(".card-title").text("Aries")
        $('.engName').text('The Ram')
        $('.planet').text('Mars')
        $('.abce').text('People of Aries sign are open-hearted and strong. Their main features are frankness and honesty. Aries sign loves work. Aries sign is true and fair in love. Aries sign is seldom ill. Aries woman is intellectual and extremely strong. Aries man is overflown with ideas and creative energy.')
      }
      if(monthInp==="April" && dateInp<=20){
        $(".card-title").text("Aries")
        $('.engName').text('The Ram')
        $('.planet').text('Mars')
        $('.abce').text('People of Aries sign are open-hearted and strong. Their main features are frankness and honesty. Aries sign loves work. Aries sign is true and fair in love. Aries sign is seldom ill. Aries woman is intellectual and extremely strong. Aries man is overflown with ideas and creative energy.')
      }
      if(monthInp==="April" && dateInp>=21){
        $(".card-title").text("Taurus")
        $('.engName').text('The Bull')
        $('.planet').text('Earth')
        $('.abcde').text('Taurus sign people are stubborn and accept things such as they are. Taurus sign is faithful and capable for strong love. Taurus sign and money are inseparable. Taurus sign is usually healthy. Taurus woman combines all remarkable qualities. Taurus man is created for woman who appreciates true values.')
      }
      if(monthInp==="May" && dateInp<=20){
        $(".card-title").text("Taurus")
        $('.engName').text('The Bull')
        $('.planet').text('Earth')
        $('.abcde').text('Taurus sign people are stubborn and accept things such as they are. Taurus sign is faithful and capable for strong love. Taurus sign and money are inseparable. Taurus sign is usually healthy. Taurus woman combines all remarkable qualities. Taurus man is created for woman who appreciates true values.')
      }
      if(monthInp==="May" && dateInp>=21){
        $(".card-title").text("Gemini")
        $('.engName').text('The Twins')
        $('.planet').text('Mercury')
        $('.abcde').text('Gemini sign is intellectual sign. People of Gemini sign are graceful and clever. For Gemini sign money and love are always not enough. Gemini sign love is illusory. Gemini sign may suffer from nervous breakdowns. Gemini woman is not interested in terrestrial passions. Gemini man is in permanent change.')
      }
      if(monthInp==="June" && dateInp<=20){
        $(".card-title").text("Gemini")
        $('.engName').text('The Twins')
        $('.planet').text('Mercury')
        $('.abcde').text('Gemini sign is intellectual sign. People of Gemini sign are graceful and clever. For Gemini sign money and love are always not enough. Gemini sign love is illusory. Gemini sign may suffer from nervous breakdowns. Gemini woman is not interested in terrestrial passions. Gemini man is in permanent change.')
      }
      if(monthInp==="June" && dateInp>=21){
        $(".card-title").text("Cancer")
        $('.engName').text('The Crab')
        $('.planet').text('Moon')
        $('.abcde').text('Cancer sign may suffer from melancholy and fears. Cancer sign likes to save money. Cancer woman is changeable in love. Cancer man is gallant and sentimental. Cancer sign may fall ill due to proper emotions. Modesty is characteristic for Cancer woman. Quality and pleasure are synonyms for Cancer.')
      }
      if(monthInp==="July" && dateInp<=22){
        $(".card-title").text("Cancer")
        $('.engName').text('The Crab')
        $('.planet').text('Moon')
        $('.abcde').text('Cancer sign may suffer from melancholy and fears. Cancer sign likes to save money. Cancer woman is changeable in love. Cancer man is gallant and sentimental. Cancer sign may fall ill due to proper emotions. Modesty is characteristic for Cancer woman. Quality and pleasure are synonyms for Cancer.')
      }
      if(monthInp==="July" && dateInp>=23){
        $(".card-title").text("Leo")
        $('.engName').text('The Lion')
        $('.planet').text('Sun')
        $('.abcde').text('Leadership is characteristic for Leo sign. Leo sign is a real friend. Leo sign is successful in all undertakings. Life without love does not exist for Leo sign. People of Leo sign are surprisingly viable. Almost all men easily fall in love with Leo woman. Leo man is a gentle protector and sentimental lover.')
      }
      if(monthInp==="August" && dateInp<=23){
        $(".card-title").text("Leo")
        $('.engName').text('The Lion')
        $('.planet').text('Sun')
        $('.abcde').text('Leadership is characteristic for Leo sign. Leo sign is a real friend. Life without love does not exist for Leo sign. People of Leo sign are surprisingly viable. Almost all men easily fall in love with Leo woman. Leo man is a gentle protector and sentimental lover.')
      }
      if(monthInp==="August" && dateInp>=24){
        $(".card-title").text("Virgo")
        $('.engName').text('The Maiden')
        $('.planet').text('Mercury')
        $('.abcde').text('Virgo sign is open-hearted, sincere, and likes punctuality, thrift and inventiveness. Virgo sign is practical. Virgo sign shares love quietly and equally. Virgo sign cares of the body and right nutrition. For Virgo woman beauty is truth. Virgo man unites sharp intelligence and earthly predilections.')
      }
      if(monthInp==="September" && dateInp<=22){
        $(".card-title").text("Virgo")
        $('.engName').text('The Maiden')
        $('.planet').text('Mercury')
        $('.abcde').text('Virgo sign is open-hearted, sincere, and likes punctuality, thrift and inventiveness. Virgo sign is practical. Virgo sign shares love quietly and equally. Virgo sign cares of the body and right nutrition. For Virgo woman beauty is truth. Virgo man unites sharp intelligence and earthly predilections.')
      }
      if(monthInp==="September" && dateInp>=23){
        $(".card-title").text("Libra")
        $('.engName').text('The Scales')
        $('.planet').text('Venus')
        $('.abcde').text('Libra sign is pleasant, kind, and active. Libra sign penetrates into the essence of any matter. Libra sign is extremely responsible. Love and balance are synonyms for Libra sign. Libra sign is physically and intellectually healthy. Libra woman thinks with man logic. Libra man does not like to say "No".')
      }
      if(monthInp==="October" && dateInp<=23){
        $(".card-title").text("Libra")
        $('.engName').text('The Scales')
        $('.planet').text('Venus')
        $('.abcde').text('Libra sign is pleasant, kind, and active. Libra sign penetrates into the essence of any matter. Libra sign is extremely responsible. Love and balance are synonyms for Libra sign. Libra sign is physically and intellectually healthy. Libra woman thinks with mans logic. Libra man does not like to say "No".')
      }
      if(monthInp==="October" && dateInp>=24){
        $(".card-title").text("Scorpio")
        $('.engName').text('The Scorpion')
        $('.planet').text('Pluto')
        $('.abcde').text('Scorpio sign is an expression of selfishness. Scorpio sign is philosopher by nature. Scorpio sign can achieve everything. Scorpio sign unites the reason and passions. Scorpio sign people are seldom ill. Scorpio woman possesses deep mysterious beauty. Scorpio man is passionate in all.')
      }
      if(monthInp==="November" && dateInp<=22){
        $(".card-title").text("Scorpio")
        $('.engName').text('The Scorpion')
        $('.planet').text('Pluto')
        $('.abcde').text('Scorpio sign is an expression of selfishness. Scorpio sign is philosopher by nature. Scorpio sign can achieve everything. Scorpio sign unites the reason and passions. Scorpio sign people are seldom ill. Scorpio woman possesses deep mysterious beauty. Scorpio man is passionate in all.')
      }
      if(monthInp==="November" && dateInp>=23){
        $(".card-title").text("Sagittarius")
        $('.engName').text('The Archer')
        $('.planet').text('Jupiter')
        $('.abcde').text('Sagittarius sign is a cheerful idealist. Sagittarius sign is very fortunate and quickly advances forward. Sagittarius sign love is superficial, but honest. Sagittarius sign is seldom ill and quickly recovers. Sagittarius woman is very independent. Sagittarius man thinks both with mind and heart.')
      }
      if(monthInp==="December" && dateInp<=21){
        $(".card-title").text("Sagittarius")
        $('.engName').text('The Archer')
        $('.planet').text('Jupiter')
        $('.abcde').text('Sagittarius sign is a cheerful idealist. Sagittarius sign is very fortunate and quickly advances forward. Sagittarius sign love is superficial, but honest. Sagittarius sign is seldom ill and quickly recovers. Sagittarius woman is very independent. Sagittarius man thinks both with mind and heart.')
      }
      if(monthInp==="December" && dateInp>=22){
        $(".card-title").text("Capricorn")
        $('.engName').text('The Sea-Goat')
        $('.planet').text('Earth')
        $('.abcde').text('Capricorn sign knows what he wants. This sign has good manners. This sign adores success and power. They does not allow emotions to blind him. Capricorn sign may fall ill because of anxiety. Capricorn woman loves beauty. Capricorn man is a strong with gentle heart.')
      }
    });
});