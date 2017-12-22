//evet pada link dii klik
$('.page-scroll').on('click', function(){

//ambil isi href
	var tujuan = $(this).attr('href');

//tangkap elemen ybs
	var elemenTujuan = $(tujuan);

//pindah scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50 
	}, 1000, 'swing')



});

//parallax
$(window).scroll(function) {
	var wScroll = $(this).scrollTop();

	$ ('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	
	});

});