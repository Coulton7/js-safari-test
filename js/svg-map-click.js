document.addEventListener("DOMContentLoaded", function () {
  var allRegions = document.querySelectorAll("#Lands > *");
  allRegions.addEventListener("click", function () {
    var link = document.querySelector(this).getAttribute("id");
    var state;
    switch (true) {
      case link == "Land-Maine":
        state = "Maine";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".ME").classList.add("show");
        break;
      case link == "Land-NH":
        state = "New Hampshire";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".NH").classList.add("show");
        break;
      case link == "Land-Vt":
        state = "Vermont";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".VT").classList.add("show");
        break;
      case link == "Land-NewYork":
        state = "New York";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".NY").classList.add("show");
        break;
      case link == "Land-NewYork_2":
        state = "New York";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".NY").classList.add("show");
        break;
      case link == "Land-Mass":
        state = "Massachusetts";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".MA").classList.add("show");
        break;
      case link == "Land-Conn":
        state = "Connecticut";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".CT").classList.add("show");
        break;
      case link == "Land-Pennsylvania":
        state = "Pennsylvania";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".PA").classList.add("show");
        break;
      case link == "Land-RI":
        state = "Rhode Island";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".RI").classList.add("show");
        break;
      case link == "Land-NewJersey":
        state = "New Jersey";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".NJ").classList.add("show");
        break;
      case link == "Land-Del":
        state = "Delaware";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".DE").classList.add("show");
        break;
      case link == "Land-Md":
        state = "Maryland";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".MD").classList.add("show");
        break;
      case link == "Land-WestVirginia":
        state = "West Virginia";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".WV").classList.add("show");
        break;
      case link == "Land-Virginia_1_":
        state = "Virginia";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".VA").classList.add("show");
        break;
      case link == "Land-Virginia_2_":
        state = "Virginia";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".VA").classList.add("show");
        break;
      case link == "Land-NorthCarolina_1_":
        state = "North Carolina";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".NC").classList.add("show");
        break;
      case link == "Land-SouthCarolina":
        state = "South Carolina";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".SC").classList.add("show");
        break;
      case link == "Land-Georgia":
        state = "Georgia";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".GA").classList.add("show");
        break;
      case link == "Land-Florida":
        state = "Florida";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".FL").classList.add("show");
        break;
      case link == "Land-Alabama":
        state = "Alabama";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".AL").classList.add("show");
        break;
      case link == "Land-Mississippi":
        state = "Mississippi";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".MS").classList.add("show");
        break;
      case link == "Land-Tennessee":
        state = "Tennessee";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".Kingsport").classList.add("show");
        document.querySelector(".TN").classList.add("show");
        break;
      case link == "Land-Kentucky":
        state = "Kentucky";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".KY").classList.add("show");
        break;
      case link == "Land-Ohio":
        state = "Ohio";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".OH").classList.add("show");
        break;
      case link == "Land-Michigan_1_":
        state = "Michigan";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".MI").classList.add("show");
        break;
      case link == "Land-Michigan_2_":
        state = "Michigan";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".MI").classList.add("show");
        break;
      case link == "Land-Michigan_3_":
        state = "Michigan";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".MI").classList.add("show");
        break;
      case link == "Land-Indiana":
        state = "Indiana";
        document.querySelector(".Lombard").classList.add("show");
        document.querySelector(".IN").classList.add("show");
        break;
      case link == "Land-Illinois":
        state = "Illinois";
        document.querySelector(".Lombard").classList.add("show");
        document.querySelector(".IL").classList.add("show");
        break;
      case link == "Land-Wisconsin":
        state = "Wisconsin";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".Lombard").classList.add("show");
        document.querySelector(".WI").classList.add("show");
        break;
      case link == "Land-Minnesota":
        state = "Minnesota";
        document.querySelector(".Fairfield").classList.add("show");
        document.querySelector(".MN").classList.add("show");
        break;
      case link == "Land-Iowa":
        state = "Iowa";
        document.querySelector(".Marion").classList.add("show");
        document.querySelector(".IA").classList.add("show");
        break;
      case link == "Land-Missouri":
        state = "Missouri";
        document.querySelector(".Marion").classList.add("show");
        document.querySelector(".MO").classList.add("show");
        break;
      case link == "Land-Arkansas":
        state = "Arkansas";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".AR").classList.add("show");
        break;
      case link == "Land-Louisiana":
        state = "Louisiana";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".LA").classList.add("show");
        break;
      case link == "Land-Texas":
        state = "Texas";
        document.querySelector(".Corpus").classList.add("show");
        document.querySelector(".Odessa").classList.add("show");
        document.querySelector(".TX").classList.add("show");
        break;
      case link == "Land-Oklahoma":
        state = "Oklahoma";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".OK").classList.add("show");
        break;
      case link == "Land-Kansas":
        state = "Kansas";
        document.querySelector(".Marion").classList.add("show");
        document.querySelector(".KS").classList.add("show");
        break;
      case link == "Land-Nebraska":
        state = "Nebraska";
        document.querySelector(".Marion").classList.add("show");
        document.querySelector(".NE").classList.add("show");
        break;
      case link == "Land-SouthDakota":
        state = "South Dakota";
        document.querySelector(".Marion").classList.add("show");
        document.querySelector(".SD").classList.add("show");
        break;
      case link == "Land-NorthDakota":
        state = "North Dakota";
        document.querySelector(".Marion").classList.add("show");
        document.querySelector(".ND").classList.add("show");
        break;
      case link == "Land-Montana":
        state = "Montana";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".MT").classList.add("show");
        break;
      case link == "Land-Wyoming":
        state = "Wyoming";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".WY").classList.add("show");
        break;
      case link == "Land-Colorado":
        state = "Colorado";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".CO").classList.add("show");
        break;
      case link == "Land-NewMexico":
        state = "New Mexico";
        document.querySelector(".Odessa").classList.add("show");
        document.querySelector(".NM").classList.add("show");
        break;
      case link == "Land-Arizona":
        state = "Arizona";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".AZ").classList.add("show");
        break;
      case link == "Land-Utah":
        state = "Utah";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".UT").classList.add("show");
        break;
      case link == "Land-Idaho":
        state = "Idaho";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".ID").classList.add("show");
        break;
      case link == "Land-Washington":
        state = "Washington";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".WA").classList.add("show");
        break;
      case link == "Land-Oregona":
        state = "Oregon";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".OR").classList.add("show");
        break;
      case link == "Land-Nevada":
        state = "Nevada";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".NV").classList.add("show");
        break;
      case link == "Land-California":
        state = "California";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".CA").classList.add("show");
        break;
      case link == "Land-Alaska":
        state = "Alaska";
        document.querySelector(".Longview").classList.add("show");
        document.querySelector(".AK").classList.add("show");
        break;
      case link == "Land-Hawaii":
        state = "Hawaii";
        document.querySelector(".Rockford").classList.add("show");
        document.querySelector(".HI").classList.add("show");
        break;
      default:
        state = "US State";
        document.querySelector(".Rockford").classList.add("show");
        break;
    }

    allRegions.classList.remove("on");
    document.querySelector(".location-pop-up").modal("show");
    document.querySelector(this).classList.add("on");
    document.querySelector("body").classList.add("noscroll");
    document.querySelector(".location-pop-up").on("hidden.bs.modal", function () {
        allRegions.classList.remove("on");
        document.querySelector("body").classList.remove("noscroll");

        switch (true) {
          case link == "Land-Maine":
            state = "Maine";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".ME").classList.remove("show");
            break;
          case link == "Land-NH":
            state = "New Hampshire";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".NH").classList.remove("show");
            break;
          case link == "Land-Vt":
            state = "Vermont";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".VT").classList.remove("show");
            break;
          case link == "Land-NewYork":
            state = "New York";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".NY").classList.remove("show");
            break;
          case link == "Land-NewYork_2":
            state = "New York";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".NY").classList.remove("show");
            break;
          case link == "Land-Mass":
            state = "Massachusetts";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".MA").classList.remove("show");
            break;
          case link == "Land-Conn":
            state = "Connecticut";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".CT").classList.remove("show");
            break;
          case link == "Land-Pennsylvania":
            state = "Pennsylvania";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".PA").classList.remove("show");
            break;
          case link == "Land-RI":
            state = "Rhode Island";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".RI").classList.remove("show");
            break;
          case link == "Land-NewJersey":
            state = "New Jersey";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".NJ").classList.remove("show");
            break;
          case link == "Land-Del":
            state = "Delaware";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".DE").classList.remove("show");
            break;
          case link == "Land-Md":
            state = "Maryland";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".MD").classList.remove("show");
            break;
          case link == "Land-WestVirginia":
            state = "West Virginia";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".WV").classList.remove("show");
            break;
          case link == "Land-Virginia_1_":
            state = "Virginia";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".VA").classList.remove("show");
            break;
          case link == "Land-Virginia_2_":
            state = "Virginia";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".VA").classList.remove("show");
            break;
          case link == "Land-NorthCarolina_1_":
            state = "North Carolina";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".NC").classList.remove("show");
            break;
          case link == "Land-SouthCarolina":
            state = "South Carolina";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".SC").classList.remove("show");
            break;
          case link == "Land-Georgia":
            state = "Georgia";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".GA").classList.remove("show");
            break;
          case link == "Land-Florida":
            state = "Florida";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".FL").classList.remove("show");
            break;
          case link == "Land-Alabama":
            state = "Alabama";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".AL").classList.remove("show");
            break;
          case link == "Land-Mississippi":
            state = "Mississippi";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".MS").classList.remove("show");
            break;
          case link == "Land-Tennessee":
            state = "Tennessee";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".Kingsport").classList.remove("show");
            document.querySelector(".TN").classList.remove("show");
            break;
          case link == "Land-Kentucky":
            state = "Kentucky";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".KY").classList.remove("show");
            break;
          case link == "Land-Ohio":
            state = "Ohio";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".OH").classList.remove("show");
            break;
          case link == "Land-Michigan_1_":
            state = "Michigan";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".MI").classList.remove("show");
            break;
          case link == "Land-Michigan_2_":
            state = "Michigan";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".MI").classList.remove("show");
            break;
          case link == "Land-Michigan_3_":
            state = "Michigan";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".MI").classList.remove("show");
            break;
          case link == "Land-Indiana":
            state = "Indiana";
            document.querySelector(".Lombard").classList.remove("show");
            document.querySelector(".IN").classList.remove("show");
            break;
          case link == "Land-Illinois":
            state = "Illinois";
            document.querySelector(".Lombard").classList.remove("show");
            document.querySelector(".IL").classList.remove("show");
            break;
          case link == "Land-Wisconsin":
            state = "Wisconsin";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".Lombard").classList.remove("show");
            document.querySelector(".WI").classList.remove("show");
            break;
          case link == "Land-Minnesota":
            state = "Minnesota";
            document.querySelector(".Fairfield").classList.remove("show");
            document.querySelector(".MN").classList.remove("show");
            break;
          case link == "Land-Iowa":
            state = "Iowa";
            document.querySelector(".Marion").classList.remove("show");
            document.querySelector(".IA").classList.remove("show");
            break;
          case link == "Land-Missouri":
            state = "Missouri";
            document.querySelector(".Marion").classList.remove("show");
            document.querySelector(".MO").classList.remove("show");
            break;
          case link == "Land-Arkansas":
            state = "Arkansas";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".AR").classList.remove("show");
            break;
          case link == "Land-Louisiana":
            state = "Louisiana";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".LA").classList.remove("show");
            break;
          case link == "Land-Texas":
            state = "Texas";
            document.querySelector(".Corpus").classList.remove("show");
            document.querySelector(".Odessa").classList.remove("show");
            document.querySelector(".TX").classList.remove("show");
            break;
          case link == "Land-Oklahoma":
            state = "Oklahoma";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".OK").classList.remove("show");
            break;
          case link == "Land-Kansas":
            state = "Kansas";
            document.querySelector(".Marion").classList.remove("show");
            document.querySelector(".KS").classList.remove("show");
            break;
          case link == "Land-Nebraska":
            state = "Nebraska";
            document.querySelector(".Marion").classList.remove("show");
            document.querySelector(".NE").classList.remove("show");
            break;
          case link == "Land-SouthDakota":
            state = "South Dakota";
            document.querySelector(".Marion").classList.remove("show");
            document.querySelector(".SD").classList.remove("show");
            break;
          case link == "Land-NorthDakota":
            state = "North Dakota";
            document.querySelector(".Marion").classList.remove("show");
            document.querySelector(".ND").classList.remove("show");
            break;
          case link == "Land-Montana":
            state = "Montana";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".MT").classList.remove("show");
            break;
          case link == "Land-Wyoming":
            state = "Wyoming";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".WY").classList.remove("show");
            break;
          case link == "Land-Colorado":
            state = "Colorado";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".CO").classList.remove("show");
            break;
          case link == "Land-NewMexico":
            state = "New Mexico";
            document.querySelector(".Odessa").classList.remove("show");
            document.querySelector(".NM").classList.remove("show");
            break;
          case link == "Land-Arizona":
            state = "Arizona";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".AZ").classList.remove("show");
            break;
          case link == "Land-Utah":
            state = "Utah";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".UT").classList.remove("show");
            break;
          case link == "Land-Idaho":
            state = "Idaho";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".ID").classList.remove("show");
            break;
          case link == "Land-Washington":
            state = "Washington";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".WA").classList.remove("show");
            break;
          case link == "Land-Oregona":
            state = "Oregon";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".OR").classList.remove("show");
            break;
          case link == "Land-Nevada":
            state = "Nevada";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".NV").classList.remove("show");
            break;
          case link == "Land-California":
            state = "California";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".CA").classList.remove("show");
            break;
          case link == "Land-Alaska":
            state = "Alaska";
            document.querySelector(".Longview").classList.remove("show");
            document.querySelector(".AK").classList.remove("show");
            break;
          case link == "Land-Hawaii":
            state = "Hawaii";
            document.querySelector(".Rockford").classList.remove("show");
            document.querySelector(".HI").classList.remove("show");
            break;
          default:
            state = "US State";
            document.querySelector(".Rockford").classList.remove("show");
            break;
        }
      });
  });
});
