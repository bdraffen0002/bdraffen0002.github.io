
			anchors

Methods
attach_move_cb(obj, anchor_move_cb)
detach_move_cb(obj)
get_element_id(obj) ? {string|boolean}
is_anchor(obj) ? {boolean}
update()
Type Definitions
AnchorMoveCallback(x, y, appearance, obj, anchornullable)

			animation

Members
AB_CYCLIC
AB_FINISH_RESET
AB_FINISH_STOP
OBJ_ANIM_TYPE_ARMATURE
OBJ_ANIM_TYPE_MATERIAL
OBJ_ANIM_TYPE_NONE
OBJ_ANIM_TYPE_OBJECT
OBJ_ANIM_TYPE_PARTICLES
OBJ_ANIM_TYPE_SOUND
OBJ_ANIM_TYPE_STATIC
OBJ_ANIM_TYPE_VERTEX
SLOT_0
SLOT_1
SLOT_2
SLOT_3
SLOT_4
SLOT_5
SLOT_6
SLOT_7
SLOT_ALL
Methods
apply(obj, name, slot_numopt)
apply_def(obj)
apply_ext(obj, name_listnullable, slot_numopt)
apply_smoothing(obj, trans_periodopt, quat_periodopt, slot_numopt)
apply_to_first_empty_slot(obj, name) ? {number}
frame_to_sec(frame) ? {number}
get_anim_length(obj, slot_numopt) ? {number}
get_anim_names(obj) ? {Array.<string>}
get_anim_start_frame(obj, slot_numopt) ? {number}
get_anim_type(obj, slot_numopt) ? (nullable) {module:animation~AnimType}
get_behavior(obj, slot_numopt) ? {module:animation~AnimBehavior}
get_current_anim_name(obj, slot_numopt) ? (nullable) {string}
get_first_skeletal_slot(armobj) ? {slot_1}
get_frame(obj, slot_numopt) ? {number}
get_second_skeletal_slot(armobj) ? {slot_2}
get_skel_mix_factor(armobj) ? {number}
get_slot_num_by_anim(obj, anim_name) ? (nullable) {number}
get_speed(obj, slot_numopt) ? {number}
is_animated(obj) ? {boolean}
is_play(obj, slot_numopt) ? {boolean}
mix_from_cur_pos(armobj, slot, timeopt, callbackopt)
play(obj, finish_callbackopt, slot_numopt)
remove(obj)
remove_slot_animation(obj, slot_numopt)
set_behavior(obj, behavior, slot_numopt)
set_first_frame(obj, slot_numopt)
set_frame(obj, frame, slot_numopt)
set_last_frame(obj, slot_numopt)
set_skel_mix_factor(armobj, factor, timeopt, callbackopt)
set_skeletal_slots(armobj, slot_1opt, slot_2opt, factoropt)
set_speed(obj, speed, slot_numopt)
stop(obj, slot_numopt)
Type Definitions
AnimBehavior
AnimBlendingCallback()
AnimFinishCallback(obj, slot_num)
AnimSlot
AnimType

			app

Methods
attr_animate(elem, attr_name, from, to, timeout, opt_callbackopt)
check_fullscreen() ? {boolean}
css_animate(elem, prop, from, to, timeout, opt_prefixopt, opt_suffixopt, opt_callbackopt)
disable_camera_controls()
disable_object_controls(obj)
enable_camera_controls(disable_default_pivotopt, disable_letter_controlsopt, disable_zoomopt, elementopt, allow_element_exitopt, disable_gamepad_controlsopt)
enable_debug_controls()
enable_object_controls(obj, elementopt)
exit_fullscreen()
get_camera_smooth_factor() ? {number}
get_url_params(allow_param_arrayopt) ? {Object|Null}
init(optionsopt)
queue_animate(queue)
report_app_error(text_message, link_message, link, purge_elements)
request_fullscreen(elem, enabled_cb, disabled_cb)
set_camera_smooth_factor(value)
Type Definitions
AnimFinishCallback()
AppInitCallback(canvas, success)
QueueObject

			armature

Methods
get_bone_tsr(armobj, bone_name, destopt) ? (nullable) {TSR}
get_bone_tsr_rel(armobj, bone_name, destopt) ? (nullable) {TSR}
set_bone_tsr(armobj, bone_name, tsr)
set_bone_tsr_rel(armobj, bone_name, tsr)

			assets

Members
AT_ARRAYBUFFER
AT_ARRAYBUFFER_ZIP
AT_AUDIO_ELEMENT
AT_AUDIOBUFFER
AT_IMAGE_ELEMENT
AT_JSON
AT_JSON_ZIP
AT_SEQ_VIDEO_ELEMENT
AT_TEXT
AT_VIDEO_ELEMENT
Methods
enqueue(assets_pack, asset_cbopt, pack_cbopt, progress_cbopt)

			camera

Members
MS_EYE_CONTROLS
MS_HOVER_CONTROLS
MS_STATIC
MS_TARGET_CONTROLS
Methods
calc_ray(camobj, canvas_x, canvas_y, destopt, nullable) ? (nullable) {ParametricLine}
correct_up(camobj, z_axisopt, strictopt)
eye_get_horizontal_limits(camobj, destopt, nullable, localopt) ? (nullable) {module:camera~HorizontalRotationLimits}
eye_get_vertical_limits(camobj, destopt, nullable, localopt) ? (nullable) {module:camera~VerticalRotationLimits}
eye_rotate(camobj, phi, theta, is_absopt)
eye_set_horizontal_limits(camobj, limitsopt, nullable)
eye_set_look_at(camobj, posopt, nullable, look_atopt, nullable)
eye_set_vertical_limits(camobj, limitsopt, nullable)
eye_setup(camobj, paramsopt, nullable)
get_camera_angles(camobj, destopt, nullable) ? (nullable) {Vec2}
get_camera_angles_char(camobj, destopt, nullable) ? (nullable) {Vec2}
get_camera_angles_dir(dir, destopt, nullable) ? (nullable) {Vec2}
get_eye_distance(camobj) ? {number}
get_fov(camobj) ? {number}
get_frustum_planes(camobj, planes) ? (nullable) {module:camera~FrustumPlanes}
get_move_style(camobj) ? (nullable) {CameraMoveStyle}
get_ortho_scale(camobj) ? {number}
get_stereo_distance(camobj) ? {number}
get_translation(camobj, destopt) ? (nullable) {Vec3}
get_velocities(camobj, dest) ? (nullable) {module:camera~VelocityParams}
get_vertical_axis(camobj, destopt, nullable) ? (nullable) {Vec3}
get_view_vector(camobj, destopt, nullable) ? (nullable) {Vec3}
has_distance_limits(camobj) ? {boolean}
has_horizontal_rot_limits(camobj) ? {boolean}
has_horizontal_trans_limits(camobj) ? {boolean}
has_vertical_rot_limits(camobj) ? {boolean}
has_vertical_trans_limits(camobj) ? {boolean}
hover_get_distance(camobj) ? {number}
hover_get_distance_limits(camobj, destopt, nullable) ? (nullable) {module:camera~DistanceLimits}
hover_get_horiz_trans_limits(camobj, destopt, nullable) ? (nullable) {module:camera~HorizontalTranslationLimits}
hover_get_pivot(camobj, destopt) ? (nullable) {Vec3}
hover_get_vert_trans_limits(camobj, destopt, nullable) ? (nullable) {module:camera~VerticalTranslationLimits}
hover_get_vertical_limits(camobj, destopt, nullable) ? (nullable) {module:camera~HoverAngleLimits}
hover_rotate(camobj, phi, theta, is_absopt)
hover_set_distance_limits(camobj, limits)
hover_set_horiz_trans_limits(camobj, limitsnullable)
hover_set_pivot_translation(camobj, trans)
hover_set_vert_trans_limits(camobj, limitsnullable)
hover_set_vertical_limits(camobj, limits)
hover_setup(camobj, params)
hover_setup_rel(camobj, params)
hover_switch_horiz_rotation(camobj, enable)
is_eye_camera(obj) ? {boolean}
is_hover_camera(obj) ? {boolean}
is_look_up(camobj) ? {boolean}
is_ortho_camera(camobj) ? {boolean}
is_static_camera(obj) ? {boolean}
is_target_camera(obj) ? {boolean}
project_point(camobj, point, destopt) ? {Vec2|Vec3}
rotate_camera(camobj, phi, theta, is_absopt)
set_eye_distance(camobj, eye_dist)
set_fov(camobj, fov)
set_hmd_fov(camobj, hmd_left_fov, hmd_right_fov)
set_ortho_scale(camobj, ortho_scale)
set_projection(camobj, matrix)
set_stereo_distance(camobj, conv_dist)
set_translation(camobj, trans)
set_velocities(camobj, velocity)
set_vertical_axis(camobj, axis)
static_get_rotation(camobj, destopt, nullable) ? (nullable) {Quat}
static_set_look_at(camobj, posopt, nullable, look_atopt, nullable)
static_set_rotation(camobj, quat)
static_setup(camobj, paramsopt, nullable)
target_get_distance(camobj) ? {number}
target_get_distance_limits(camobj, destopt, nullable) ? (nullable) {module:camera~DistanceLimits}
target_get_horizontal_limits(camobj, destopt, nullable, localopt) ? (nullable) {module:camera~HorizontalRotationLimits}
target_get_pivot(camobj, destopt, nullable) ? (nullable) {Vec3}
target_get_pivot_limits(camobj, destopt, nullable) ? (nullable) {module:camera~PivotLimits}
target_get_vertical_limits(camobj, destopt, nullable, localopt) ? (nullable) {module:camera~VerticalRotationLimits}
target_pan_pivot(camobj, trans_h_delta, trans_v_delta)
target_rotate(camobj, phi, theta, is_absopt)
target_set_distance(camobj, distance)
target_set_distance_limits(camobj, limitsopt, nullable)
target_set_horizontal_limits(camobj, limitsopt, nullable)
target_set_pivot_limits(camobj, limitsopt, nullable)
target_set_pivot_translation(camobj, trans)
target_set_trans_pivot(camobj, transopt, nullable, pivotopt, nullable)
target_set_vertical_limits(camobj, limitsopt, nullable)
target_setup(camobj, params)
target_switch_panning(camobj, enable)
target_zoom_object(camobj, obj)
translate_view(camobj, x, y, angle)
Type Definitions
DistanceLimits
EyeCameraParams
FrustumPlanes
HorizontalRotationLimits
HorizontalTranslationLimits
HoverAngleLimits
HoverCameraParams
HoverCameraParamsRel
PivotLimits
StaticCameraParams
TargetCameraParams
VelocityParams
VerticalRotationLimits
VerticalTranslationLimits

			camera_anim

