var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;

var p_object="";
var b_object="";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        p_object=Img;
        p_object.scaleToWidth(150);
        p_object.scaleToHeight(140); 
     p_object.set({top:player_y,left:player_x});
     canvas.add(p_object);
    });
    }
    function new_block(get_image)
    {
        fabric.Image.fromURL(get_image,function(Img)
        {
            b_object=Img;
            b_object.scaleToWidth(block_image_width);
            b_object.scaleToHeight(block_image_height); 
         b_object.set({top:player_y,left:player_x});
         canvas.add(b_object);
        });
        }
        window.addEventListener("keydown",my_keydown);
        function my_keydown(e)
        {
            keyPressed = e.keyCode;
            console.log(KeyPressed);
            if (e.shiftKey && keyPressed == '80')
            {
console.log("p and shift pressed together");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("cw").innerHTML=block_image_width;
document.getElementById("hw").innerHTML=block_image_height;         
        }
        if (e.shiftKey && keyPressed == '77')
        {
console.log("m and shift pressed together");
block_image_width=block_image_width-10;
block_image_height=block_image_height-10;
document.getElementById("cw").innerHTML=block_image_width;
document.getElementById("hw").innerHTML=block_image_height;         
    }
        if (keyPressed == '87'){
            new_block('wall.jpg');
            console.log("w")
        }
        if (keyPressed == '71'){
            new_block('groung.jpg');
            console.log("g")
        } if (keyPressed == '76'){
            new_block('light_green.jpg');
            console.log("l")
        } 
         if (keyPressed == '84'){
            new_block('trunk.jpg');
            console.log("t")
        } if (keyPressed == '82'){
            new_block('roof.jpg');
            console.log("r")
        } if (keyPressed == '89'){
            new_block('yellow_wall.jpg');
            console.log("y")
        } if (keyPressed == '68'){
            new_block('dark_green.jpg');
            console.log("d")
        } if (keyPressed == '85'){
            new_block('unique.jpg');
            console.log("u")
        }
        if (keyPressed == '67'){
            new_block('cloud.jpg');
            console.log("c")
        }
        if (keyPressed == '37')
        {
            console.log("left");
            left();
        }
        if (keyPressed == '38')
        {
            console.log("up");
            up();
        }
        if (keyPressed == '39')
        {
            console.log("right");
            right();
        }
        if (keyPressed == '40')
        {
            console.log("down");
            down();
        }
    }