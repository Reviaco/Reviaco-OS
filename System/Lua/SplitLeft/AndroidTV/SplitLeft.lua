if (get_application_name()=="Android Emulator - AndroidTV:5554") then
	-- x,y, xsize, ysize
        undecorate_window()
        unmaximize()
	set_window_geometry2(0,85,500,630);
        make_always_on_top()
        stick_window()
        focus_window()
end