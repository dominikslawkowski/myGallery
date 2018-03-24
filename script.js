
$("document").ready(function(){

for (var i = 1; i <= 24; i++) {
	
		$("#galeria").append("<div class=\"foto\" id=\"foto"+i+"\"> \
							 	<img>\
							 	<div class=\"btnDelete\" id=\"btnDelete"+i+"\"> X </div>	\
							 </div>");

		$(".foto:last-of-type > img").attr({
			"src" : "foto/foto" + i + ".jpg"
		});

	}
});


var srcFoto; //zmienna globalna przechowyjąca adres klikniętego zdjęcia
var numberFoto = 1; //zmienna globalna przechowująca numer kliknietego zdjęcia
var deleteOption = false;

function setFotoSrc(src)
{
	$("#currFoto > img").attr({
			"src" : src
		});
}

function moveRight(number)
{
	if(number < 24)
			{
				number++;
			}
			else {number = 1;}

			srcFoto = "foto/foto" + number + ".jpg";
			setFotoSrc(srcFoto);

			return number;
}

function moveLeft(number)
{
	if(number > 1)
			{
				number--;
			}
			else {number = 24;}

			srcFoto = "foto/foto" + number + ".jpg";
			setFotoSrc(srcFoto);

			return number;
}

$("document").ready(function(){

	$('div[id*="foto"]').click(function(){
		var number = (this.id).substring(4);
		srcFoto = $("#foto"+number+" > img").attr("src"); 
		numberFoto = number;
	});

	$('div[id*="btnDelete"]').click(function(){
				var number = (this.id).substring(9);
				$('#foto' + number).animate({
					'opacity': '0',
				}, 5);
				$('#foto' + number).delay(200).fadeOut();
			});	
});

$("document").ready(function(){

		$(".foto").click(function(){

			if(!deleteOption)
			{
				$("#container").append(
					"<div id=\"dim\"> </div> \
					 <div id=\"currFoto\"> \
						<img> \
					 	<div id=\"close\">Return</div> \
					 	<div id=\"left\"> <div class=\"help\"> < </div> </div>\
					 	<div id=\"right\"> <div class=\"help\"> > </div> </div>\
					 </div>"
					);
				
				setFotoSrc(srcFoto);

				$("#close").click(function(){
					$("#dim").remove();
					$("#currFoto").remove();

				});

				$("#left").click(function(){
					numberFoto = moveLeft(numberFoto);
				});

				$("#right").click(function(){
					numberFoto = moveRight(numberFoto);
				});

	 		}
		});
	
});

$("document").ready(function(){

	$(".delete").click(function(){
		if(!deleteOption)
		{
			$(".foto").addClass("delete_active");
			$(".btnDelete").attr(
				{
					"style": "display: block; opacity: 1"
				}
				);
			$(this).html("Back");
			deleteOption = true;	
		}else
		{
			$(".foto").removeClass("delete_active");
			$(".btnDelete").attr(
				{
					"style": "display: none; opacity: 0"
				}
				);
			$(this).html("Delete");
			deleteOption = false;
		}
		
	});
});
