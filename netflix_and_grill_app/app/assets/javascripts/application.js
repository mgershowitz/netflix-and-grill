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
  let $grill = $( '<h3>' ).text( grill.sourceDisplayName )
  let $img = $( '<img>' ).attr( 'src', grill.imageUrlsBySize[90] )
  // render the image
  $grill.append( $('<li>').append($img) );
  $container.append( $grill );
}

const getGrills = (e) => {
  e.preventDefault()
  console.log(e.target.elements.value)
  $.getJSON('/grills').done(( grills ) => {
    console.log(grills)
    grills.matches.forEach(( grill ) => {
      renderGrill( grill );
    })
  })
}

const renderShows = ( show ) => {
  let $container = $( '#show-list' );
  let $show = $( '<h3>' ).text( show.title )
  let $img = $( '<img>' ).attr( 'src', show.artwork_208x117 )
  // render the image
  $show.append( $('<li>').append($img) );
  $container.append( $show );
}

const getShows = (e) => {
  e.preventDefault()
  console.log(e.target.elements.value)
  $.getJSON('/shows').done(( shows ) => {
    console.log(shows)
    shows.results.forEach(( show ) => {
      renderShows( show );
    })
  })
}

$(function() {
  $('#grillin').submit(getGrills);
  $('#watchin').submit(getShows);
})
