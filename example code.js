

// my constants
var TOTAL_TIME = 5;

function load_cb(data_id, success) {

    if (!success) {
        console.log("b4w load failure");
        return;
    }

    m_app.enable_camera_controls();

    // place your code here
	create_text_display();

    var container = m_cont.get_canvas();
    container.addEventListener("mousedown", main_canvas_clicked_cb, false);
}

function create_text_display() {
	var left_div = document.createElement("div");
    left_div.id = "left_div_id";
    left_div.style.position = "relative";
	left_div.style.width = "50%";
	left_div.style.cssFloat = "left";
	left_div.style.color = "#A4C639";
	left_div.style.fontSize = "30px";
	left_div.style.fontFamily = "sans-serif";
	left_div.style.fontWeight = "900";
    left_div.innerHTML = "Click on the cube as many time as you can";
    document.body.appendChild(left_div);

	var right_div = document.createElement("div");
    right_div.id = "right_div_id";
    right_div.style.position = "relative";
	right_div.style.width = "50%";
	right_div.style.cssFloat = "right";
	right_div.style.textAlign = "right";
	right_div.style.color = "#A4C639";
	right_div.style.fontSize = "30px";
	right_div.style.fontFamily = "sans-serif";
	right_div.style.fontWeight = "900";
    right_div.innerHTML = "Time " + TOTAL_TIME;
    document.body.appendChild(right_div);
}

function main_canvas_clicked_cb(e) {

    var x = m_mouse.get_coords_x(e);
    var y = m_mouse.get_coords_y(e);

	if (!_timer_started) {
		timer();
		_timer_started = true;
		}

    if (!_timeout) {
		var obj = m_scenes.pick_object(x, y);
		if (obj) {
			if (m_scenes.get_object_name(obj)=="Cube")
				document.getElementById("left_div_id").innerHTML = "Score " + ++_score;
		}
	}
}

function timer() {
	var myVar = setInterval(myTimer, 1000);
	function myTimer() {
		document.getElementById("right_div_id").innerHTML = "Time " + (TOTAL_TIME - ++_seconds);
		if (_seconds == TOTAL_TIME) {
			clearInterval(myVar);
			_timeout = true;
			document.getElementById("left_div_id").innerHTML = "You scored " + _score + " press F5 to play again";
			document.getElementById("right_div_id").innerHTML = "TIME OUT";
		}
	}
}

});

// import the app module and start the app by calling the init method
b4w.require("my_simple_game_main").init();


//function setup_camera(cam_mode) {
//if (cam_mode == 0){
//	CAM_OFFSET[0]=0;
//	CAM_OFFSET[1]=4;
//	CAM_OFFSET[2]=1.5;
//    var camera = m_scs.get_active_camera();
//    m_cons.append_semi_soft(camera, _character, CAM_OFFSET, CAM_SOFTNESS);
//	}
//if (cam_mode == 1){
//	CAM_OFFSET[0]=0;
//	CAM_OFFSET[1]=23;
//	CAM_OFFSET[2]=-10;
//    var camera = m_scs.get_active_camera();
//    m_cons.append_semi_soft(camera, _character, CAM_OFFSET, CAM_SOFTNESS);
//    //m_cons.set_rotation(camera,0,100,0)
//	}
//if (cam_mode ==2){
//	CAM_OFFSET[0]=0;
//	CAM_OFFSET[1]=23;
//	CAM_OFFSET[2]=-10;
//    var camera = m_scs.get_active_camera();
//    m_cons.append_semi_soft(camera, _cam_target, CAM_OFFSET, CAM_SOFTNESS);
//    //m_cons.set_rotation(camera,0,100,0)
//	}


//}

toggle_cam_mode = toggle_cam_mode +1;
if{toggle_cam_mode > 2){
	toggle_cam_mode = 0
}
setup_camera(toggle_cam_mode);

	                break;
	            case "MW_BACKWARD":


	                break;
	            }
	        } else {

	        }


    };