Methods
auto_rotate(auto_rotate_ratio, callbackopt, disable_on_mouse_wheelopt)
check_auto_rotate() ? {boolean}
is_auto_rotate() ? {boolean}
is_moving() ? {boolean}
is_rotating() ? {boolean}
move_camera_to_point(cam_obj, point_obj, cam_lin_speed, cam_angle_speed, cbopt)
rotate_camera(cam_obj, angle_phi, angle_theta, timeopt, cbopt)
stop_cam_moving()
stop_cam_rotating()
track_to_target(cam_obj, target, rot_speedopt, nullable, zoom_multopt, nullable, zoom_timeopt, nullable, zoom_delayopt, nullable, track_cbopt, nullable, zoom_in_cbopt, nullable)
Type Definitions
AutoRotateDisabledCallback()
MoveCameraToPointCallback()
RotateCameraCallback()
TrackToTargetCallback()
TrackToTargetZoomCallback()

			config

Configuration Parameters Available
allow_cors
allow_hidpi
alpha
alpha_sort
alpha_sort_threshold
anaglyph_use
animation_framerate
anisotropic_filtering
antialiasing
assets_dds_available
assets_gzip_available
assets_min50_available
assets_path
assets_pvr_available
audio
background_color
bloom
built_in_module_name
canvas_resolution_factor
compositing
console_verbose
debug_view
dof
do_not_load_resources
enable_outlining
enable_selectable
enable_texture_cache
glow_materials
gl_debug
god_rays
is_mobile_device
lod_leap_smooth_threshold
lod_smooth_transitions
max_fps
max_fps_physics
media_auto_activation
motion_blur
outlining_overview_mode
physics_calc_fps
physics_enabled
physics_uranium_path
physics_use_wasm
physics_use_workers
precision
prevent_caching
quality
reflections
reflection_quality
refractions
sfx_mix_mode
shaders_path
shadows
shadow_blur_samples
show_hud_debug_info
smaa
smaa_area_texture_path
smaa_search_texture_path
srgb_type
ssao
stereo
use_min50
Summary
Members
P_AUTO
P_CUSTOM
P_HIGH
P_LOW
P_ULTRA
Methods
apply_quality(quality)
get(prop) ? {*}
get_assets_path(name) ? {string}
get_std_assets_path() ? {string}
reset()
reset_limits()
set(prop, value)
Type Definitions
QualityProfile

			constraints

Methods
append_copy_loc(obj, target, axesopt, use_offsetopt, influenceopt)
append_copy_rot(obj, target, axesopt, use_offsetopt, influenceopt)
append_copy_trans(obj, target, influenceopt)
append_follow(obj, target, dist_min, dist_max)
append_semi_soft(obj, target, offsetopt, softnessopt)
append_semi_soft_cam(obj, target, offsetopt, softnessopt)
append_semi_stiff(obj, target, offsetopt, rotation_offsetopt, clamp_leftopt, clamp_rightopt, clamp_upopt, clamp_downopt)
append_semi_stiff_cam(obj, target, offsetopt, rotation_offsetopt, clamp_leftopt, clamp_rightopt, clamp_upopt, clamp_downopt)
append_stiff(obj, target, offsetopt, rotation_offsetopt, scale_offsetopt)
append_stiff_trans(obj, target, offsetopt)
append_stiff_trans_rot(obj, target, offsetopt, rotation_offsetopt)
append_stiff_viewport(obj, camobj, positioningopt)
append_track(obj, target, track_axisopt, up_axisopt, use_target_zopt, influenceopt)
remove(obj, restore_transformopt)
Type Definitions
StiffViewportPositioning

			container

Methods
client_to_canvas_coords(x, y, destopt) ? {Vec2}
client_to_element_coords(x, y, element, destopt) ? {Vec2}
force_offsets_updating()
get_canvas() ? {HTMLElement}
get_canvas_hud() ? {HTMLElement}
get_container() ? {HTMLElement}
get_coords_target_space(event, use_target_touchesopt, destopt) ? {Vec2}
insert_to_container(elem, stack_order)
resize(width, height, update_canvas_cssopt)
resize_to_container(forceopt)
set_canvas_offsets(left, top)
update_canvas_offsets()

			controls : 	KEY MAPPING MEMBERS NOT INCLUDED HERE

CT_CHANGE
CT_CONTINUOUS
CT_LEVEL
CT_POSITIVE
CT_SHOT
CT_TRIGGER
default_AND_logic_fun
default_OR_logic_fun
PL_MULTITOUCH_MOVE_PAN
PL_MULTITOUCH_MOVE_ROTATE
PL_MULTITOUCH_MOVE_ZOOM
PL_SINGLE_TOUCH_MOVE

