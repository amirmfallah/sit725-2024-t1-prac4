const cardList = [
  {
    title: "Kitten 1",
    image: "images/cat.jpg",
    link: "About Kitten 1",
    desciption: "Demo desciption about kitten 1",
  },
  {
    title: "Kitten 2",
    image: "images/cat2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/cat3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card small"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.path +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.desciption +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.path = $("#path").val();
  formData.desciption = $("#description").val();
  formData.subtitle = $("#subtitle").val();

  $.post('/api/cats', formData)
  alert("Cat post successful")
};

const getProjects = () => {

  $.get('/api/cats', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  })
}

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  getProjects();
  $(".modal").modal();
});
