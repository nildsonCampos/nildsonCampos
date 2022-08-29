(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
	
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#605e5e",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/shadowproject.png", id:"shadowproject"}
	]
};

// imagens
	
// De fundo da noticia + 4,4%
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2004,1128);

// De fundo da noticia
(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);

// ?
//(lib.Bitmap3 = function() {
//	this.initialize(img.Bitmap3);
//}).prototype = p = new cjs.Bitmap();
//p.nominalBounds = new cjs.Rectangle(0,0,160,124);

// ?
//(lib.Bitmap4 = function() {
//	this.initialize(img.Bitmap4);
//}).prototype = p = new cjs.Bitmap();
//p.nominalBounds = new cjs.Rectangle(0,0,156,124);
//-------------------------------------------------

// ?
//(lib.Bitmap5 = function() {
//	this.initialize(img.Bitmap5);
//}).prototype = p = new cjs.Bitmap();
//p.nominalBounds = new cjs.Rectangle(0,0,159,128);
//------------------------------------------------

	// Da logo do canal de noticia
(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,198);
//------------------------------------------------

// Da logo no rodape (AxTV)
	(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,60);
//------------------------------------------------

// Efeito no titulo da noticia
(lib.shadowproject = function() {
	this.initialize(img.shadowproject);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,36);
//-------------------------------------------------

// Substitui a imagem do canal de noticia quando não informado
(lib.Símbolo4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,198);
//------------------------------------------------

// Ajusta imagem do canal de noticia
(lib.Símbolo3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,198);
//------------------------------------------------

// Titulo da noticia
(lib.Símbolo2 = function() {
	this.initialize();

	// Camada 1 - Linha do titulo da notícia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("EhoXAQrMAAAghWMDQuAAAMAAAAhWg");
	this.shape.setTransform(668,-155);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1336,213.6);


(lib.Símbolo1 = function() {
	this.initialize();

	// Camada 1 Somente o texto
	this.Titulo = new cjs.Text("AxTV - canais abertos em HD via AxFibra.", "40px 'Gotham Book'", "#FFFFFF");
	this.Titulo.name = "Titulo";
	this.Titulo.lineHeight = 40;
	this.Titulo.lineWidth = 1000;
	this.Titulo.setTransform(-480,-100);

	this.addChild(this.Titulo);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-476.1,-50,978.7,145.5);


(lib.Imagem = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-668,-375.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-668,-375.7,1336,752);


(lib.FundoTextomc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#605e5e","#202020"],[0,1],0,57.1,0,-57).s().p("Eg+ZAJ1IAAzpMB8zAAAIAATpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-399.4,-62.9,799,126);


(lib.DatahoraNoticias = function() {
	this.initialize();

	// Layer 1
	this.DataHora = new cjs.Text("20/03/2016 20:00", "10px 'Gotham Book'", "#FFFFFF");
	this.DataHora.name = "DataHora";
	this.DataHora.textAlign = "right";
	this.DataHora.lineHeight = 14;
	this.DataHora.lineWidth = 231;
	this.DataHora.setTransform(153.1,-18.6);
	this.DataHora.shadow = new cjs.Shadow("rgba(0,0,,1)",0,0,5);

	this.addChild(this.DataHora);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81,-21.6,245,42);


(lib.canal = function() {
	this.initialize();

	// Camada 1 texto titulo da noticia
	this.Canal = new cjs.Text("Brasil", "27px 'Gotham Book'", "#FFFFFF");
	this.Canal.name = "Canal";
	this.Canal.lineHeight = 27;
	this.Canal.lineWidth = 974;
	this.Canal.setTransform(-380,-23.4);

	this.addChild(this.Canal);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-372.1,-18.4,978.3,34.2);


(lib.TextoClp = function() {
	this.initialize();

	// Layer 1
	this.Titulo = new lib.Símbolo1();
	this.Titulo.setTransform(184.6,-5.5);

	this.addChild(this.Titulo);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-291.5,-55,978.7,145.5);


(lib.FundoPadrao = function() {
	this.initialize();

	// Camada 2
	this.Imagem = new lib.Imagem();
	this.Imagem.setTransform(640,360.5);

	// Camada 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,0.5);

	this.addChild(this.instance,this.Imagem);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-15.3,1336,752);


// stage content:
(lib.NoticiasVermelhoHTML5Horizontal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function changeImage(mv, src) {
			if (mv) {
				if (!src) mv.visible = false;	
				var image = new Image(); 
		
				image.onload = function() {
					mv.visible = true;
					
					var img = new createjs.Bitmap(image);
		
					img.scaleX = mv.instance.getTransformedBounds().width / img.image.width;
					img.scaleY = mv.instance.getTransformedBounds().height / img.image.height;
		
					img.x = mv.instance.x;
					img.y = mv.instance.y;
		
					mv.removeAllChildren();
					mv.addChild(img);
				}; 
				
				image.src = src;
			}
		}
		
		Object.defineProperty (cjs.Container.prototype, 'source', {
			get: function () { return this.imageSource?this.imageSource:''; },
			set: function (value) {
				this.imageSource = value;
				changeImage(this, value);
			}
		});	
		
		var defineProperties = function(){};
		
		function changeText(mv, initialSize, value, minSize) {
				if (!mv) return;
				minSize = minSize?minSize:1;
				if (!mv.originalHeight) {
					mv.originalHeight = Math.round(mv.parent.nominalBounds.height);
					
					var res = /(\d+)px/g.exec(mv.font);
					if (res) {
						mv.originalFontSize = parseInt(res[1]);
						mv.fontComplement = mv.font.replace(res[0], '');
						mv.originalLineHeight = mv.lineHeight;
					}
					
					mv.originalFont = mv.font;
				}
				
				mv.text = value;
				mv.font = mv.originalFont;
				if (mv.originalLineHeight) mv.lineHeight = mv.originalLineHeight;
				var fontSize = mv.originalFontSize;
		
				var maxinc = 0;
				var firstSub = true;
				while (Math.round(mv.getMeasuredHeight()) > mv.originalHeight) {
					fontSize = fontSize - 1;
					if (fontSize <= minSize) {
						fontSize = minSize;
						if (value.length = 0) break;
						
						if (firstSub) {
							var txtratio = mv.originalHeight / Math.round(mv.getMeasuredHeight());	
							var len = Math.round(value.length * txtratio) 
							if (len > value.length) len = value.length
							if (len == 0) break;
							value = value.substring(0, len);
							firstSub = false;
						} else {
							value = value.substring(0, value.length - 1);
						}
						mv.text = value + '...';
		
						
					}
					var ratio = fontSize / mv.originalFontSize;
					mv.font = fontSize+"px "+mv.fontComplement;
					if (mv.originalLineHeight) mv.lineHeight = Math.round(mv.originalLineHeight * ratio);
				}
		}
		
		var definirTexto = changeText;
		
		Object.defineProperty (cjs.Text.prototype, "autotext", {
			get: function () { return this.text; },
			set: function (value) {
				changeText(this, -1, value, this.minfontsize);
			}
		});	
		
		var self = this;
		
		var ExternalInterface = {};
		ExternalInterface.addCallback = function(name, func) {
		  self[name] = func;  
		}
		
		ExternalInterface.addCallback("Iniciar", function(tema, titulo, texto, imagem, rodape, datahora, fonte, logo, smooth, aspect, volume, canal, categoria) {
			
		  this.Texto_Clp.Titulo.Titulo.minfontsize = 34;
		  this.Texto_Clp.Titulo.Titulo.autotext = titulo;
		
		  this.Imagem.Imagem.source = imagem;  
		  this.DataHora.DataHora.text = datahora;
		  this.Logo.source = logo;
		 
		  this.Canal.Canal.text = canal;
		
		  
		});
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// Layer 1 Texto do título
	this.Canal = new lib.canal();
	this.Canal.setTransform(647,510);
	this.Canal.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Canal).wait(15).to({x:642,alpha:1},0).wait(2));
  
	// fundocolorido Barra do título
	this.instance_2 = new lib.Símbolo2();
	this.instance_2.setTransform(1312,626.2,0.024,1,0,0,0,1340.9,104.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:668,regY:106.8,scaleX:0.51,x:970.5,y:628.2},0).wait(1).to({scaleX:0.99,x:645.2},0).wait(1).to({regX:666.5,regY:-0.2,scaleX:1.01,x:631.8,y:521.7},0).wait(1).to({regX:668,regY:106.8,scaleY:0.65,x:633.4,y:591.4},0).wait(1).to({scaleY:0.3,y:554.2},0).wait(1).to({regX:666.5,regY:-0.3,scaleY:0.19,x:631.8,y:521.7},0).wait(11));



	// FONTE
	this.DataHora = new lib.DatahoraNoticias();
	this.DataHora.setTransform(1492.8,544.5);

	this.timeline.addTween(cjs.Tween.get(this.DataHora).wait(17));

	// Logo imagem do logo Axtv
	this.Logo = new lib.Símbolo4();
	this.Logo.setTransform(1210,685,1.083,1.01,0,0,0,118.6,99);
    //this.Logo.setTransform(200,670,1.083,1.01,0,0,0,118.6,99);
	this.timeline.addTween(cjs.Tween.get(this.Logo).wait(17));

	// Logo imagem do logo - Notícia
	this.Logo = new lib.Símbolo3();
	this.Logo.setTransform(150,615,1.083,1.01,0,0,0,118.6,99);
    //this.Logo.setTransform(1200,670,1.083,1.01,0,0,0,118.6,99);
	this.timeline.addTween(cjs.Tween.get(this.Logo).wait(17));

	
	// TEXTO
	this.Texto_Clp = new lib.TextoClp();
	this.Texto_Clp.setTransform(561,500);
	this.Texto_Clp.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Texto_Clp).wait(11).to({y:658.5},0).to({y:618.5,alpha:1},2).wait(4));

	// FUNDO TEXTO barra inferior
	//this.instance_1 = new lib.FundoTextomc();
	//this.instance_1.setTransform(1308.2,300,0.035,1.581,0,0,0,405.9,1.3);
	//this.instance_1.alpha = 0.781;
	//this.instance_1._off = true;
	//this.instance_1.cache(-401,-100,803,300);
	this.instance_1 = new lib.FundoTextomc();
	this.instance_1.setTransform(1308.2,665.1,0.035,1.581,0,0,0,405.9,1.3);
	this.instance_1.alpha = 0.781;
	this.instance_1._off = true;
	this.instance_1.cache(-401,-710,803,700);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:406.5,regY:-1.3,scaleX:1.64,x:1308,y:659,alpha:0.84},3).to({alpha:0.93},3).wait(4));

	
	// Camada 1
	this.Imagem = new lib.FundoPadrao();
	this.Imagem.setTransform(640,3600.2,1.14,1.14,0,0,0,640,360.1);
	this.Imagem.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.Imagem).to({alpha:1},2).wait(15));

	// IMAGEM
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhuABDgMAAAiHAMDcBAAAMAAACHAg");
	this.shape.setTransform(652.1,388.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(518.6,292.3,1778.2,887.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