Methods
check_sensor_manifold(objnullable, id) ? {boolean}
check_sensor_manifolds(objnullable) ? {boolean}
create_callback_sensor(callback, valueopt) ? {Sensor}
create_collision_impulse_sensor(obj) ? {Sensor}
create_collision_sensor(obj_src, collision_idopt, nullable, calc_pos_normopt) ? {Sensor}
create_custom_sensor(value) ? {Sensor}
create_elapsed_sensor() ? {Sensor}
create_gamepad_axis_sensor(axis, numberopt) ? {Sensor}
create_gamepad_btn_sensor(ind, numberopt) ? {Sensor}
create_gamepad_orientation_sensor(numberopt) ? {Sensor}
create_gamepad_position_sensor(numberopt) ? {Sensor}
create_gyro_angles_sensor() ? {Sensor}
create_gyro_delta_sensor() ? {Sensor}
create_gyro_quat_sensor() ? {Sensor}
create_hmd_position_sensor() ? {Sensor}
create_hmd_quat_sensor() ? {Sensor}
create_kb_sensor_manifold(objnullable, id, type, key, callback, callback_paramopt)
create_keyboard_sensor(key, elementopt) ? {Sensor}
create_motion_sensor(obj, thresholdopt, rotation_thresholdopt) ? {Sensor}
create_mouse_click_sensor(elementopt) ? {Sensor}
create_mouse_move_sensor(axisopt, elementopt) ? {Sensor}
create_mouse_wheel_sensor(elementopt) ? {Sensor}
create_plock_mouse_sensor(elementopt) ? {Sensor}
create_plock_sensor(elementopt) ? {Sensor}
create_ray_sensor(obj_srcnullable, from, to, collision_idopt, nullable, is_binary_valueopt, calc_pos_normopt, ign_src_rotopt) ? {Sensor}
create_selection_sensor(obj, enable_toggle_switchopt) ? {Sensor}
create_sensor_manifold(objnullable, id, type, sensors, logic_funnullable, callback, callback_paramopt)
create_timeline_sensor() ? {Sensor}
create_timer_sensor(period, do_repeatopt) ? {Sensor}
create_touch_click_sensor(elementopt) ? {Sensor}
create_touch_move_sensor(axisopt, elementopt) ? {Sensor}
create_touch_rotate_sensor(elementopt) ? {Sensor}
create_touch_zoom_sensor(elementopt) ? {Sensor}
create_vertical_velocity_sensor(obj, thresholdopt) ? {Sensor}
get_custom_sensor(sensor) ? {number}
get_sensor_payload(objnullable, manifold_id, num) ? {*}
get_sensor_value(objnullable, manifold_id, num) ? {number}
remove_sensor_manifold(objnullable, idopt)
reset()
reset_timer_sensor(obj, manifold_id, num, period)
set_custom_sensor(sensor, value)
set_plock_smooth_factor(value)
Type Definitions
CollisionPayload(coll_objnullable, coll_posnullable, coll_normnullable, coll_distnullable)
ManifoldCallback(objnullable, id, pulse, paramopt)
ManifoldLogicFunction(s) ? {number}
RayPayload(hit_fract, obj_hitnullable, hit_time, hit_pos, hit_norm)
SensorCallback()

Methods
check_sensor_manifold(objnullable, id) ? {boolean}
check_sensor_manifolds(objnullable) ? {boolean}
create_callback_sensor(callback, valueopt) ? {Sensor}
create_collision_impulse_sensor(obj) ? {Sensor}
create_collision_sensor(obj_src, collision_idopt, nullable, calc_pos_normopt) ? {Sensor}
create_custom_sensor(value) ? {Sensor}
create_elapsed_sensor() ? {Sensor}
create_gamepad_axis_sensor(axis, numberopt) ? {Sensor}
create_gamepad_btn_sensor(ind, numberopt) ? {Sensor}
create_gamepad_orientation_sensor(numberopt) ? {Sensor}
create_gamepad_position_sensor(numberopt) ? {Sensor}
create_gyro_angles_sensor() ? {Sensor}
create_gyro_delta_sensor() ? {Sensor}
create_gyro_quat_sensor() ? {Sensor}
create_hmd_position_sensor() ? {Sensor}
create_hmd_quat_sensor() ? {Sensor}
create_kb_sensor_manifold(objnullable, id, type, key, callback, callback_paramopt)
create_keyboard_sensor(key, elementopt) ? {Sensor}
create_motion_sensor(obj, thresholdopt, rotation_thresholdopt) ? {Sensor}
create_mouse_click_sensor(elementopt) ? {Sensor}
create_mouse_move_sensor(axisopt, elementopt) ? {Sensor}
create_mouse_wheel_sensor(elementopt) ? {Sensor}
create_plock_mouse_sensor(elementopt) ? {Sensor}
create_plock_sensor(elementopt) ? {Sensor}
create_ray_sensor(obj_srcnullable, from, to, collision_idopt, nullable, is_binary_valueopt, calc_pos_normopt, ign_src_rotopt) ? {Sensor}
create_selection_sensor(obj, enable_toggle_switchopt) ? {Sensor}
create_sensor_manifold(objnullable, id, type, sensors, logic_funnullable, callback, callback_paramopt)
create_timeline_sensor() ? {Sensor}
create_timer_sensor(period, do_repeatopt) ? {Sensor}
create_touch_click_sensor(elementopt) ? {Sensor}
create_touch_move_sensor(axisopt, elementopt) ? {Sensor}
create_touch_rotate_sensor(elementopt) ? {Sensor}
create_touch_zoom_sensor(elementopt) ? {Sensor}
create_vertical_velocity_sensor(obj, thresholdopt) ? {Sensor}
get_custom_sensor(sensor) ? {number}
get_sensor_payload(objnullable, manifold_id, num) ? {*}
get_sensor_value(objnullable, manifold_id, num) ? {number}
remove_sensor_manifold(objnullable, idopt)
reset()
reset_timer_sensor(obj, manifold_id, num, period)
set_custom_sensor(sensor, value)
set_plock_smooth_factor(value)
Type Definitions
CollisionPayload(coll_objnullable, coll_posnullable, coll_normnullable, coll_distnullable)
ManifoldCallback(objnullable, id, pulse, paramopt)
ManifoldLogicFunction(s) ? {number}
RayPayload(hit_fract, obj_hitnullable, hit_time, hit_pos, hit_norm)
SensorCallback()

			data

activate_media()
is_idle() ? {boolean}
is_primary_loaded() ? {boolean}
load(path, loaded_cbopt, stageload_cbopt, wait_complete_loadingopt, load_hiddenopt) ? {number}
prefetch(path, loaded_cbopt, stageload_cbopt)
set_debug_resources_root(debug_resources_root)
unfetch()
unload(data_idopt)
Type Definitions
LoadedCallback(data_id, success)
StageloadCallback(percentage, load_time, data_id)

			debug

DV_BATCHES_VIEW
DV_BOUNDINGS
DV_CLUSTERS_VIEW
DV_FRONT_BACK_VIEW
DV_NONE
DV_OPAQUE_WIREFRAME
DV_RENDER_TIME
DV_TRANSPARENT_WIREFRAME
Methods
analyze_shaders(opt_shader_id_partopt)
assert_constants()
check_finite(o)
controls_info()
fake_load(stageload_cb, intervalopt, startopt, endopt, loaded_cbopt)
fbmsg()
fbres(fun, timeout)
geometry_stats() ? {Object}
hide_normals()
make_camera_frustum_shot()
make_light_frustum_shot()
msg()
mute_music()
num_draw_calls() ? {number}
num_render_targets() ? {Object}
num_shaders() ? {number}
num_textures() ? {Object}
num_triangles() ? {number}
num_vertices() ? {number}
object_distance(obj, obj2) ? {number}
object_info(name)
objects_stat()
physics_id(id)
physics_stats()
pix(ref_color)
plot_telemetry()
print_telemetry()
scenegraph_to_dot()
set_debug_params(params)
show_normals(obj, mat_name, length, width)
test(test_name, callback)
test_performance(callback)
visible_objects()
Type Definitions
CodeTestCallback(equals, ok)
DebugViewMode
EqualsFunction(result, exp_result)
LoadedCallback()
OKFunction(result)
StageloadCallback(percentage)

			fps

