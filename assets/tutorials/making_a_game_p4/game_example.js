// check if module exists
if (b4w.module_check("example2_main"))
    throw "Failed to register module: example2_main";


b4w.register("example2_main", function(exports, require) {

var m_cont  = require("container");
var m_anim  = require("animation");
var m_app   = require("app");
var m_cfg   = require("config");
var m_data  = require("data");
var m_ctl   = require("controls");
var m_phy   = require("physics");
var m_cons  = require("constraints");
var m_scs   = require("scenes");
var m_scenes = m_scs;// attempt to use various code examples more easily
var m_vec3 = require("vec3");
var vec3_tmp = m_vec3.create();
var m_trans = require("transform");
var m_quat  = require("quat");
var m_obj = require("objects");
var m_mouse = require("mouse");
var m_tsr = require("tsr");
var m_preloader = require("preloader");
var m_debug = require("debug");
var m_time = require("time");


//////////////////////////////////////////some variables for ray test function////////////////////////
var rayid = null;
var rayhitfrac = null;
var rayobjhit = null;
var rayhittime = null;
var rayhitpos = m_vec3.create();
var rayhitnorm = null;
var tracedobject = null;
var tracingobject = null;
var tracesuccess = 0;


//////////////////////////////////////////vectors for general use//////////////////////////////////////
var delta_trans = new Float32Array(3);
var obj_pos = new Float32Array(3);
var target_pos = new Float32Array(3);
var timeoflastframe = 0;
var elapsedtime = 0;
var elapsed_sensor = m_ctl.create_elapsed_sensor();

var testvar1=0,testvar2=0,testvar3=0,testvar4=0,testvar5=0,testvar6=0;
 var left_div = document.createElement("div");
 var left_div2 = document.createElement("div");
 var left_div3 = document.createElement("div");
 var left_div4 = document.createElement("div");
 var left_div5 = document.createElement("div");
 var left_div6 = document.createElement("div");

function test1(){//test functions called by 1-4 keys, for override

}
function test2(){

}
function test3(){

}
function test4(){

}
function test5(){

}
function test6(){

}
var x = null;
var y = null;
var z = null;

var avatar = null;//for MY physics programming
var _character = null;
var _character_rig = null;
var _character_poscontrol = null;
var _cam_target = null;
var _cam_target2 = null;

var ROT_SPEED = 6;
var CAM_SOFTNESS = 0.2;
var CAM_OFFSET = new Float32Array([0, 4, 1.5]);
var toggle_cam_mode = 0;
var consoletext1 = null;
var last_clicked_object = null;
var togglevar=1;//bit of a testing variable
var playermovedir = 0;
var playerboat;
var playerboatattach;
var worldattach;
var boatdir=0;
var boatturn=0;
var pmountdummy;
var _previous_selected_obj = null;
var character_rig_parent = null;
var character_stored_pos = m_vec3.create();//stored character orientation for un-attaching from vehicle..
var character_stored_scale = m_vec3.create();
var character_stored_rot = m_quat.create();
var playerjumpenergy = 0;
var playerfallframes = 0;

var MAX_PLAYER_HP = 100;
var player_hp = MAX_PLAYER_HP;
var playerspeed = 0.1;

/////////////////////////////////////////my arrays for objects//////////////////////////////

var monster_ID = new Float32Array(999);//the monster object's pointer
var mINDEX = new Float32Array(999);//monster's array index for storing it's data in these arrays
var mSCALE = new Float32Array(999);//uniform scale variable (not a vector)
var mspeed = new Float32Array(990);
var mHP = new Float32Array(999);//health points
var mMAXHP = new Float32Array(999);
var mMP = new Float32Array(999);//mana points
var mMAXMP = new Float32Array(999);
var mDAMAGE = new Float32Array(999);


exports.init = function() {
    if(detect_mobile())
        var quality = m_cfg.P_LOW;
    else
        var quality = m_cfg.P_HIGH;

    m_app.init({
        canvas_container_id: "canvas3d",
        callback: init_cb,
        physics_enabled: true,
        quality: quality,
        show_fps: true,
        autoresize: true,
        alpha: false
    });
}
function init_cb(canvas_elem, success) {
    if (!success) {
        console.log("b4w init failure");
        return;
    }
    m_preloader.create_preloader();
    var load_path = m_cfg.get_std_assets_path() +
            "tutorials/making_a_game_p4/game_example.json";
    m_data.load(load_path, load_cb,preloader_cb);
}

function preloader_cb(percentage) {
    m_preloader.update_preloader(percentage+1);
}

function load_cb(data_id) {
  // _character = m_scs.get_first_character();

   _character = m_scs.get_object_by_name("character");
     avatar = m_scs.get_object_by_dupli_name("character",
                                                   "character_collider");
    _character_rig = m_scs.get_object_by_dupli_name("character",
                                                    "character_rig");


    poscontrol = m_scs.get_object_by_name("poscontrol");
_cam_target = m_scs.get_object_by_name("camtarget")
_cam_target_2 = m_scs.get_object_by_name("camtarget2")
_cam_target_3 = m_scs.get_object_by_name("camtarget3")
    var right_arrow = m_ctl.create_custom_sensor(0);
    var left_arrow  = m_ctl.create_custom_sensor(0);
    var up_arrow    = m_ctl.create_custom_sensor(0);
    var down_arrow  = m_ctl.create_custom_sensor(0);
    var touch_jump  = m_ctl.create_custom_sensor(0);

    if(detect_mobile()) {
        setup_control_events(right_arrow, up_arrow,
                             left_arrow, down_arrow, touch_jump);
    }

 setup_movement(up_arrow, down_arrow);
 setup_rotation(right_arrow, left_arrow);
 setup_jumping(touch_jump);
 setup_keys();
 setup_camera(0);
 create_text_display();
 setup_myobjects();

    var canvas_elem = m_cont.get_canvas();
   canvas_elem.addEventListener("mousedown", main_canvas_click, false);
   canvas_elem.addEventListener("touchstart", main_canvas_click, false);

}

function main_canvas_click(e) {
mytogglefullscreen();
    if (e.preventDefault)
        e.preventDefault();

    var x = m_mouse.get_coords_x(e);
    var y = m_mouse.get_coords_y(e);

    var obj = m_scenes.pick_object(x, y);

    if (obj) {
		last_clicked_object=(obj);
		object_clicked(obj);
		}


}

function movearray(item,index){//objects.forEach(movearray);

 objectname = m_scs.get_object_name(item);
 objectname = "_" + objectname;

 if (objectname.indexOf("terrain") > 0){
 	hide_object(item);
 	//move(item,.01 * index);//test
 }
}

function createdummy(s){//s=scale
   obj=m_scs.get_object_by_name("pointerdummy");
   var objcopy = m_obj.copy(obj,'newNameObject2');
   m_scenes.append_object(objcopy);
   show_object(objcopy);
   m_trans.set_scale(objcopy,s);
   return objcopy;
}


function dist2d(obj,targ){
	 		 temp1_pos = m_trans.get_translation(obj);
	 		 temp2_pos = m_trans.get_translation(targ);
	 		 temp1_pos[2]=0;
 		  temp2_pos[2]=0;
					var odist = m_vec3.distance(temp1_pos,temp2_pos);
 		 return odist;
}


function updateobjects(){
var objects = m_scs.get_all_objects();
objects.forEach(objectsarray);
}

function objectsarray(item,index){//objects.forEach(movearray);

var lod1dist=10;
var lod2dist=20;
 objectname = m_scs.get_object_name(item);
 objectname = "_" + objectname;


//if (m_scs.get_object_name(item) == "distancetester"){
// testvar2 = dist2d(item,_character);
//}

  if (m_trans.distance(item, _character) < lod1dist){
  	if (objectname.indexOf("terrain") > 0){
 		 show_object(item);
		 }
		 if (objectname.indexOf("lod") > 0){//hide lod 1 and 2
			 hide_object(item);
		 }
	 } else {
  	if (objectname.indexOf("terrain") > 0){
 		 hide_object(item);
		 }
  	if (m_trans.distance(item, _character) < lod2dist){
 		 if (objectname.indexOf("lod1") > 0){
			  show_object(item);
		  }
    if (objectname.indexOf("lod2") > 0){
			  hide_object(item);
		  }
			} else {
 		 if (objectname.indexOf("lod1") > 0){
			  hide_object(item);
		  }
    if (objectname.indexOf("lod2") > 0){
			  show_object(item);
		  }
		 }
 	}


}

var xpos=-50;
var zedpos=0;

function test1(){
var ocean = m_scs.get_object_by_name("ocean");
 m_trans.set_translation(ocean, 0,0, 0);
 testvar2=testvar2-testvar3;
 m_trans.set_translation(ocean, -50,testvar2, zedpos);

}

function test2(){
	var ocean = m_scs.get_object_by_name("ocean");
 m_trans.set_translation(ocean, 0,0, 0);
	 testvar2=testvar2+testvar3;
 m_trans.set_translation(ocean, -50,testvar2, zedpos);
//var objects = m_scs.get_all_objects();
//objects.forEach(testarray2);
}

function testarray2(item,index){//objects.forEach(movearray);
 objectname = m_scs.get_object_name(item);
 objectname = "_" + objectname;
  if (objectname.indexOf(" ") > 0){
 }
}

function test3(){
testvar3=testvar3+.1;
}


function test4(){
testvar3=testvar3-.1;

}

function test5(){
var ocean = m_scs.get_object_by_name("ocean");
 m_trans.set_translation(ocean, 0,0, 0);
 testvar2=-50;
 m_trans.set_translation(ocean, -50,testvar2, zedpos);
}

function test6(){
var ocean = m_scs.get_object_by_name("ocean");
 m_trans.set_translation(ocean, 0,0, 0);
 testvar2=50;
 m_trans.set_translation(ocean, -50,testvar2, zedpos);
}


function object_clicked(obj){
 if (m_scs.get_object_name(obj) == "boat"){
  if (playerboat == null){
   playerboat=obj;
   playerboatattach=m_scs.get_object_by_name("boatattach");
   matchpos(playerboatattach,_character);
//m_phy.set_character_move_type(_character, null);
			m_cons.append_stiff(_character, playerboatattach);





  } else {
   playerboat=null;//THIS IS THE CORRECT CODE


  m_trans.get_translation(_character,character_stored_pos);
  m_cons.remove(_character,false);//remove(obj, restore_transformopt)//THIS IS THE CORRECT CODE



//_character = m_scs.get_first_character();
//_character_rig = m_scs.get_object_by_dupli_name("character",
//                                                  "character_rig");

//			var x=character_stored_pos[0];
//			var y=character_stored_pos[1];
//			var z=character_stored_pos[2];
   //obj_pos target_pos
//   m_trans.get_translation(playerboat,target_pos);
//   m_trans.get_translation(_character,obj_pos);
  // m_vec3.add(obj_pos, target_pos, vec3_tmp);



//   m_vec3.copy(target_pos,vec3_tmp);
//
//   x=vec3_tmp[0];
//			y=vec3_tmp[1];
//   z=vec3_tmp[2];

//   var opos = m_vec3.create();
//   m_trans.get_translation(playerboat,opos);
//   opos[0]=0;
//   opos[1]=0;
//   opos[2]=-400;
//   var orot = m_quat.create();
//			m_trans.get_rotation(playerboat,orot);
////   orot[0]=0;
//   orot[1]=0;
//  orot[2]=.75;
//  orot[3]=1;

//m_phy.set_transform(_character, opos , orot);

	//		m_trans.set_translation(_character,10,10,10);



  }
// testvar1 = "playerboat = " + m_scs.get_object_name(playerboat); //obj_name; //m_scs.get_object_name(obj);   //" playerboat = " + obj_name;
 }
}

function matchpos(obj,targ){
get_translation(targ, obj_pos);
var x = obj_pos[0];
var y = obj_pos[1];
var z = obj_pos[2];
set_translation(obj,x,y,z);
}




function create_monster(){

//mINDEX[0]=0;
//var i= mINDEX[0];
//monster_ID[i] = m_scs.get_object_by_name("Cone");
//mSCALE[i] = 1;
var i = 0;
mspeed[i] = 0.1;
//mHP[i] = 10;
//mMAXHP[i] 10;
//mMP[i] = 0;
//mMAXMP[i] = 0;
//mDAMAGE[i] = 1;

}






function setup_myobjects(){

var obj = m_scs.get_object_by_name("boat");
move(obj,.1);



var monster = m_scs.get_object_by_name("Cone");


//var monster = monster_ID[0];
create_monster();

//m_ctl.create_sensor_manifold(monster, "MAIN", m_ctl.CT_CONTINUOUS, [elapsed_sensor], null, updatemonster);
var gamereference = m_scs.get_object_by_name("GameReference");
m_ctl.create_sensor_manifold(gamereference, "MAIN", m_ctl.CT_CONTINUOUS, [elapsed_sensor], null, updategame);



}





function updategame(obj,id) { //called every frame by sensor manifold
var t=m_time.get_timeline();
elapsedtime=t-timeoflastframe;
timeoflastframe = t;

 updateplayer();
 updatetext();//turn testing text on and off by commenting out this line of code
 update_vehicle();
 updateobjects();//TEMP FOR LOD FUNCTION
 updateocean();

//testvar5 = m_ctl.get_sensor_value(obj, id, 0);
//testvar6 = m_time.get_timeline();
 ///////////////////////////////////TESTING//////////////////////
// m_phy.set_character_move_type(_character, m_phy.CM_CLIMB);
//  testvar3 = testvar3 + 1;
}

function update_vehicle(){
 if (playerboat != null){
 m_trans.move_local(playerboat, 0, .1 * boatdir, 0);
 }
}

function updateocean(){
var ocean = m_scs.get_object_by_name("ocean");

}

function updateplayer(){

m_trans.move_local(_character, 0, playermovedir * playerspeed * elapsedtime * 16, 0);//  playermovedir * playerspeed, 0);

var dummy = m_scs.get_object_by_name("dummy");
obj=_character;
get_translation(obj, obj_pos);
m_vec3.copy(obj_pos,target_pos);//works !
m_vec3.copy(obj_pos,vec3_tmp);
obj_pos[2]=obj_pos[2]+1;
target_pos[2]=target_pos[2]-1;

tracingobject = obj;
m_phy.append_ray_test_ext(null, obj_pos,target_pos ,"ANY", gravitycallback, true, false, true, false);

get_translation(dummy,target_pos);
get_translation(obj,obj_pos);
//testvar3=target_pos[2];
//testvar1= m_scs.get_object_name(tracedobject);

if (tracesuccess == 0){

 if (playerfallframes >= 1){
// 	m_trans.move_local(obj, 0, 0, -.3);//fall
 } else {
  playerfallframes = playerfallframes + 1;
 }
} else {
 playerfallframes = 0;
}
tracesuccess = 0;


}

function gravitycallback(id, hit_fract, obj_hit, hit_time, hit_pos, hit_norm) {

//NOTE WILL USE HIT_FRACT TO SEE IF NPC SHOULD BE FALLING

tracesuccess = hit_fract;

rayhitpos[2]=hit_pos[2];
var dummy = m_scs.get_object_by_name("dummy");
hide_object(dummy);
//var x=obj_pos[0];
//var y=obj_pos[1];
set_translation(dummy,obj_pos[0],obj_pos[1],rayhitpos[2]);
if (m_trans.distance(tracingobject, dummy) < 2){


 if (playerjumpenergy <= 0){
	 playerjumpenergy = 0;
  	matchposgravity(tracingobject,dummy);

	} else {

 m_trans.move_local(obj, 0, 0, .2);
 playerjumpenergy = playerjumpenergy - 1;
 }
}
//NOTE TURN OFF COLLISION DETECTION OF NPC IN BLENDER SO I CAN JUST USE MY OWN COLISIONS

tracedobject=null;

if (obj_hit != null) {
move(obj_hit,.1);//test
tracedobject = obj_hit;
}

}

function matchposgravity(obj,targ){
get_translation(targ, obj_pos);
var x = obj_pos[0];
var y = obj_pos[1];
var z = obj_pos[2];
set_translation(obj,x,y,z+.02);
}

function updatemonster(obj,id) {

 var speed = 6;
 var elapsed = m_ctl.get_sensor_value(obj, id, 0);

var d = dist(obj,_character);//my 2d distance function
//testvar1=d;
if (d>2) {
	i=0;//future monster array ID number
move(obj,mspeed[i]);


} else {


}

point(obj,_character);
var dummy = m_scs.get_object_by_name("dummy");
get_translation(obj, obj_pos);
m_vec3.copy(obj_pos,target_pos);//works !
m_vec3.copy(obj_pos,vec3_tmp);
obj_pos[2]=obj_pos[2]+1;
target_pos[2]=target_pos[2]-1;


m_phy.append_ray_test_ext(null, obj_pos,target_pos ,"ANY", raytestcallback, true, false, true, false);

get_translation(dummy,target_pos);
get_translation(obj,obj_pos);
var fallbuffer=.05;//overlap so npc doesn't bob up and down
if (target_pos[2] > obj_pos[2]+fallbuffer){
	m_trans.move_local(obj, 0, 0, .05);
	}
if (target_pos[2] < obj_pos[2]-fallbuffer){
//	m_trans.move_local(obj, 0, 0, -.05);
	}


}

function point(obj,targ){//2 dimensional point function
 m_trans.get_translation(obj, obj_pos);
 m_trans.get_translation(targ, target_pos);
 var angleRadians = Math.atan2(target_pos[1] - obj_pos[1], target_pos[0] - obj_pos[0]);
 m_trans.set_rotation_euler(obj, 0, 0, angleRadians);
}

function move(obj,sp){

//mspeed[0]=0.1;
//var poop = 0.1;
m_trans.move_local(obj, 0, 0, sp);
}

function dist(obj,targ){
 m_trans.get_translation(obj, obj_pos);
 m_trans.get_translation(targ, target_pos);
 var c = m_vec3.distance(obj_pos,target_pos);
 return c;
}


function zdistance(obj,targ){
 m_trans.get_translation(obj, obj_pos);
 m_trans.get_translation(targ, target_pos);
 var z = Math.abs(obj_pos[2] - target_pos[2]);
 return z;
}

function translate(obj,x,y,z){
 m_trans.get_translation(obj, obj_pos);
 delta_trans[0]=x;
 delta_trans[1]=y;
 delta_trans[2]=z;
 m_vec3.add(obj_pos, delta_trans, obj_pos);
 m_trans.set_translation_v(obj, obj_pos);
}

function mytogglefullscreen(){
      if ((document.fullScreenElement && document.fullScreenElement !== null) ||
       (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
         	document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }

      }
}


function create_text_display() {
    left_div.id = "left_div_id";
    left_div.style.position = "relative";
 left_div.style.width = "50%";
 left_div.style.cssFloat = "left";
 left_div.style.color = "#00ba0f";
 left_div.style.fontSize = "30px";
 left_div.style.fontFamily = "sans-serif";
 left_div.style.fontWeight = "900";
    document.body.appendChild(left_div);
    left_div2.id = "left_div2_id";
    left_div2.style.position = "relative";
 left_div2.style.width = "50%";
 left_div2.style.cssFloat = "left";
 left_div2.style.color = "#42f4ee";
 left_div2.style.fontSize = "30px";
 left_div2.style.fontFamily = "sans-serif";
 left_div2.style.fontWeight = "900";
    document.body.appendChild(left_div2);
    left_div3.id = "left_div3_id";
    left_div3.style.position = "relative";
 left_div3.style.width = "50%";
 left_div3.style.cssFloat = "left";
 left_div3.style.color = "#04ff00";
 left_div3.style.fontSize = "30px";
 left_div3.style.fontFamily = "sans-serif";
 left_div3.style.fontWeight = "900";
    document.body.appendChild(left_div3);
    left_div4.id = "left_div4_id";
    left_div4.style.position = "relative";
 left_div4.style.width = "50%";
 left_div4.style.cssFloat = "left";
 left_div4.style.color = "#ffe900";
 left_div4.style.fontSize = "30px";
 left_div4.style.fontFamily = "sans-serif";
 left_div4.style.fontWeight = "900";
    document.body.appendChild(left_div4);
    left_div5.id = "left_div5_id";
    left_div5.style.position = "relative";
 left_div5.style.width = "50%";
 left_div5.style.cssFloat = "left";
 left_div5.style.color = "#ff6a00";
 left_div5.style.fontSize = "30px";
 left_div5.style.fontFamily = "sans-serif";
 left_div5.style.fontWeight = "900";
    document.body.appendChild(left_div5);
    left_div6.id = "left_div6_id";
    left_div6.style.position = "relative";
 left_div6.style.width = "50%";
 left_div6.style.cssFloat = "left";
 left_div6.style.color = "#ff0000";
 left_div6.style.fontSize = "30px";
 left_div6.style.fontFamily = "sans-serif";
 left_div6.style.fontWeight = "900";
    document.body.appendChild(left_div6);
}


function setup_movement(up_arrow, down_arrow) {
    var key_w     = m_ctl.create_keyboard_sensor(m_ctl.KEY_W);
    var key_s     = m_ctl.create_keyboard_sensor(m_ctl.KEY_S);
    var key_up    = m_ctl.create_keyboard_sensor(m_ctl.KEY_UP);
    var key_down  = m_ctl.create_keyboard_sensor(m_ctl.KEY_DOWN);
 //   var key_s     = m_ctl.create_keyboard_sensor(m_ctl.KEY_S);
var wheel_zoom = m_ctl.create_mouse_wheel_sensor();//example of event listener
    var key_o     = m_ctl.create_keyboard_sensor(m_ctl.KEY_O);
    var key_p    = m_ctl.create_keyboard_sensor(m_ctl.KEY_P);
    var key_l  = m_ctl.create_keyboard_sensor(m_ctl.KEY_L);


    var move_array = [
        key_w, key_up, up_arrow,
        key_s, key_down, down_arrow
    ];

      var mouse_array = [
        wheel_zoom, key_p, up_arrow,
        wheel_zoom, key_l, down_arrow
    ];




    var forward_logic  = function(s){return (s[0] || s[1] || s[2])};
    var backward_logic = function(s){return (s[3] || s[4] || s[5])};

    var MW_forward_logic  = function(s){return (s[0] || s[1] || s[2])};
    var MW_backward_logic = function(s){return (s[3] || s[4] || s[5])};


    function move_cb(obj, id, pulse) {
       if (playerboat == null){
        if (pulse == 1) {
            switch(id) {
            case "FORWARD":
            				playermovedir=-1;
                var move_dir = 1;
                //m_anim.set_speed(_character_rig, 10);
                m_anim.apply(_character_rig, "character_run_B4W_BAKED");
                break;
            case "BACKWARD":
             			playermovedir=1;
 															var move_dir = -1;
                m_anim.apply(_character_rig, "character_run_B4W_BAKED");
                break;
            }
        } else {
									   playermovedir=0;
            var move_dir = 0;
            m_anim.apply(_character_rig, "character_idle_01_B4W_BAKED");
        }

        //m_phy.set_character_move_dir(obj, move_dir, 0);
        m_anim.play(_character_rig);
        m_anim.set_behavior(_character_rig, m_anim.AB_CYCLIC);

					} else { //playerboat not null


        if (pulse == 1) {
            switch(id) {
            case "FORWARD":
													boatdir = 1;

                break;
            case "BACKWARD":
														boatdir = -1;
                break;
            }
										} else {
										boatdir = 0;
									}

						}
    };



        function MW_move_cb(obj, id, pulse) {
         if (pulse == 1) {
             switch(id) {
             case "MW_FORWARD":

toggle_cam_mode = toggle_cam_mode +1;
if(toggle_cam_mode > 3){
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


    m_ctl.create_sensor_manifold(_character, "FORWARD", m_ctl.CT_TRIGGER,
        move_array, forward_logic, move_cb);
    m_ctl.create_sensor_manifold(_character, "BACKWARD", m_ctl.CT_TRIGGER,
        move_array, backward_logic, move_cb);

    m_ctl.create_sensor_manifold(_character, "MW_FORWARD", m_ctl.CT_TRIGGER,
        mouse_array, MW_forward_logic, MW_move_cb);
    m_ctl.create_sensor_manifold(_character, "MW_BACKWARD", m_ctl.CT_TRIGGER,
        mouse_array, MW_backward_logic, MW_move_cb);

    m_anim.apply(_character_rig, "character_idle_01_B4W_BAKED");
    m_anim.play(_character_rig);
    m_anim.set_behavior(_character_rig, m_anim.AB_CYCLIC);
}

function setup_rotation(right_arrow, left_arrow) {
    var key_a     = m_ctl.create_keyboard_sensor(m_ctl.KEY_A);
    var key_d     = m_ctl.create_keyboard_sensor(m_ctl.KEY_D);
    var key_left  = m_ctl.create_keyboard_sensor(m_ctl.KEY_LEFT);
    var key_right = m_ctl.create_keyboard_sensor(m_ctl.KEY_RIGHT);


    var rotate_array = [
        key_a, key_left, left_arrow,
        key_d, key_right, right_arrow,
        elapsed_sensor,
    ];

    var left_logic  = function(s){return (s[0] || s[1] || s[2])};
    var right_logic = function(s){return (s[3] || s[4] || s[5])};

    function rotate_cb(obj, id, pulse) {

       var elapsed = m_ctl.get_sensor_value(obj, "LEFT", 6);
       if (playerboat == null) {
        if (pulse == 1) {
            switch(id) {
            case "LEFT":
																	m_trans.rotate_z_local(obj, ROT_SPEED * elapsedtime * .6)
                 //m_phy.character_rotation_inc(obj, elapsed * ROT_SPEED, 0);
                break;
            case "RIGHT":
																m_trans.rotate_z_local(obj, ROT_SPEED * elapsedtime * .6 *-1)
															 //m_phy.character_rotation_inc(obj, -elapsed * ROT_SPEED, 0);
                break;
            }
        }
							} else {

								 if (pulse == 1) {
									            switch(id) {
									            case "LEFT":
									              rot  =m_trans.get_rotation_euler(playerboat);
									            		m_trans.set_rotation_euler(playerboat, rot[0], rot[1], rot[2] + elapsed * ROT_SPEED);
									                break;
									            case "RIGHT":
									            		rot  =m_trans.get_rotation_euler(playerboat);
									            		m_trans.set_rotation_euler(playerboat, rot[0], rot[1], rot[2] - elapsed * ROT_SPEED);
									            				break;
									            }
        }

							}
    }

    m_ctl.create_sensor_manifold(_character, "LEFT", m_ctl.CT_CONTINUOUS,
        rotate_array, left_logic, rotate_cb);
    m_ctl.create_sensor_manifold(_character, "RIGHT", m_ctl.CT_CONTINUOUS,
        rotate_array, right_logic, rotate_cb);
}

function setup_jumping(touch_jump) {
    var key_space = m_ctl.create_keyboard_sensor(m_ctl.KEY_SPACE);
    var jump_cb = function(obj, id, pulse) {
     if (playerboat == null){
      //m_phy.character_jump(obj);
      playerjumpenergy=4;
					}
    }
    m_ctl.create_sensor_manifold(_character, "JUMP", m_ctl.CT_SHOT,
        [key_space, touch_jump], function(s){return s[0] || s[1]}, jump_cb);
}

function setup_keys() {//all other keys and eventually buttons
    var key_1 = m_ctl.create_keyboard_sensor(m_ctl.KEY_1);//key 1
    var test1_cb = function(obj, id, pulse) {
     test1();
    }
    m_ctl.create_sensor_manifold(null, "KEY1", m_ctl.CT_SHOT,
        [key_1], function(s){return s[0] || s[1]}, test1_cb);

    var key_2 = m_ctl.create_keyboard_sensor(m_ctl.KEY_2);//key 2
    var test2_cb = function(obj, id, pulse) {
     test2();
    }
    m_ctl.create_sensor_manifold(null, "KEY2", m_ctl.CT_SHOT,
        [key_2], function(s){return s[0] || s[1]}, test2_cb);

    var key_3 = m_ctl.create_keyboard_sensor(m_ctl.KEY_3);//key 3
    var test3_cb = function(obj, id, pulse) {
     test3();
    }
    m_ctl.create_sensor_manifold(null, "KEY3", m_ctl.CT_SHOT,
        [key_3], function(s){return s[0] || s[1]}, test3_cb);

    var key_4 = m_ctl.create_keyboard_sensor(m_ctl.KEY_4);//key 4
    var test4_cb = function(obj, id, pulse) {
     test4();
    }
    m_ctl.create_sensor_manifold(null, "KEY4", m_ctl.CT_SHOT,
        [key_4], function(s){return s[0] || s[1]}, test4_cb);

    var key_5 = m_ctl.create_keyboard_sensor(m_ctl.KEY_5);//key 5
    var test5_cb = function(obj, id, pulse) {
     test5();
    }
    m_ctl.create_sensor_manifold(null, "KEY5", m_ctl.CT_SHOT,
        [key_5], function(s){return s[0] || s[1]}, test5_cb);

    var key_6 = m_ctl.create_keyboard_sensor(m_ctl.KEY_6);//key 6
    var test6_cb = function(obj, id, pulse) {
     test6();
    }
    m_ctl.create_sensor_manifold(null, "KEY6", m_ctl.CT_SHOT,
        [key_6], function(s){return s[0] || s[1]}, test6_cb);
}


function setup_control_events(right_arrow, up_arrow,
                              left_arrow, down_arrow,
                              jump) {

    var touch_start_pos = new Float32Array(2);

    var move_touch_idx;
    var jump_touch_idx;

    var tap_elem = document.getElementById("control_tap");
    var control_elem = document.getElementById("control_circle");
    var tap_elem_offset = tap_elem.clientWidth / 2;
    var ctrl_elem_offset = control_elem.clientWidth / 2;

    function touch_start_cb(event) {
        event.preventDefault();

        var w = window.innerWidth;

        var touches = event.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            var x = touch.clientX;
            var y = touch.clientY;

            if (x > w / 2) // right side of the screen
                break;

            touch_start_pos[0] = x;
            touch_start_pos[1] = y;
            move_touch_idx = touch.identifier;

            tap_elem.style.visibility = "visible";
            tap_elem.style.left = x - tap_elem_offset + "px";
            tap_elem.style.top  = y - tap_elem_offset + "px";

            control_elem.style.visibility = "visible";
            control_elem.style.left = x - ctrl_elem_offset + "px";
            control_elem.style.top  = y - ctrl_elem_offset + "px";
        }
    }

    function touch_jump_cb (event) {
        event.preventDefault();

        var touches = event.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            m_ctl.set_custom_sensor(jump, 1);
            jump_touch_idx = touch.identifier;
        }
    }

    function touch_move_cb(event) {
        event.preventDefault();

        m_ctl.set_custom_sensor(up_arrow, 0);
        m_ctl.set_custom_sensor(down_arrow, 0);
        m_ctl.set_custom_sensor(left_arrow, 0);
        m_ctl.set_custom_sensor(right_arrow, 0);

        var w = window.innerWidth;

        var touches = event.changedTouches;

        for (var i=0; i < touches.length; i++) {
            var touch = touches[i];
            var x = touch.clientX;
            var y = touch.clientY;

            if (x > w / 2) // right side of the screen
                break;

            tap_elem.style.left = x - tap_elem_offset + "px";
            tap_elem.style.top  = y - tap_elem_offset + "px";

            var d_x = x - touch_start_pos[0];
            var d_y = y - touch_start_pos[1];

            var r = Math.sqrt(d_x * d_x + d_y * d_y);

            if (r < 16) // don't move if control is too close to the center
                break;

            var cos = d_x / r;
            var sin = -d_y / r;

            if (cos > Math.cos(3 * Math.PI / 8))
                m_ctl.set_custom_sensor(right_arrow, 1);
            else if (cos < -Math.cos(3 * Math.PI / 8))
                m_ctl.set_custom_sensor(left_arrow, 1);

            if (sin > Math.sin(Math.PI / 8))
                m_ctl.set_custom_sensor(up_arrow, 1);
            else if (sin < -Math.sin(Math.PI / 8))
                m_ctl.set_custom_sensor(down_arrow, 1);
        }
    }

    function touch_end_cb(event) {
        event.preventDefault();

        var touches = event.changedTouches;

        for (var i=0; i < touches.length; i++) {

            if (touches[i].identifier == move_touch_idx) {
                m_ctl.set_custom_sensor(up_arrow, 0);
                m_ctl.set_custom_sensor(down_arrow, 0);
                m_ctl.set_custom_sensor(left_arrow, 0);
                m_ctl.set_custom_sensor(right_arrow, 0);
                tap_elem.style.visibility = "hidden";
                control_elem.style.visibility = "hidden";
                move_touch_idx = null;

            } else if (touches[i].identifier == jump_touch_idx) {
                m_ctl.set_custom_sensor(jump, 0);
                jump_touch_idx = null;
            }
        }
    }

    document.getElementById("canvas3d").addEventListener("touchstart", touch_start_cb, false);
    document.getElementById("control_jump").addEventListener("touchstart", toggleFullScreen(document.body), false);

    document.getElementById("canvas3d").addEventListener("touchmove", touch_move_cb, false);

    document.getElementById("canvas3d").addEventListener("touchend", touch_end_cb, false);
    document.getElementById("controls").addEventListener("touchend", touch_end_cb, false);

    document.getElementById("delete").addEventListener("delete", toggleFullScreen, false);

}

function detect_mobile() {
    if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}



function setup_camera(cam_mode) {
//player_hp -= 10;


//if (player_hp <= 0){
//  kill_character();
// }

//testvar1 = player_hp;
//testvar2 = getRandomInt(120);

//    m_cons.set_rotation(_cam_target_2,0,testvar1,0);
//var camera = m_scs.get_active_camera();

//testvar3=m_trans.get_rotation(camera);
//m_trans.set_rotation(_cam_target, 0, .5, .9, 0)






if (cam_mode == 0){
 CAM_OFFSET[0]=0;
 CAM_OFFSET[1]=4;
 CAM_OFFSET[2]=1.5;
    var camera = m_scs.get_active_camera();
    m_cons.append_semi_soft(camera, _character, CAM_OFFSET, CAM_SOFTNESS);
 }
if (cam_mode == 1){
 CAM_OFFSET[0]=0;
 CAM_OFFSET[1]=55;
 CAM_OFFSET[2]=-3;
    var camera = m_scs.get_active_camera();
    m_cons.append_semi_soft(camera, _cam_target, CAM_OFFSET, CAM_SOFTNESS);
 }
if (cam_mode == 2){
 CAM_OFFSET[0]=0;
 CAM_OFFSET[1]=18;
 CAM_OFFSET[2]=-7;
    var camera = m_scs.get_active_camera();
    m_cons.append_semi_soft(camera, _cam_target_2, CAM_OFFSET, 0);
    //m_cons.set_rotation(camera,0,100,0)
 }
if (cam_mode == 3){
 CAM_OFFSET[0]=0;
 CAM_OFFSET[1]=2;
 CAM_OFFSET[2]=-2;
    var camera = m_scs.get_active_camera();
    m_cons.append_semi_soft(camera, _cam_target_3, CAM_OFFSET, 0);
    //m_cons.set_rotation(camera,0,100,0)
 }



}


function kill_character() {
//    m_anim.apply(_character_rig, "character_death");
//    m_anim.play(_character_rig);
//    m_anim.set_behavior(_character_rig, m_anim.AB_FINISH_STOP);
//    m_phy.set_character_move_dir(_character, 0, 0);
//    m_ctl.remove_sensor_manifold(_character);
}

function updatetext(){
    left_div.innerHTML = "TV1:"+testvar1;
    left_div2.innerHTML = "TV2:"+testvar2;
    left_div3.innerHTML = "TV3:"+testvar3;
    left_div4.innerHTML = "TV4:"+testvar4;
    left_div5.innerHTML = "TV5:"+testvar5;
    left_div6.innerHTML = "TV6:"+testvar6;
}


/////////////////////////////////////////////////////////my function stash/////////////////////////////////////

//scenes

function hide_object(obj, ignore_children){
	m_scenes.hide_object(obj,ignore_children);
}
function show_object(obj,ignore_children){
	m_scenes.show_object(obj,ignore_children);
}

//trans
function get_translation(obj, obj_pos){
	m_trans.get_translation(obj, obj_pos);
	return obj_pos;
}
function set_translation(obj,x,y,z){
	m_trans.set_translation(obj,x,y,z);
}

//vec3

function vcopy(a,b){
m_vec3.copy(a,b);
return b;
}

function myvector_to_world(obj, vx_local, vy_local, vz_local, dest) {//possible useful function

    var v = dest || new Float32Array(3);
    var quat = m_tsr.get_quat_view(obj.render.world_tsr);

    v[0] = vx_local;
    v[1] = vy_local;
    v[2] = vz_local;

    var v_world = m_vec3.transformQuat(v, quat, v);

    return v_world;

}

});//end of script/////////////////////////////--------------------------------------------------------



b4w.require("example2_main").init();






/* NOTES

var src_obj = m_scs.get_object_by_name("Plane");
var deep_copy = m_obj.copy(src_obj, "deep_copy", true);

m_scs.append_object(deep_copy);

*/


