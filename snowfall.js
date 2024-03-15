
class Snowfall

{
	constructor(in_bild , in_anz_bilder = 50 , in_speed = 1)
	{
      this.bild                   = in_bild;
			this.snow_fall_speed 	      = 1;	
      this.max_img                = 250;
      this.max_speed              = 5;

      if ( in_speed > this.max_speed)
      {
        console.log ("snowfall.js warning");
        in_speed = this.max_speed;
      }

      if (in_anz_bilder >this.max_img)
      {
        console.log("snowfall.js warning")
        in_anz_bilder    = this.max_img;
      }

			this.snow_img_count 	      = in_anz_bilder;
			this.all_img 			          = Array();
			this.curr_y_pos_in_deg      = 0;
			this.sin_left_add           = 0;
      
      this.init();
  }
  init()
  {

			for (let x=1 ; x  < this.snow_img_count ; x++)

			{
				var tmp_elm 		    = document.createElement("IMG");    // << <img/>
				tmp_elm.src 		    = "snow.png";						// img src ="snow.png"
				tmp_elm.style.top 	= "0px";							//img src= "snow.png" style = "top:0px"
				tmp_elm.style.left	= "0px";
				tmp_elm.pos_top		  = 0.0;
				tmp_elm.pos_left  	= 0.0;

				//tmp_elm.id			= "snow"+ (x + 1 );

				document.body.appendChild(tmp_elm);

				this.setRandomPos (tmp_elm);
				// das img in ein array speichern
				this.all_img.push(tmp_elm);
			}

				var int_id = setInterval( this.run.bind(this), 32 );

	}

			//const PI = 3.14;

			//const G = 9.81;

			// alle IMG Tags der Seite lesen

			//all_img = document.getElementsByTagName("IMG");

			//for ( var i = 0; i < all_img.length; i++ )

			//	{

			//		setRandomPos (all_img[i])

			//	}

	run()

			{
				for ( var i = 0; i < this.all_img.length; i++ )
				{
					this.snowfall(this.all_img[i]);
				}
				//setTimeout( run, 1 );
			}

			// etrster Aufruf der alles startet

			//run();

			//clearInterval (int_id);	   


			//var curr_pos_top = 0;

			//var curr_pos_left = 0;


			//var new_pos_top = 0;

			//var new_pos_left = 0;

	snowfall(img_tag)

			{

				//img_tag.pos.top		

				//img_tag.pos.left	

				//console.log( img_tag);

				// aktuelle Position holen

				//curr_y_pos_top  = img_tag.pos.top ;

				//curr_pos_left = img_tag.pos.left ;


				this.curr_y_pos_in_deg = this.deg2rad( img_tag.pos_top * 0.5 );
				this.sin_left_add      = Math.sin( this.curr_y_pos_in_deg ) * 1;
				//sin_left_add         = Math.round( sin_left_add );
				// neue position berechnen

				img_tag.pos_top        = img_tag.pos_top + this.snow_fall_speed + (img_tag.width * 0.05);
				img_tag.pos_left       = img_tag.pos_left + this.sin_left_add;
				// neue position schreiben
				img_tag.style.top      = img_tag.pos_top + "px";
				img_tag.style.left     = img_tag.pos_left + "px";

				if ( img_tag.pos_top > window.innerHeight)
				{
					this.setRandomPos(img_tag);
				}
				//setTimeout( snowfall , 32 );  // << 30 FPS   < 60 FPS : 16 ms
			}
			//console.log(curr_pos_top)
			 setRandomPos(img___tag)

			{

			img___tag.pos_top		     = Math.random() * (-1 * window.innerHeight) - 100;
			img___tag.pos_left		   = Math.random() * window.innerWidth;
			img___tag.style_top 	   = img___tag.pos_top + "px";
			img___tag.style_left 	   = img___tag.pos_left +"px";
			img___tag.width          = Math.random() * 30 + 15;
			//img_tag.style.width = Math.random() *30 + 15 + "px";
			}

	deg2rad( deg )
			{
				//return deg * Math.PI / 180;  
				return deg * Math.PI * 0.0055555555555556;  // 1/180 

			}

}