Members
AT_CONTINUOUS
AT_PRESSED
AT_RELEASED
CS_CLIMB
CS_FLY
CS_RUN
CS_STAY
CS_WALK
Methods
add_new_state() ? {CharacterState}
add_state(new_state, enabled_transitions, change_state_cb)
bind_action(action_type, action_controls, action_cb)
disable_fps_controls(characteropt, elemopt)
enable_fps_controls(optionsopt)
freeze_movements()
get_cam_sensitivity()
get_cam_smooth_factor()
get_character_state() ? {CharacterState}
is_character_locked()
lock_character()
set_cam_sensitivity(value)
set_cam_smooth_factor(value)
set_plock_disable_cb(callback)
set_plock_enable_cb(callback)
set_rotation_cb(rotation_cb)
set_state_change_cb(state_id, callback)
switch_state(state)
unfreeze_movements()
unlock_character()
Type Definitions
ChangeStateCallback(old_state_id, new_state_id)
CharMotionCallback(forw_back, right_left)
CharRotationCallback(character, x, y)
PlockCallback(elem)

			geometry

Methods
check_shape_keys(obj) ? {boolean}
draw_line(obj, positions, is_splitopt)
extract_index_array(obj, mat_name) ? {Uint16Array|Uint32Array}
extract_vertex_array(obj, mat_name, attrib_name) ? {Float32Array}
get_shape_key_value(obj, key_name) ? {number}
get_shape_keys_names(obj) ? {Array.<string>}
override_geometry(obj, mat_name, ibo_array, positions_array, smooth_normals)
set_shape_key_value(obj, key_name, value)
update_vertex_array(obj, mat_name, attrib_name, array)

			gp_conf

Methods
hide()
show()
update()
			gyroscope

Methods
disable_camera_rotation()
enable_camera_rotation()

			gp_conf

Methods
disable_camera_rotation()
enable_camera_rotation()

			hmd

Members
HMD_ALL_AXES_MOUSE_NONE
HMD_ALL_AXES_MOUSE_YAW
HMD_NONE_MOUSE_ALL_AXES
HMD_ROLL_PITCH_MOUSE_YAW
Methods
check_browser_support() ? {boolean}
disable_controllers()
disable_hmd()
enable_controllers(gamepad_1opt, gamepad_2opt)
enable_hmd(control_type)
get_position(dest) ? {Vec3}
get_rotate_quat(dest) ? {Quat}
set_position(position)
set_rotate_quat(quat)
Type Definitions
HMDBehavior

			hmd_conf

Methods
check() ? {boolean}
hide()
reset()
show(css_class)
update()

			hud

Methods
draw_mixer_strip()
plot_array(header, slot, arr, arg_min, arg_max, val_min, val_max)

			hmd_conf

Methods
check() ? {boolean}
hide()
reset()
show(css_class)
update()

			input

Members
DEVICE_GYRO
DEVICE_HMD
DEVICE_KEYBOARD
DEVICE_MOUSE
DEVICE_TOUCH
GMPD_AXIS_0
GMPD_AXIS_1
GMPD_AXIS_2
GMPD_AXIS_3
GMPD_AXIS_4
GMPD_AXIS_5
GMPD_AXIS_6
GMPD_AXIS_7
GMPD_AXIS_8
GMPD_AXIS_9
GMPD_AXIS_10
GMPD_AXIS_11
GMPD_BUTTON_0
GMPD_BUTTON_1
GMPD_BUTTON_2
GMPD_BUTTON_3
GMPD_BUTTON_4
GMPD_BUTTON_5
GMPD_BUTTON_6
GMPD_BUTTON_7
GMPD_BUTTON_8
GMPD_BUTTON_9
GMPD_BUTTON_10
GMPD_BUTTON_11
GMPD_BUTTON_12
GMPD_BUTTON_13
GMPD_BUTTON_14
GMPD_BUTTON_15
GMPD_BUTTON_16
GMPD_BUTTON_17
GMPD_BUTTON_18
GMPD_BUTTON_19
GMPD_BUTTON_20
GMPD_BUTTON_21
GMPD_BUTTON_22
GMPD_BUTTON_23
GMPD_BUTTON_24
GMPD_BUTTON_25
GMPD_GRIPS_BUTTON
GMPD_MENU_BUTTON
GMPD_TRACKPAD_BUTTON
GMPD_TRIGGER_BUTTON
GYRO_ORIENTATION_ANGLES
GYRO_ORIENTATION_QUAT
HMD_BASELINE_DIST
HMD_BEVEL_SIZE
HMD_DISTORTION
HMD_EYE_DISTANCE
HMD_NON_WEBVR
HMD_ORIENTATION_QUAT
HMD_POSITION
HMD_SCREEN_HEIGHT
HMD_SCREEN_LENS_DIST
HMD_SCREEN_WIDTH
HMD_WEBVR1
HMD_WEBVR1_1
HMD_WEBVR_DESKTOP
HMD_WEBVR_MOBILE
HMD_WEBVR_TYPE
KEYBOARD_DOWN
KEYBOARD_UP
MOUSE_DOWN_WHICH
MOUSE_LOCATION
MOUSE_UP_WHICH
MOUSE_WHEEL
TOUCH_END
TOUCH_MOVE
TOUCH_START
Methods
add_click_listener(element, callback)
attach_param_cb(device, param, cbopt)
can_use_device(type) ? {boolean}
check_enable_gamepad_indices() ? {Array}
detach_param_cb(device, param, cbopt)
disable_split_screen() ? {boolean}
enable_split_screen(camobj) ? {boolean}
get_device_by_type_element(type, elementnullable) ? (nullable) {Object}
get_gamepad_orientation(gamepad_id, dest) ? {Quat}
get_gamepad_position(gamepad_id, dest) ? {Vec3}
get_moved_gmpd_axis(gamepad_id) ? {number}
get_pressed_gmpd_btn(gamepad_id) ? {number}
get_value_param(device, param) ? {number|boolean|null}
get_vector_param(device, param, dest) ? (nullable) {Float32Array}
get_vr_controller_id(controller_id) ? {number}
register_device()
remove_click_listener(element, callback)
request_fullscreen_hmd()
reset_device(device)
set_gamepad_key(gamepad_id, btn, key)
switch_prevent_default(device, prevent_default)
Type Definitions
DeviceConfig
DeviceHMDType
DeviceParameterAsync
DeviceType
DeviceValueParameterSync
DeviceVectorParameterSync
GyroscopeAnglesCallback(angles)
GyroscopeQuatCallback(quat)
KeyboardDownCallback(key_code)
KeyboardUpCallback(key_code)
MouseDownWhichCallback(which)
MouseLocationCallback(location)
MouseUpWhichCallback(which)
MouseWheelCallback(delta)
TouchEndCallback(touches)
TouchMoveCallback(touches)
TouchStartCallback(touches)

			lights

get_lamps(lamps_typeopt) ? {Array.<Object3D>}
get_light_color(lamp_obj, destopt, nullable) ? (nullable) {RGB}
get_light_energy(lamp_obj) ? {number}
get_light_params(lamp_obj) ? {module:lights~LightParams|null}
get_light_type(lamp_obj) ? {string}
get_sun_params() ? {SunParams}
set_date(date)
set_day_time(time)
set_light_color(lamp_obj, color)
set_light_energy(lamp_obj, energy)
set_light_params(lamp_obj, light_params)
set_max_sun_angle(angle)
set_sun_params(sun_params)
Type Definitions
LightParams

			logic_nodes

Methods
append_custom_callback(cb_id, cb)
remove_custom_callback(cb_id)
run_entrypoint(scene_name, ep_name)

			main

Methods
append_loop_cb(callback)
canvas_data_url(callback, formatopt, qualityopt, auto_revokeopt)
clear_fps_callback()
clear_render_callback()
detect_mobile() ? {boolean}
get_renderer_info() ? {RendererInfo|Null}
init(elem_canvas_webgl, elem_canvas_hudopt) ? {WebGLRenderingContext|Null}
is_paused() ? {boolean}
pause()
remove_loop_cb(callback)
reset()
resume()
set_fps_callback(fps_cb)
set_render_callback(callback)
Type Definitions
FPSCallback(fps_avg, phy_fps_avg)
LoopCallback(timeline, delta)
RenderCallback(delta, timeline)

			mat3

