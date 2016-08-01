// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

const renderGrill = ( grill ) => {
  let $container = $( '#grill' );
  $container.empty()
  let $grill = $( '<h3>' ).text( grill.sourceDisplayName )
  let $img = $( '<img>' ).attr( 'src', grill.imageUrlsBySize[90] )
  // render the image
  $grill.append( $('<li>').append($img) );
  $container.append( $grill );
}

const getGrills = (e) => {
  e.preventDefault()
  let food = e.target.meats.value
  $.getJSON('/grills', {food}).done(( grills ) => {
    console.log(grills)
    let i = Math.floor(Math.random()*grills.matches.length)
    let grill = grills.matches[i]
    // grills.matches.forEach(( grill ) => {
      renderGrill( grill );
    // })
  })
}

const renderShows = ( show ) => {
  let $container = $( '#show-list' );
  // $container.empty()
  let $newRow = $('<div class="row">')
  let $lastRow =$('.row').eq(-1)
  let $form = $(`<form data-url="/bbqueue/new">`);
  let $show = $( '<div class="five columns">' )
  let $img = $( '<img>' ).attr( 'src', show.artwork_208x117 )
  let $save = $('<input type="submit" name="save" value="save">')
  $show.append($form.append($img,$save))
  $lastRow.append( $show );
  $form.submit(createBBQ)
}

let counter = 0
const getShows = (e) => {
  e.preventDefault()

  let choice = e.target.title.value
  $( '#show-list' ).empty()
  counter = 0;
  $.getJSON('/shows', {choice}).done(( shows ) => {
    console.log(shows)
    shows.results.forEach(( show ) => {
      let $container = $( '#show-list' );
      let $newRow = $('<div class="row">')
      if(counter % 2 === 0){
        $container.append($newRow);
      }
      renderShows( show );
      counter++
      // console.log(counter)
    })
  })
}

const getBBQ = (e) => {
  e.preventDefault()
  $('#featured').text("Your Netflix BBQueue")
  $( '#show-list' ).empty()
  counter = 0;
  $.getJSON('/bbqueue').done(( shows ) => {
    shows.forEach(( show ) => {
      let $container = $( '#show-list' );
      let $newRow = $('<div class="row">')
      if(counter % 2 === 0){
        $container.append($newRow);
      }
      let $lastRow =$('.row').eq(-1)
      let $show = $( '<div class="five columns">' )
      let $img = $( '<img>' ).attr( 'src', show.image ).attr('display','block')
      // let $pair = $('<input type="submit" name="getGrill" value="Pair">')
      let $delete = $(`<input type="submit" value="Binge Watched" class="delete">`).attr('data-url',`/bbqueue/${show.id}`)
      $show.append($img).append($delete)
      $lastRow.append( $show );
      $('.delete').click(deleteItem);
      counter++
    })
  })
}


const createBBQ=(e)=>{
  e.preventDefault();
console.log('hi')
  let $children = $(e.target).children();
  $children.eq(1).val('Added to BBQueue')
  let data =  {
                title    : "dummy",
                image    : $children.eq(0).attr('src'),
                meat     : "dummy"
              }
  $.post('/bbqueue',data)
  .done(function(){
    console.log(arguments);
    })
}

const deleteItem = (e) =>{
  let url = $(e.target).attr('data-url');
  $.ajax({
    url: url,
    method: 'delete'
  }).done(function(){
    console.log(arguments);
    $(e.target).parent().remove();
    // getBBQ(e)
  })
}

$(function() {
  $('#grillin').submit(getGrills);
  $('#watchin').submit(getShows);
  $('#bbq').submit(getBBQ);
})
