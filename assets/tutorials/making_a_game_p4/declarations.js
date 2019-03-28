var m_anim  = require("animation");
var m_app   = require("app");
var m_cfg   = require("config");
var m_data  = require("data");
var m_ctl   = require("controls");
var m_phy   = require("physics");
var m_cons  = require("constraints");
var m_scs   = require("scenes");
var m_scene = m_scs;// attempt to use various code examples more easily
var m_vec3 = require("vec3");
var _vec3_tmp = m_vec3.create();
//////////////////////////////////////////vectors for general use//////////////////////////////////////
var delta_trans = new Float32Array(3);
var obj_pos = new Float32Array(3);
var target_pos = new Float32Array(3);
var speed = 0.01;

var m_trans = require("transform");
var m_quat  = require("quat");

var _character = null;
var _character_rig = null;
var _cam_target = null;
var _cam_target2 = null;

var ROT_SPEED = 1.5;
var CAM_SOFTNESS = 0.2;
var CAM_OFFSET = new Float32Array([0, 4, 1.5]);
var toggle_cam_mode = 0;
var consoletext1 = null;