Methods
adjoint(a, out) ? {Mat3}
clone(a) ? {Mat3}
copy(a, out) ? {Mat3}
create() ? {Mat3}
determinant(a) ? {Number}
frob(a) ? {Number}
fromMat2d(a, out) ? {Mat3}
fromMat4(a, out) ? {Mat3}
fromQuat(q, out) ? {Mat3}
fromRotation(rad, out) ? {Mat3}
fromScaling(v, out) ? {Mat3}
fromTranslation(v, out) ? {Mat3}
identity(out) ? {Mat3}
invert(a, out) ? {Mat3}
mul()
multiply(a, b, out) ? {Mat3}
normalFromMat4(a, out) ? {Mat3}
rotate(a, rad, out) ? {Mat3}
scale(a, v, out) ? {Mat3}
str(mat) ? {String}
translate(a, v, out) ? {Mat3}
transpose(a, out) ? {Mat3}

			mat4

Methods
adjoint(a, out) ? {Mat4}
clone(a) ? {Mat4}
copy(a, out) ? {Mat4}
create() ? {Mat4}
determinant(a) ? {Number}
frob(a) ? {Number}
fromRotation(rad, axis, out) ? {Mat4}
fromRotationTranslation(q, v, out) ? {Mat4}
fromRotationTranslationScale(q, v, s, out) ? {Mat4}
fromRotationTranslationScaleOrigin(q, v, s, o, out) ? {Mat4}
fromScaling(v, out) ? {Mat4}
fromTranslation(v, out) ? {Mat4}
fromXRotation(rad, out) ? {Mat4}
fromYRotation(rad, out) ? {Mat4}
fromZRotation(rad, out) ? {Mat4}
frustum(left, right, bottom, top, near, far, out) ? {Mat4}
identity(out) ? {Mat4}
invert(a, out) ? {Mat4}
lookAt(eye, center, up, out) ? {Mat4}
mul()
multiply(a, b, out) ? {Mat4}
ortho(left, right, bottom, top, near, far, out) ? {Mat4}
perspective(fovy, aspect, near, far, out) ? {Mat4}
perspectiveFromFieldOfView(fov, near, far, out) ? {Mat4}
rotate(a, rad, axis, out) ? {Mat4}
rotateX(a, rad, out) ? {Mat4}
rotateY(a, rad, out) ? {Mat4}
rotateZ(a, rad, out) ? {Mat4}
scale(a, v, out) ? {Mat4}
str(mat) ? {String}
translate(a, v, out) ? {Mat4}
transpose(a, out) ? {Mat4}

			material

Methods
check_specular_hardness(obj, mat_name) ? {boolean}
check_specular_intensity(obj, mat_name) ? {boolean}
get_alpha_factor(obj, mat_name) ? {number}
get_ambient_factor(obj, mat_name) ? {number}
get_diffuse_color(obj, mat_name) ? {RGBA}
get_diffuse_color_factor(obj, mat_name) ? {number}
get_diffuse_intensity(obj, mat_name) ? {number}
get_emit_factor(obj, mat_name) ? {number}
get_line_params(obj) ? (nullable) {module:material~LineParams}
get_material_extended_params(obj, mat_name) ? (nullable) {module:material~MaterialExtParams}
get_materials_names(obj) ? {Array.<string>}
get_nodemat_rgb(obj, name_list, destopt) ? (nullable) {RGB}
get_nodemat_value(obj, name_list) ? {number}
get_specular_color(obj, mat_name) ? {RGB}
get_specular_color_factor(obj, mat_name) ? {number}
get_specular_hardness(obj, mat_name) ? {number}
get_specular_intensity(obj, mat_name) ? {number}
get_water_material_params(obj, mat_name) ? (nullable) {module:material~WaterMaterialParams}
inherit_material(obj_from, mat_from_name, obj_to, mat_to_name)
is_node_material(obj, mat_name) ? {boolean}
is_water_material(obj, mat_name) ? {boolean}
set_alpha_factor(obj, mat_name, alpha_factor)
set_ambient_factor(obj, mat_name, ambient_factor)
set_diffuse_color(obj, mat_name, color)
set_diffuse_color_factor(obj, mat_name, diffuse_color_factor)
set_diffuse_intensity(obj, mat_name, intensity)
set_emit_factor(obj, mat_name, emit_factor)
set_line_params(obj, line_params)
set_material_extended_params(obj, mat_name, mat_params)
set_nodemat_rgb(obj, name_list, r, g, b)
set_nodemat_value(obj, name_list, value)
set_specular_color(obj, mat_name, color)
set_specular_color_factor(obj, mat_name, factor)
set_specular_hardness(obj, mat_name, hardness)
set_specular_intensity(obj, mat_name, intensity)
set_water_material_params(obj, mat_name, water_mat_params)
Type Definitions
LineParams
MaterialExtParams
WaterMaterialParams

			math

Methods
calc_pline_point(pline, t, destopt, nullable) ? (nullable) {Vec3}
create_pline() ? {ParametricLine}
create_pline_from_point_vec(point, vec) ? {ParametricLine}
create_pline_from_points(point1, point2) ? {ParametricLine}
ease_in_back(t, b, c, d) ? {number}
ease_in_bounce(t, b, c, d) ? {number}
ease_in_circ(t, b, c, d) ? {number}
ease_in_cubic(t, b, c, d) ? {number}
ease_in_elastic(t, b, c, d) ? {number}
ease_in_expo(t, b, c, d) ? {number}
ease_in_out_back(t, b, c, d) ? {number}
ease_in_out_bounce(t, b, c, d) ? {number}
ease_in_out_circ(t, b, c, d) ? {number}
ease_in_out_cubic(t, b, c, d) ? {number}
ease_in_out_elastic(t, b, c, d) ? {number}
ease_in_out_expo(t, b, c, d) ? {number}
ease_in_out_quad(t, b, c, d) ? {number}
ease_in_out_quart(t, b, c, d) ? {number}
ease_in_out_quint(t, b, c, d) ? {number}
ease_in_out_sine(t, b, c, d) ? {number}
ease_in_quad(t, b, c, d) ? {number}
ease_in_quart(t, b, c, d) ? {number}
ease_in_quint(t, b, c, d) ? {number}
ease_in_sine(t, b, c, d) ? {number}
ease_out_back(t, b, c, d) ? {number}
ease_out_bounce(t, b, c, d) ? {number}
ease_out_circ(t, b, c, d) ? {number}
ease_out_cubic(t, b, c, d) ? {number}
ease_out_elastic(t, b, c, d) ? {number}
ease_out_expo(t, b, c, d) ? {number}
ease_out_quad(t, b, c, d) ? {number}
ease_out_quart(t, b, c, d) ? {number}
ease_out_quint(t, b, c, d) ? {number}
ease_out_sine(t, b, c, d) ? {number}
get_pline_directional_vec(pline, destopt, nullable) ? (nullable) {Vec3}
get_pline_initial_point(pline, destopt, nullable) ? (nullable) {Vec3}
line_plane_intersect(pn, p_dist, pline, dest) ? (nullable) {Vec3}
linear_tween(t, b, c, d) ? {number}
point_plane_dist(point, plane) ? {number}
set_pline_directional_vec(pline, vec3)
set_pline_initial_point(pline, vec3)
Type Definitions
Plane

			mixer

Methods
disable_mixer_controls()
enable_mixer_controls()
Detailed Description
Methods

			mouse

Methods
check_pointerlock(elem) ? {boolean}
disable_mouse_hover_outline()
enable_mouse_hover_outline(relative_canvasopt)
exit_mouse_drag(elem)
exit_pointerlock()
get_coords_x(event, use_target_touchesopt, relative_canvasopt) ? {number}
get_coords_y(event, use_target_touchesopt, relative_canvasopt) ? {number}
get_plock_smooth_factor() ? {number}
request_mouse_drag(elem, use_mouse_control_cbopt, rotation_cbopt, relative_canvasopt)
request_pointerlock(elem, enabled_cbopt, disabled_cbopt, mouse_move_cbopt, use_mouse_control_cbopt, rotation_cbopt)
set_plock_smooth_factor(value)
Type Definitions
PointerlockDisabledCallback()
PointerlockEnabledCallback()
PointerlockMouseMoveCallback(e)
RotationCallback(x, y)
UseMouseControlCallback() ? {boolean}

			nla

Methods
check_logic_nodes() ? {boolean}
check_nla() ? {boolean}
clear_callback()
get_frame() ? {number}
get_frame_end() ? {number}
get_frame_start() ? {number}
is_play() ? {boolean}
play(callbackopt, nullable)
reset_range()
set_cyclic(is_cyclic)
set_frame(frame)
set_range(start_frame, end_frame)
stop()
Type Definitions
NlaFinishCallback()

			npc_ai

Members
NT_FLYING
NT_SWIMMING
NT_WALKING
Methods
disable_animation()
enable_animation()
new_event_track(graph)
Type Definitions
GraphActions

			ns_compat

	Source:
addons/ns_compat.js, line 6

			objects

Methods
copy(obj, name, deep_copyopt) ? {Object3D}
create_line(name)
get_custom_prop(obj) ? {*}
get_dg_parent(obj) ? (nullable) {Object3D}
get_meta_tags(obj) ? {module:objects~ObjectMetaTags}
get_nodemat_rgb(obj, name_list, destopt) ? {RGB}
get_nodemat_value(obj, name_list) ? {number}
get_outlining_objects() ? {Array.<Object3D>}
get_parent(obj) ? (nullable) {Object3D}
get_selectable_objects() ? {Array.<Object3D>}
get_wind_bending_params(obj) ? {module:objects~WindBendingParams}
hide_all_by_data_id(data_id)
is_armature(obj) ? {boolean}
is_camera(obj) ? {boolean}
is_dynamic(obj) ? {boolean}
is_empty(obj) ? {boolean}
is_lamp(obj) ? {boolean}
is_line(obj) ? {boolean}
is_mesh(obj) ? {boolean}
is_speaker(obj) ? {boolean}
is_world(obj) ? {boolean}
set_nodemat_rgb(obj, name_list, r, g, b)
set_nodemat_value(obj, name_list, value)
set_wind_bending_params(obj, wb_params)
show_all_by_data_id(data_id)
update_boundings(obj)
Type Definitions
ObjectMetaTags
WindBendingParams

			particles

Methods
set_factor(obj, psys_name, factor)
set_normal_factor(obj, psys_name, nfactor)
set_size(obj, psys_name, size)

			physics

Members
CM_CLIMB
CM_FLY
CM_RUN
CM_WALK
Methods
append_collision_test(obj_src, collision_idnullable, callback, calc_pos_normopt)
append_ray_test(obj_srcnullable, from, to, collision_idnullable, callback, autoremoveopt) ? {number}
append_ray_test_ext(obj_srcnullable, from, to, collision_idnullable, callback, autoremoveopt, calc_all_hitsopt, calc_pos_normopt, ign_src_rotopt) ? {number}
apply_collision_impulse_test(obj, callback)
apply_constraint(pivot_type, obj_a, trans_a, quat_a, obj_b, trans_b, quat_b, limits, stiffnessopt, dampingopt)
apply_force(obj, fx_local, fy_local, fz_local)
apply_force_world(obj, fx_world, fy_world, fz_world)
apply_torque(obj, tx_local, ty_local, tz_local)
apply_velocity(obj, vx_local, vy_local, vz_local)
apply_velocity_world(obj, vx, vy, vz)
change_ray_test_from_to(id, from, to)
character_jump(obj)
character_rotation_inc(obj, h_angle, v_angle)
clear_collision_impulse_test(obj)
disable_simulation(obj)
enable_simulation(obj)
get_vehicle_brake(obj) ? {number}
get_vehicle_name(obj) ? (nullable) {string}
get_vehicle_speed(obj) ? {number}
get_vehicle_steering(obj) ? {number}
get_vehicle_throttle(obj) ? (nullable) {number}
has_dynamic_physics(obj) ? {boolean}
has_physics(obj) ? {boolean}
has_simulated_physics(obj) ? {boolean}
is_character(obj) ? {boolean}
is_vehicle_chassis(obj) ? {boolean}
is_vehicle_hull(obj) ? {boolean}
navmesh_find_path(navmesh_obj, start_pos, dest_pos, optionsopt) ? (nullable) {PathInformation}
navmesh_get_island(navmesh_obj, position, distance_to_closestnullable) ? {number}
pull_to_constraint_pivot(obj_a, trans_a, quat_a, obj_b, trans_b, quat_b)
remove_collision_test(obj, collision_idnullable, callback)
remove_constraint(obj_a)
remove_ray_test(id)
set_angular_velocity(obj, av_x, av_y, av_z)
set_character_fly_velocity(obj, velocity)
set_character_move_dir(obj, forw, side)
set_character_move_type(obj, type)
set_character_rotation(obj, angle_h, angle_v)
set_character_rotation_h(obj, angle)
set_character_rotation_v(obj, angle)
set_character_run_velocity(obj, velocity)
set_character_vert_move_dir_angle(obj, angle)
set_character_walk_velocity(obj, velocity)
set_gravity(obj, gravity)
set_object_gravity(obj, gravity)
set_transform(obj, trans, quat)
sync_transform(obj)
vehicle_brake(obj, brake_force)
vehicle_brake_inc(obj, brake_force_inc)
vehicle_steer(obj, steering_value)
vehicle_steer_inc(obj, steering_value_inc, dir)
vehicle_throttle(obj, engine_force)
vehicle_throttle_inc(obj, engine_force_inc, dir)
Type Definitions
CharacterMoveType
CollisionCallback(result, coll_objnullable, coll_posnullable, coll_normnullable, coll_distnullable)
CollisionImpulseCallback(impulse)
NavmeshDistanceCallback(position, centroid, vertex_ids, vertices, current_max_distance)
NavmeshPathOptions
PathInformation
RayTestCallback(id, hit_fract, obj_hitnullable, hit_time)

			preloader

Methods
create_advanced_preloader(options)
create_preloader(options)
create_rotation_preloader(options)
create_simple_preloader(options)
update_preloader(percentage)

			quat

Methods
add(a, b, out) ? {Quat}
calculateW(a, out) ? {Quat}
clone(a) ? {Quat}
conjugate(a, out) ? {Quat}
copy(a, out) ? {Quat}
create() ? {Quat}
dot(a, b) ? {Number}
fromMat3(m, out) ? {Quat}
fromValues(x, y, z, w) ? {Quat}
identity(out) ? {Quat}
invert(a, out) ? {Quat}
len()
length(a) ? {Number}
lerp(a, b, t, out) ? {Quat}
mul()
multiply(a, b, out) ? {Quat}
normalize(a, out) ? {Quat}
rotateX(a, rad, out) ? {Quat}
rotateY(a, rad, out) ? {Quat}
rotateZ(a, rad, out) ? {Quat}
rotationTo(a, b, out) ? {Quat}
scale(a, b, out) ? {Quat}
set(x, y, z, w, out) ? {Quat}
setAxes(view, right, up) ? {Quat}
setAxisAngle(axis, rad, out) ? {Quat}
slerp(a, b, t, out) ? {Quat}
sqlerp(a, b, c, d, t, out) ? {Quat}
sqrLen()
squaredLength(a) ? {Number}
str(vec) ? {String}

			rgb

Methods
create() ? {RGB}
css_to_rgb(css_red, css_green, css_blue, destopt) ? {RGB}
from_values(r, g, b) ? {RGB}
rgb_to_css(rgb) ? {Array.<number>}
rgb_to_css_hex(rgb) ? {string}
set(r, g, b, dest) ? {RGB}

			rgba

Methods
create() ? {RGBA}
css_to_rgba(css_red, css_green, css_blue, css_alpha, destopt) ? {RGBA}
from_values(r, g, b, a) ? {RGBA}
rgba_to_css(rgba) ? {Array.<number>}
set(r, g, b, a, dest) ? {RGBA}

			scenes

Members
DATA_ID_ALL
Methods
append_object(obj, scene_nameopt)
apply_outline_anim(obj, tau, T, N)
apply_outline_anim_def(obj)
can_select_objects() ? {boolean}
check_object_by_dupli_name(empty_name, dupli_name, data_idopt) ? {boolean}
check_object_by_dupli_name_list(name_list, data_idopt) ? {boolean}
check_object_by_name(name, data_idopt) ? {boolean}
clear_outline_anim(obj)
get_active() ? {string}
get_active_camera() ? {Object3D}
get_all_objects(typeopt, data_idopt) ? {Array.<Object3D>}
get_bloom_params() ? {module:scenes~BloomParams}
get_cam_water_depth() ? {number}
get_color_correction_params() ? {module:scenes~ColorCorrectionParams}
get_custom_prop() ? {*}
get_dof_params() ? {module:scenes~DOFParams}
get_environment_colors() ? {Array}
get_first_character() ? {Object3D}
get_fog_color_density(dest) ? {Vec4}
get_fog_params() ? {FogParams}
get_glow_material_params() ? {GlowMaterialParams}
get_god_rays_params() ? {GodRaysParams}
get_mb_params() ? {MotionBlurParams}
get_meta_tags() ? {module:scenes~SceneMetaTags}
get_object_by_dupli_name(empty_name, dupli_name, data_idopt) ? {Object3D}
get_object_by_dupli_name_list(name_list, data_idopt) ? {Object3D}
get_object_by_name(name, data_idopt) ? {Object3D}
get_object_children(obj) ? {Array.<Object3D>}
get_object_data_id(obj) ? {number}
get_object_name(obj) ? {string}
get_object_name_hierarchy(obj) ? (nullable) {Array}
get_object_type(obj) ? {string}
get_outline_color(destnullable) ? {RGB}
get_outline_intensity(obj) ? {number}
get_scenes() ? {Array.<string>}
get_shadow_params() ? {ShadowParams}
get_shore_dist(trans, v_dist_multopt) ? {number}
get_sky_params() ? {module:scenes~SkyParams}
get_ssao_params() ? {module:scenes~SSAOParams}
get_type_mesh_object(obj) ? {string}
get_water_mat_params(water_params)
get_water_surface_level(pos_x, pos_y) ? {number}
get_wind_params() ? {module:scenes~WindParams}
get_world_by_name(name, data_idopt) ? {Object3D}
hide_object(obj, ignore_childrenopt)
is_hidden(obj) ? {boolean}
is_visible(obj) ? {boolean}
marker_frame(name) ? {number}
outlining_is_enabled(obj) ? {boolean}
pick_center() ? (nullable) {Object3D}
pick_object(x, y) ? (nullable) {Object3D}
remove_object(obj)
set_active(scene_name)
set_bloom_params(bloom_params)
set_color_correction_params(color_corr_params)
set_dof_params(dof_params)
set_environment_colors(opt_environment_energyopt, opt_horizon_coloropt, opt_zenith_coloropt)
set_fog_color_density(val)
set_fog_params(fog_params)
set_glow_material_params(glow_material_params)
set_god_rays_params(god_rays_params)
set_hmd_params(hmd_params)
set_mb_params(mb_params)
set_outline_color(color)
set_outline_intensity(obj, value)
set_shadow_params(shadow_params)
set_sky_params(sky_params)
set_ssao_params(ssao_params)
set_water_params(water_params)
set_wind_params(wind_params)
show_object(obj, ignore_childrenopt)
update_scene_materials_params()
Type Definitions
BloomParams
ColorCorrectionParams
DOFParams
HMDParams
SceneMetaTags
SkyParams
SSAOParams
WindParams

			screen

Methods
check_fullscreen() ? {boolean}
check_fullscreen_hmd() ? {boolean}
draw_mixer_strip()
exit_fullscreen()
exit_fullscreen_hmd()
exit_split_screen() ? {boolean}
plot_array(header, slot, arr, arg_min, arg_max, val_min, val_max)
request_fullscreen(elemopt, enabled_cbopt, disabled_cbopt)
request_fullscreen_hmd(elementopt, enabled_cbopt, disabled_cbopt)
request_split_screen(enter_cbopt, exit_cbopt)
shot(formatopt, qualityopt)

			screenshooter

Methods
shot(formatopt, qualityopt)

			sfx

Methods
apply_playlist(objs, delay, random)
check_active_speakers() ? {boolean}
clear_playlist()
cyclic(obj, cyclic)
detect_audio_container(hintopt) ? {string}
detect_video_container(hintopt) ? {string}
duck(objnullable, value, time)
get_compressor_params() ? {CompressorParams}
get_duration(objnullable) ? {number}
get_filter_freq_response(obj, freq_arr, mag_arr, phase_arr)
get_filter_params(obj) ? {FilterParams}
get_positional_params(obj) ? {PositionalParams}
get_speaker_objects() ? {Array}
get_volume(objnullable) ? {number}
is_cyclic(obj) ? {boolean}
is_muted(objnullable) ? {boolean}
is_playing(obj) ? {boolean}
listener_reset_speed(speed, diropt, nullable)
listener_stride()
loop_stop(obj, whenopt, waitopt)
mute(objnullable, muted)
pause(obj)
play(obj, whenopt, durationopt)
play_def(obj)
playrate(obj, playrate)
playrate(obj) ? {number}
resume(obj)
set_compressor_params(params)
set_filter_params(obj, params)
set_positional_params(obj, params)
set_volume(objnullable, volume)
speaker_reset_speed(obj)
speaker_reset_speed(obj, speed, diropt, nullable)
stop(obj)
unduck(objnullable)

			storage

Methods
cleanup(prefixnullable)
debug(prefixnullable)
get(key, prefixnullable) ? {string}
init(prefix)
set(key, value, prefixnullable)

			textures

Methods
change_image(obj, text_name, image_path, callbackopt)
get_canvas_ctx(obj, text_name) ? {CanvasRenderingContext2D}
get_texture_names(obj) ? {Array}
pause_video(texture_name, data_idopt)
play_video(texture_name, data_idopt)
replace_image(obj, text_name, image, callbackopt)
reset_video(texture_name, data_idopt)
update_canvas_ctx(obj, text_name)
Type Definitions
TexChangingFinishCallback(success)

			time

Methods
animate(from, to, timeout, anim_cb) ? {number}
clear_animation(id)
clear_timeout(id)
get_timeline() ? {number}
set_timeout(callback, time) ? {number}

			transform

Methods
distance(obj1, obj2) ? {number}
empty_reset_transform(obj)
get_matrix(obj, destopt) ? {Mat4}
get_matrix_rel(obj, destopt) ? {Mat4}
get_object_bounding_box(obj) ? {BoundingBox}
get_object_center(obj, calc_bs_center, destopt) ? {Vec3}
get_object_size(obj) ? {number}
get_rotation(obj, opt_destopt) ? {Quat}
get_rotation_euler(obj, destopt) ? {Euler}
get_rotation_euler(obj, destopt) ? {Euler}
get_rotation_rel(obj, opt_destopt) ? {Quat}
get_scale(obj) ? {number}
get_scale_rel(obj) ? {number}
get_translation(obj, destopt) ? {Vec3}
get_translation_rel(obj, destopt) ? {Vec3}
get_tsr(obj, destopt) ? {TSR}
get_tsr_rel(obj, destopt) ? {TSR}
move_local(obj, dx, dy, dz)
rotate_x_local(obj, angle)
rotate_y_local(obj, angle)
rotate_z_local(obj, angle)
set_matrix(obj, mat)
set_matrix_rel(obj, mat)
set_rotation(obj, x, y, z, w)
set_rotation_euler(obj, x, y, z)
set_rotation_euler_rel(obj, x, y, z)
set_rotation_euler_rel_v(obj, euler)
set_rotation_euler_v(obj, euler)
set_rotation_rel(obj, x, y, z, w)
set_rotation_rel_v(obj, quat)
set_rotation_rel_v(obj, quat) ? {Quat}
set_rotation_v(obj, quat)
set_scale(obj, scale)
set_scale_rel(obj, scale)
set_translation(obj, x, y, z)
set_translation_obj_rel(obj, x, y, z, obj_ref)
set_translation_rel(obj, x, y, z)
set_translation_rel_v(obj, trans)
set_translation_v(obj, trans)
set_tsr(obj, tsr)
set_tsr_rel(obj, tsr)

			tsr

Methods
copy(tsr, tsr2)
create() ? {TSR}
from_mat4(mat, dest) ? {TSR}
from_values(x, y, z, s, qx, qy, qz, qw) ? {TSR}
get_quat_view() ? {Quat}
get_scale() ? {number}
get_trans_view(tsr) ? {Vec3}
identity(tsr)
interpolate(tsr, tsr2, factor, dest) ? {TSR}
invert(tsr, dest) ? {TSR}
multiply(tsr, tsr2, dest) ? {TSR}
set_quat(quat, dest)
set_scale(scale, dest)
set_sep(trans, scale, quat, destopt) ? {TSR}
set_trans(trans, dest)
set_transcale(transcale, dest)
to_mat4(tsr, destopt, nullable) ? {Mat4}
transform_dir_vec3(trans, tsr, dest)
transform_dir_vectors(vectors, tsr, new_vectors, dest_offsetopt) ? {Float32Array}
transform_tangents(vectors, tsr, new_vectors, dest_offsetopt) ? {Float32Array}
transform_vec3(trans, tsr, dest)
transform_vec3_inv(trans, tsr, dest)
transform_vectors(vectors, tsr, new_vectors, dest_offsetopt) ? {Float32Array}
translate(tsr, trans, dest) ? {TSR}

			util

Members
AXIS_MX
AXIS_MY
AXIS_MZ
AXIS_X
AXIS_Y
AXIS_Z
XYX
XYZ
XZX
XZY
YXY
YXZ
YZX
YZY
ZXY
ZXZ
ZYX
ZYZ
Methods
angle_wrap_0_2pi(angle) ? {number}
angle_wrap_periodic(angle, from, to) ? {number}
assert(Boolean)
cam_quat_to_mesh_quat(cam_quat, destopt) ? {Quat}
clamp(value, min, max) ? {number}
correct_cam_quat_up(quat, up_only)
deg_to_rad(degrees) ? {number}
dir_to_quat(dir, ident, destopt) ? {Quat}
euler_to_quat(euler, quatopt) ? {Quat}
f32(param) ? {Float32Array}
gen_tbn_quats(normals, tangentsopt) ? {Float32Array}
ground_project_cam_quat(quat, destopt) ? {Quat}
is_ie11() ? {boolean}
is_vector(o, dimensionopt) ? {boolean}
keyfind(key, value, array) ? {Array.<Object>}
keysearch(key, value, array) ? (nullable) {Object}
lerp(t, from, to) ? {number}
matrix_to_quat(matrix) ? {Quat}
ordered_angles_to_quat(angles, order, quatopt) ? {Quat}
quat_project(quat, quat_ident_dir, plane, plane_ident_dir, destopt) ? {Quat}
quat_to_dir(quat, ident, destopt) ? {Vec3}
quat_to_euler(quat, euleropt) ? {Euler}
quat_to_ordered_angles(quat, order, anglesopt) ? {Euler}
rad_to_deg(radians) ? {number}
sign(value) ? {number}
smooth(curr, last, delta, period) ? {number}
smooth_step(t, min, max) ? {number}
smooth_v(curr, last, delta, period, destopt) ? {Float32Array}
trunc(value) ? {number}
Type Definitions
RotationSequence

			vec3

Methods
add(a, b, out) ? {Vec3}
angle(a, b) ? {Number}
bezier(a, b, c, d, t, out) ? {Vec3}
clone(a) ? {Vec3}
copy(a, out) ? {Vec3}
create() ? {Vec3}
cross(a, b, out) ? {Vec3}
dist()
distance(a, b) ? {Number}
div()
divide(a, b, out) ? {Vec3}
dot(a, b) ? {Number}
forEach(a, stride, offset, count, fn, argopt) ? {Array}
fromValues(x, y, z) ? {Vec3}
hermite(a, b, c, d, t, out) ? {Vec3}
inverse(a, out) ? {Vec3}
len()
length(a) ? {Number}
lerp(a, b, t, out) ? {Vec3}
max(a, b, out) ? {Vec3}
min(a, b, out) ? {Vec3}
mul()
multiply(a, b, out) ? {Vec3}
negate(a, out) ? {Vec3}
normalize(a, out) ? {Vec3}
random(scaleopt, out) ? {Vec3}
rotateX(a, b, c, out) ? {Vec3}
rotateY(a, b, c, out) ? {Vec3}
rotateZ(a, b, c, out) ? {Vec3}
scale(a, b, out) ? {Vec3}
scaleAndAdd(a, b, scale, out) ? {Vec3}
set(x, y, z, out) ? {Vec3}
sqrDist()
sqrLen()
squaredDistance(a, b) ? {Number}
squaredLength(a) ? {Number}
str(vec) ? {String}
sub()
subtract(a, b, out) ? {Vec3}
transformMat3(a, m, out) ? {Vec3}
transformMat4(a, m, out) ? {Vec3}
transformQuat(a, q, out) ? {Vec3}

			vec4

Methods
add(a, b, out) ? {Vec4}
clone(a) ? {Vec4}
copy(a, out) ? {Vec4}
create() ? {Vec4}
dist()
distance(a, b) ? {Number}
div()
divide(a, b, out) ? {Vec4}
dot(a, b) ? {Number}
forEach(a, stride, offset, count, fn, argopt) ? {Array}
fromValues(x, y, z, w) ? {Vec4}
inverse(a, out) ? {Vec4}
len()
length(a) ? {Number}
lerp(a, b, t, out) ? {Vec4}
max(a, b, out) ? {Vec4}
min(a, b, out) ? {Vec4}
mul()
multiply(a, b, out) ? {Vec4}
negate(a, out) ? {Vec4}
normalize(a, out) ? {Vec4}
random(scaleopt, out) ? {Vec4}
scale(a, b, out) ? {Vec4}
scaleAndAdd(a, b, scale, out) ? {Vec4}
set(x, y, z, w, out) ? {Vec4}
sqrDist()
sqrLen()
squaredDistance(a, b) ? {Number}
squaredLength(a) ? {Number}
str(vec) ? {String}
sub()
subtract(a, b, out) ? {Vec4}
transformMat4(a, m, out) ? {Vec4}
transformQuat(a, q, out) ? {Vec4}

			version

Methods
date() ? {Date}
date_str() ? {string}
get_build_version() ? {string}
type() ? {string}
version() ? {Array}
version_str() ? {string}

			-NAMESPACES-

			b4w

Methods
get_namespace(mod_ns_require) ? {string}
module_check(module_id) ? {boolean}
register(module_id, fun)
require(module_id, nsopt) ? {Object3D}
Type Definitions
ModuleFunction(exports, require)
RequireFunction(module_id)

			Global

	Type Definitions
CameraMoveStyle
CharacterState
Date
Euler
GenericCallback()
Mat3
Mat4
Object3D
ParametricLine
Quat
RGB
RGBA
Sensor
TSR
Vec2
Vec3
Vec4
